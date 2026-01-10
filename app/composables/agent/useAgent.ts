import { agentApi, agentStreamApi } from '~/utils/API/agent'
import { useAgentStore } from '~/stores/agent'
import { useSession } from '~/composables/agent/useSession'

// 工具调用记录类型
export interface ToolCall {
    id: string
    toolName: string
    displayName: string
    message: string
    icon: string
    category: string
    status: 'calling' | 'completed'
    startTime: Date
    endTime?: Date
}

export const useAgent = () => {
    const userStore = useUserStore()
    const agentStore = useAgentStore()
    const { historyList } = useSession()

    const loading = ref(false)
    const error = ref<any>(null)
    const chatResult = ref<any>(null)

    // WebSocket 相关状态
    const wsConnection = ref<WebSocket | null>(null)
    const streamingMessage = ref<string>('') // 流式消息累积
    const isStreaming = ref(false)
    const agentStatus = useState<string>('agent_status', () => '')


    // 工具调用记录
    const toolCalls = ref<ToolCall[]>([])

    // 工具元数据缓存
    const toolMetadata = ref<Record<string, any>>({})

    // 加载工具元数据
    const loadToolMetadata = async () => {
        try {
            const response = await agentApi.getToolMetadata() as any
            if (response?.success && response?.data) {
                toolMetadata.value = response.data
            }
        } catch (err) {
            console.error('Failed to load tool metadata:', err)
        }
    }

    // 在初始化时加载元数据
    if (import.meta.client) {
        loadToolMetadata()
    }

    // 原有的普通消息发送（保留作为备用）
    const sendMessage = async (query: string) => {
        if (!query.trim()) return

        loading.value = true
        error.value = null

        try {
            if (!userStore.userInfo?.userId) {
                if (import.meta.client) {
                    ElMessage.error("请先登录")
                }
                throw new Error("User not logged in")
            }

            const payload = {
                user_id: String(userStore.userInfo.userId),
                query: query
            }
            console.log('Sending agent payload:', payload)

            const res = await agentApi.chat(payload)

            chatResult.value = res
            return res
        } catch (err: any) {
            console.error('Agent chat error:', err)
            if (err.statusCode === 422) {
                console.error('Validation Error Details:', err.data)
            }
            error.value = err
            if (import.meta.client) {
                ElMessage.error("发送消息失败，请稍后重试" + err)
            }
            throw err
        } finally {
            loading.value = false
        }
    }

    // WebSocket 流式消息发送

    const sendStreamMessage = (query: string, explicitSessionId?: number | string) => {
        if (!query.trim()) return

        if (!userStore.userInfo?.userId) {
            if (import.meta.client) {
                ElMessage.error("请先登录")
            }
            return
        }

        const effectiveSessionId = explicitSessionId || agentStore.sessionId || undefined

        // 重置状态
        streamingMessage.value = ''
        agentStatus.value = '' // 重置 agent 状态
        error.value = null
        isStreaming.value = true
        toolCalls.value = [] // 清空工具调用记录

        try {
            // 如果已有连接，先关闭
            if (wsConnection.value) {
                agentStreamApi.closeConnection(wsConnection.value)
            }

            // 创建新的 WebSocket 连接
            wsConnection.value = agentStreamApi.createChatStream(
                String(userStore.userInfo.userId),
                effectiveSessionId, // 使用有效 Session ID
                // onMessage 回调
                (data) => {
                    console.log('Received WebSocket message:', data)

                    // 1. 处理纯文本消息 (直接追加)
                    if (typeof data === 'string') {
                        streamingMessage.value += data
                        return
                    }

                    // 2. 处理 JSON 结构消息
                    switch (data.type) {

                        case 'session_created':
                            const { sessionId: newSessionId, title } = data.data;
                            console.log('🎉 Session Created:', newSessionId, title);

                            // 1. Update Pinia Store
                            agentStore.setSession(newSessionId, title);

                            // 2. Update History List (unshift to top)
                            if (userStore.userInfo?.userId) {
                                historyList.value.unshift({
                                    id: newSessionId,
                                    user_id: Number(userStore.userInfo.userId),
                                    title: title || '新对话',
                                    created_at: new Date().toISOString()
                                });
                            }
                            break;

                        case 'session_updated':
                            const { sessionId: updatedId, title: newTitle } = data.data;
                            console.log('📝 Title Updated:', newTitle);

                            // 1. Update Pinia Store (if current)
                            if (agentStore.sessionId == updatedId) {
                                agentStore.updateTitle(newTitle);
                            }

                            // 2. Update History List
                            const sessionItem = historyList.value.find(s => s.id === updatedId);
                            if (sessionItem) {
                                sessionItem.title = newTitle;
                            }
                            break;

                        case 'status':
                            // 处理状态更新 (thinking, tool_calling, etc.)
                            if (data.status === 'thinking') {
                                agentStatus.value = '正在思考...'
                            } else if (data.status === 'tool_calling') {
                                // 使用工具元数据中的友好信息
                                const toolData = data.data || {}
                                const toolName = toolData.tool || '未知工具'
                                const displayName = toolData.display_name || toolName
                                const message = toolData.message || `正在调用 ${displayName}`
                                const icon = toolData.icon || 'tool'
                                const category = toolData.category || 'other'

                                // 更新状态为用户友好的描述
                                agentStatus.value = message

                                // 添加工具调用记录
                                toolCalls.value.push({
                                    id: `${toolName}-${Date.now()}`,
                                    toolName,
                                    displayName,
                                    message,
                                    icon,
                                    category,
                                    status: 'calling',
                                    startTime: new Date()
                                })
                            } else if (data.status === 'tool_completed') {
                                const toolData = data.data || {}
                                const toolName = toolData.tool

                                // 更新工具调用记录状态
                                const targetCall = toolCalls.value.find(
                                    call => call.toolName === toolName && call.status === 'calling'
                                )
                                if (targetCall) {
                                    targetCall.status = 'completed'
                                    targetCall.endTime = new Date()
                                }

                                agentStatus.value = ''
                            } else if (data.status === 'completed') {
                                agentStatus.value = '' // 完成后清除状态

                                //关闭长连接
                                agentStreamApi.closeConnection(wsConnection.value as WebSocket)
                            }
                            break;

                        case 'chunk':
                            // 处理内容片段
                            if (data.content) {
                                streamingMessage.value += data.content
                            }
                            break;

                        case 'token':
                            // 处理流式 token
                            streamingMessage.value += data.content || data.token || ''
                            break;

                        case 'message':
                            // 处理完整消息或片段
                            streamingMessage.value += data.content || data.message || ''
                            break;

                        case 'end':
                            // 流式结束
                            console.log('Stream ended')
                            isStreaming.value = false
                            agentStatus.value = ''
                            chatResult.value = {
                                message: streamingMessage.value,
                                completed: true
                            }
                            break;

                        case 'error':
                            // 错误消息
                            console.error('Stream error:', data)
                            error.value = data
                            agentStatus.value = '发生错误'
                            isStreaming.value = false
                            if (import.meta.client) {
                                ElMessage.error(data || '发生错误')
                            }
                            break;

                        default:
                            // 未知类型，如果包含 content 则尝试显示
                            if (data.content) {
                                streamingMessage.value += data.content
                            }
                            break;
                    }
                },
                // onError 回调
                (err) => {
                    console.error('WebSocket error:', err)
                    // WebSocket 的 error 事件通常不包含具体的错误信息，所以只在控制台打印
                    // 避免频繁弹窗打扰用户，除非明确失败
                },
                // onClose 回调
                (event) => {
                    console.log('WebSocket closed:', event)
                    isStreaming.value = false
                    agentStatus.value = ''

                    // 1000 是正常关闭，1005 是无状态关闭（有时也是正常的）
                    // 只有非正常关闭才提示
                    if (event.code !== 1000 && event.code !== 1005 && import.meta.client) {
                        // ElMessage.warning('连接已断开') // 暂时屏蔽，避免体验不好
                    }
                }
            )

            // 等待连接建立后发送消息
            wsConnection.value.addEventListener('open', () => {
                if (wsConnection.value) {
                    agentStreamApi.sendMessage(wsConnection.value, query, effectiveSessionId)
                }
            })

        } catch (err: any) {
            console.error('Failed to create WebSocket connection:', err)
            error.value = err
            isStreaming.value = false
            if (import.meta.client) {
                ElMessage.error('连接失败，请稍后重试')
            }
        }
    }

    // 关闭 WebSocket 连接
    const closeStream = () => {
        if (wsConnection.value) {
            agentStreamApi.closeConnection(wsConnection.value)
            wsConnection.value = null
            isStreaming.value = false
        }
    }

    // 组件卸载时清理 - Commented out for persistent stream
    /* onUnmounted(() => {
        closeStream()
    }) */

    return {
        // 原有的普通消息
        sendMessage,
        loading,
        error,
        chatResult,

        // WebSocket 流式消息
        sendStreamMessage,
        streamingMessage,
        isStreaming,
        closeStream,
        wsConnection,
        agentStatus,

        // 工具调用相关
        toolCalls,
        toolMetadata
    }
}
