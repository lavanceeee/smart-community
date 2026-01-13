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

    // WebSocket 相关状态 - 使用 useState 实现跨页面共享
    const wsConnection = useState<WebSocket | null>('agent_ws_connection', () => null)
    const wsConnected = useState<boolean>('agent_ws_connected', () => false)
    const isConnecting = useState<boolean>('agent_ws_connecting', () => false) // 防止重复连接

    // 流式消息也用 useState 共享，这样页面导航后仍能接收
    const streamingMessage = useState<string>('agent_streaming_message', () => '')
    const isStreaming = useState<boolean>('agent_is_streaming', () => false)
    const agentStatus = useState<string>('agent_status', () => '')

    // 工具调用记录 - 也用 useState
    const toolCalls = useState<ToolCall[]>('agent_tool_calls', () => [])

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

    // 处理 WebSocket 消息的核心逻辑
    const handleWebSocketMessage = (data: any) => {
        console.log('Received WebSocket message:', data)

        // 1. 处理纯文本消息 (直接追加)
        if (typeof data === 'string') {
            streamingMessage.value += data
            return
        }

        // 2. 处理 JSON 结构消息
        switch (data.type) {
            case 'session_created':
                const { sessionId: newSessionId, title } = data.data
                console.log('🎉 Session Created:', newSessionId, title)

                // 1. Update Pinia Store
                agentStore.setSession(newSessionId, title)

                // 2. Update History List (unshift to top)
                if (userStore.userInfo?.userId) {
                    // 检查是否已存在，避免重复
                    const exists = historyList.value.some(s => s.id === newSessionId)
                    if (!exists) {
                        historyList.value.unshift({
                            id: newSessionId,
                            user_id: Number(userStore.userInfo.userId),
                            title: title || '新对话',
                            created_at: new Date().toISOString()
                        })
                    }
                }
                break

            case 'session_updated':
                const { sessionId: updatedId, title: newTitle } = data.data
                console.log('📝 Title Updated:', newTitle)

                // 1. Update Pinia Store (if current)
                if (agentStore.sessionId == updatedId) {
                    agentStore.updateTitle(newTitle)
                }

                // 2. Update History List
                const sessionItem = historyList.value.find(s => s.id === updatedId)
                if (sessionItem) {
                    sessionItem.title = newTitle
                }
                break

            case 'status':
                // 处理状态更新 (thinking, tool_calling, etc.)
                if (data.status === 'thinking') {
                    agentStatus.value = '正在思考...'
                } else if (data.status === 'tool_calling') {
                    const toolData = data.data || {}
                    const toolName = toolData.tool || '未知工具'
                    const displayName = toolData.display_name || toolName
                    const message = toolData.message || `正在调用 ${displayName}`
                    const icon = toolData.icon || 'tool'
                    const category = toolData.category || 'other'

                    agentStatus.value = message

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

                    const targetCall = toolCalls.value.find(
                        call => call.toolName === toolName && call.status === 'calling'
                    )
                    if (targetCall) {
                        targetCall.status = 'completed'
                        targetCall.endTime = new Date()
                    }

                    agentStatus.value = ''
                } else if (data.status === 'completed') {
                    agentStatus.value = ''
                    isStreaming.value = false
                }
                break

            case 'chunk':
                if (data.content) {
                    streamingMessage.value += data.content
                }
                break

            case 'token':
                streamingMessage.value += data.content || data.token || ''
                break

            case 'message':
                streamingMessage.value += data.content || data.message || ''
                break

            case 'end':
                console.log('Stream ended')
                isStreaming.value = false
                agentStatus.value = ''
                chatResult.value = {
                    message: streamingMessage.value,
                    completed: true
                }
                break

            case 'error':
                console.error('Stream error:', data)
                error.value = data
                agentStatus.value = '发生错误'
                isStreaming.value = false
                if (import.meta.client) {
                    ElMessage.error(data || '发生错误')
                }
                break

            default:
                if (data.content) {
                    streamingMessage.value += data.content
                }
                break
        }
    }

    // 初始化 WebSocket 连接 - 在页面挂载时调用
    const initConnection = () => {
        if (!import.meta.client) return

        // 如果正在连接中，不重复创建
        if (isConnecting.value) {
            console.log('WebSocket is already connecting, skipping...')
            return
        }

        // 如果已有连接且状态正常，不重复创建
        if (wsConnection.value && wsConnection.value.readyState === WebSocket.OPEN) {
            console.log('WebSocket already connected, reusing existing connection')
            return
        }

        // 如果连接正在建立中，等待
        if (wsConnection.value && wsConnection.value.readyState === WebSocket.CONNECTING) {
            console.log('WebSocket is in CONNECTING state, waiting...')
            return
        }

        if (!userStore.userInfo?.userId) {
            console.warn('Cannot init WebSocket: User not logged in')
            return
        }

        try {
            console.log('Creating new WebSocket connection...')
            isConnecting.value = true

            // 创建新的 WebSocket 连接
            wsConnection.value = agentStreamApi.createChatStream(
                String(userStore.userInfo.userId),
                undefined, // 初始化时不传 sessionId
                // onMessage 回调
                handleWebSocketMessage,
                // onError 回调
                (err) => {
                    console.error('WebSocket error:', err)
                    wsConnected.value = false
                    isConnecting.value = false
                },
                // onClose 回调
                (event) => {
                    console.log('WebSocket closed:', event.code, event.reason)
                    wsConnected.value = false
                    isConnecting.value = false
                    isStreaming.value = false
                    agentStatus.value = ''
                }
            )

            // 监听连接建立
            wsConnection.value.addEventListener('open', () => {
                console.log('✅ WebSocket connection established')
                wsConnected.value = true
                isConnecting.value = false
            })

        } catch (err: any) {
            console.error('Failed to create WebSocket connection:', err)
            error.value = err
            wsConnected.value = false
            isConnecting.value = false
        }
    }

    // 发送消息 - 复用已有连接
    const sendStreamMessage = (query: string, explicitSessionId?: number | string) => {
        if (!query.trim()) return

        if (!userStore.userInfo?.userId) {
            if (import.meta.client) {
                ElMessage.error("请先登录")
            }
            return
        }

        // 如果正在流式传输中，不允许发送新消息
        if (isStreaming.value) {
            console.warn('Already streaming, please wait...')
            return
        }

        // 优先使用显式传入的 sessionId，再 fallback 到 store
        const effectiveSessionId = explicitSessionId || agentStore.sessionId || undefined

        console.log('📤 sendStreamMessage called:')
        console.log('  - explicitSessionId:', explicitSessionId)
        console.log('  - agentStore.sessionId:', agentStore.sessionId)
        console.log('  - effectiveSessionId:', effectiveSessionId)

        // 重置状态
        streamingMessage.value = ''
        agentStatus.value = ''
        error.value = null
        isStreaming.value = true
        toolCalls.value = []

        // 确保连接存在且已打开
        if (!wsConnection.value || wsConnection.value.readyState !== WebSocket.OPEN) {
            console.warn('WebSocket not connected, initializing...')
            initConnection()

            // 等待连接建立后发送消息
            const checkAndSend = () => {
                if (wsConnection.value && wsConnection.value.readyState === WebSocket.OPEN) {
                    console.log('Connection ready, sending message...')
                    agentStreamApi.sendMessage(wsConnection.value, query, effectiveSessionId)
                } else if (isConnecting.value || (wsConnection.value && wsConnection.value.readyState === WebSocket.CONNECTING)) {
                    // 还在连接中，继续等待
                    setTimeout(checkAndSend, 100)
                } else {
                    // 连接失败
                    error.value = new Error('WebSocket connection failed')
                    isStreaming.value = false
                    if (import.meta.client) {
                        ElMessage.error('连接失败，请稍后重试')
                    }
                }
            }

            setTimeout(checkAndSend, 100)
            return
        }

        // 直接发送消息
        try {
            console.log('Sending message directly...')
            agentStreamApi.sendMessage(wsConnection.value, query, effectiveSessionId)
        } catch (err: any) {
            console.error('Failed to send message:', err)
            error.value = err
            isStreaming.value = false
            if (import.meta.client) {
                ElMessage.error('发送消息失败')
            }
        }
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

    // 关闭 WebSocket 连接
    const closeStream = () => {
        if (wsConnection.value) {
            console.log('Closing WebSocket connection...')
            agentStreamApi.closeConnection(wsConnection.value)
            wsConnection.value = null
            wsConnected.value = false
            isConnecting.value = false
            isStreaming.value = false
        }
    }

    return {
        // 原有的普通消息
        sendMessage,
        loading,
        error,
        chatResult,

        // WebSocket 连接管理
        initConnection,
        closeStream,
        wsConnection,
        wsConnected,

        // WebSocket 流式消息
        sendStreamMessage,
        streamingMessage,
        isStreaming,
        agentStatus,

        // 工具调用相关
        toolCalls,
        toolMetadata
    }
}
