/**
 * WebSocket 管理 Composable
 * 用于管理 WebSocket 连接、消息收发、心跳等
 */

export interface WebSocketMessage {
    type: 'SYSTEM' | 'CHAT' | 'HEARTBEAT' | 'READ_RECEIPT' | 'ERROR'
    messageId?: number
    fromUserId?: number
    fromUserName?: string
    fromUserAvatar?: string
    toUserId?: number
    content?: string
    createTime?: string
    isRead?: number
}

// 全局状态（单例模式）
const ws = ref<WebSocket | null>(null)
const isConnected = ref(false)
const isConnecting = ref(false)
const reconnectAttempts = ref(0)
const maxReconnectAttempts = 5
const reconnectDelay = 3000

let heartbeatTimer: NodeJS.Timeout | null = null
let reconnectTimer: NodeJS.Timeout | null = null

// 消息回调（全局共享）
const messageCallbacks: ((message: WebSocketMessage) => void)[] = []

export const useWebSocket = () => {
    const config = useRuntimeConfig()
    const userStore = useUserStore()
    
    /**
     * 建立 WebSocket 连接
     */
    const connect = () => {
        if (isConnecting.value || isConnected.value) {
            return
        }
        
        if (!userStore.token) {
            console.error('无法建立 WebSocket 连接：未找到 token')
            return
        }
        
        isConnecting.value = true
        
        try {
            // 构建 WebSocket URL
            const wsProtocol = config.public.apiBase.startsWith('https') ? 'wss' : 'ws'
            const wsHost = config.public.apiBase.replace(/^https?:\/\//, '')
            const wsUrl = `${wsProtocol}://${wsHost}/api/ws/chat?token=${userStore.token}`
            
            console.log('正在连接 WebSocket...', wsUrl)
            
            ws.value = new WebSocket(wsUrl)
            
            // 连接成功
            ws.value.onopen = () => {
                console.log('WebSocket 连接成功')
                isConnected.value = true
                isConnecting.value = false
                reconnectAttempts.value = 0
                
                // 启动心跳
                startHeartbeat()
            }
            
            // 接收消息
            ws.value.onmessage = (event) => {
                try {
                    const message: WebSocketMessage = JSON.parse(event.data)
                    console.log('收到 WebSocket 消息:', message)
                    
                    // 触发所有回调
                    messageCallbacks.forEach(callback => callback(message))
                } catch (error) {
                    console.error('解析 WebSocket 消息失败:', error)
                }
            }
            
            // 连接关闭
            ws.value.onclose = () => {
                console.log('WebSocket 连接关闭')
                isConnected.value = false
                isConnecting.value = false
                stopHeartbeat()
                
                // 尝试重连
                attemptReconnect()
            }
            
            // 连接错误
            ws.value.onerror = (error) => {
                console.error('WebSocket 错误:', error)
                isConnecting.value = false
            }
        } catch (error) {
            console.error('创建 WebSocket 连接失败:', error)
            isConnecting.value = false
        }
    }
    
    /**
     * 断开连接
     */
    const disconnect = () => {
        stopHeartbeat()
        
        if (reconnectTimer) {
            clearTimeout(reconnectTimer)
            reconnectTimer = null
        }
        
        if (ws.value) {
            ws.value.close()
            ws.value = null
        }
        
        isConnected.value = false
        isConnecting.value = false
        reconnectAttempts.value = 0
    }
    
    /**
     * 发送消息
     */
    const send = (message: WebSocketMessage) => {
        if (!isConnected.value || !ws.value) {
            console.warn('WebSocket 未连接，无法发送消息')
            return false
        }
        
        try {
            ws.value.send(JSON.stringify(message))
            return true
        } catch (error) {
            console.error('发送 WebSocket 消息失败:', error)
            return false
        }
    }
    
    /**
     * 发送心跳
     */
    const sendHeartbeat = () => {
        send({
            type: 'HEARTBEAT',
            content: 'ping'
        })
    }
    
    /**
     * 发送已读回执
     */
    const sendReadReceipt = (messageId: number, toUserId: number) => {
        send({
            type: 'READ_RECEIPT',
            messageId,
            toUserId
        })
    }
    
    /**
     * 启动心跳
     */
    const startHeartbeat = () => {
        stopHeartbeat()
        
        // 每30秒发送一次心跳
        heartbeatTimer = setInterval(() => {
            sendHeartbeat()
        }, 30000)
    }
    
    /**
     * 停止心跳
     */
    const stopHeartbeat = () => {
        if (heartbeatTimer) {
            clearInterval(heartbeatTimer)
            heartbeatTimer = null
        }
    }
    
    /**
     * 尝试重连
     */
    const attemptReconnect = () => {
        if (reconnectAttempts.value >= maxReconnectAttempts) {
            console.log('达到最大重连次数，停止重连')
            return
        }
        
        reconnectAttempts.value++
        console.log(`${reconnectDelay / 1000}秒后尝试第 ${reconnectAttempts.value} 次重连...`)
        
        reconnectTimer = setTimeout(() => {
            connect()
        }, reconnectDelay)
    }
    
    /**
     * 注册消息回调
     */
    const onMessage = (callback: (message: WebSocketMessage) => void) => {
        // 检查是否已经注册过（避免重复）
        if (!messageCallbacks.includes(callback)) {
            messageCallbacks.push(callback)
            console.log('注册 WebSocket 消息回调，当前回调数量:', messageCallbacks.length)
        }
        
        // 返回取消注册的函数
        return () => {
            const index = messageCallbacks.indexOf(callback)
            if (index > -1) {
                messageCallbacks.splice(index, 1)
                console.log('取消注册 WebSocket 消息回调，当前回调数量:', messageCallbacks.length)
            }
        }
    }
    
    // 页面关闭或刷新时断开连接
    if (import.meta.client) {
        window.addEventListener('beforeunload', () => {
            if (isConnected.value) {
                console.log('页面关闭，断开 WebSocket 连接')
                disconnect()
            }
        })
    }
    
    // 组件卸载时断开连接
    onUnmounted(() => {
        disconnect()
    })
    
    return {
        isConnected: readonly(isConnected),
        isConnecting: readonly(isConnecting),
        connect,
        disconnect,
        send,
        sendReadReceipt,
        onMessage
    }
}

