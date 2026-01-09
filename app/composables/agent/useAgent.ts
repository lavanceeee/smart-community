import { agentApi, agentStreamApi } from '~/utils/API/agent'

export const useAgent = () => {
    const userStore = useUserStore()
    const loading = ref(false)
    const error = ref<any>(null)
    const chatResult = ref<any>(null)

    // WebSocket 相关状态
    const wsConnection = ref<WebSocket | null>(null)
    const streamingMessage = ref<string>('') // 流式消息累积
    const isStreaming = ref(false)

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
    const agentStatus = ref<string>('') // 增加状态显示

    const sendStreamMessage = (query: string) => {
        if (!query.trim()) return

        if (!userStore.userInfo?.userId) {
            if (import.meta.client) {
                ElMessage.error("请先登录")
            }
            return
        }

        // 重置状态
        streamingMessage.value = ''
        agentStatus.value = '' // 重置 agent 状态
        error.value = null
        isStreaming.value = true

        try {
            // 如果已有连接，先关闭
            if (wsConnection.value) {
                agentStreamApi.closeConnection(wsConnection.value)
            }

            // 创建新的 WebSocket 连接
            wsConnection.value = agentStreamApi.createChatStream(
                String(userStore.userInfo.userId),
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
                        case 'status':
                            // 处理状态更新 (thinking, tool_calling, etc.)
                            if (data.status === 'thinking') {
                                agentStatus.value = '正在思考...'
                            } else if (data.status === 'tool_calling') {
                                agentStatus.value = `正在使用工具: ${data.data?.tool || '未知工具'}`
                            } else if (data.status === 'tool_completed') {
                                agentStatus.value = '工具调用完成'
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
                    agentStreamApi.sendMessage(wsConnection.value, query)
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

    // 组件卸载时清理
    onUnmounted(() => {
        closeStream()
    })

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
        agentStatus
    }
}
