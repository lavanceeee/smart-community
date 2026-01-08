/**
 * 私信管理 Composable
 * 管理聊天记录、发送消息、未读数等
 */

import type { WebSocketMessage } from './useWebSocket'

export interface ChatMessage {
    messageId: number
    fromUserId: number
    fromUserName: string
    fromUserAvatar: string
    toUserId: number
    toUserName: string
    toUserAvatar: string
    content: string
    isRead: number  // 0-未读 1-已读
    createTime: string
    readTime?: string
}

export interface ChatSession {
    userId: number
    userName: string
    avatar: string
    lastMessage?: string
    lastMessageTime?: string
    unreadCount: number
    isOnline?: boolean
}

export const useChat = () => {
    const loading = ref(false)
    const sending = ref(false)
    
    // 当前聊天对象
    const currentChatUser = ref<{ userId: number; userName: string; avatar: string } | null>(null)
    
    // 聊天记录
    const messages = ref<ChatMessage[]>([])
    const total = ref(0)
    
    // 未读消息数
    const unreadCount = ref(0)
    
    // WebSocket 实例
    const { isConnected, connect, disconnect, sendReadReceipt, onMessage } = useWebSocket()
    
    /**
     * 获取聊天记录
     */
    const getChatHistory = async (otherUserId: number, params: { pageNum?: number; pageSize?: number } = {}) => {
        loading.value = true
        try {
            const res = await getChatHistoryApi(otherUserId, {
                pageNum: params.pageNum || 1,
                pageSize: params.pageSize || 50
            }) as any
            
            if (res.code === 200) {
                // 按时间倒序排列（最新的在最后）
                messages.value = (res.data.records || []).reverse()
                total.value = res.data.total || 0
                return res.data
            } else {
                throw new Error(res.message || '获取聊天记录失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '获取聊天记录失败')
            throw error
        } finally {
            loading.value = false
        }
    }
    
    /**
     * 发送消息
     */
    const sendMessage = async (toUserId: number, content: string) => {
        if (!content.trim()) {
            ElMessage.warning('消息内容不能为空')
            return
        }
        
        sending.value = true
        try {
            const res = await sendMessageApi({
                toUserId,
                content: content.trim()
            }) as any
            
            if (res.code === 200) {
                // 消息会通过 WebSocket 推送回来，不需要手动添加
                return res.data
            } else {
                throw new Error(res.message || '发送消息失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '发送消息失败')
            throw error
        } finally {
            sending.value = false
        }
    }
    
    /**
     * 标记消息已读
     */
    const markMessageRead = async (messageId: number, toUserId: number) => {
        try {
            const res = await markMessageReadApi(messageId) as any
            
            if (res.code === 200) {
                // 更新本地消息状态
                const message = messages.value.find(m => m.messageId === messageId)
                if (message) {
                    message.isRead = 1
                }
                
                // 发送已读回执
                if (isConnected.value) {
                    sendReadReceipt(messageId, toUserId)
                }
            }
        } catch (error) {
            console.error('标记消息已读失败:', error)
        }
    }
    
    /**
     * 标记所有消息已读
     */
    const markAllMessagesRead = async (otherUserId: number) => {
        try {
            const res = await markAllMessagesReadApi(otherUserId) as any
            
            if (res.code === 200) {
                // 更新本地消息状态
                messages.value.forEach(message => {
                    if (message.toUserId === otherUserId || message.fromUserId === otherUserId) {
                        message.isRead = 1
                    }
                })
                
                // 刷新未读数
                await getUnreadCount()
            }
        } catch (error) {
            console.error('标记所有消息已读失败:', error)
        }
    }
    
    /**
     * 获取未读消息数
     */
    const getUnreadCount = async () => {
        try {
            const res = await getUnreadCountApi() as any
            
            if (res.code === 200) {
                unreadCount.value = res.data || 0
                return res.data
            }
        } catch (error) {
            console.error('获取未读消息数失败:', error)
        }
    }
    
    /**
     * 检查用户在线状态
     */
    const checkUserOnline = async (userId: number) => {
        try {
            const res = await checkUserOnlineApi(userId) as any
            
            if (res.code === 200) {
                return res.data === true
            }
            return false
        } catch (error) {
            console.error('检查用户在线状态失败:', error)
            return false
        }
    }
    
    /**
     * 打开聊天窗口
     */
    const openChat = async (user: { userId: number; userName: string; avatar: string }) => {
        currentChatUser.value = user
        
        // 获取聊天记录
        await getChatHistory(user.userId)
        
        // 标记所有消息已读
        await markAllMessagesRead(user.userId)
        
        // 确保 WebSocket 已连接
        if (!isConnected.value) {
            connect()
        }
    }
    
    /**
     * 关闭聊天窗口
     */
    const closeChat = () => {
        currentChatUser.value = null
        messages.value = []
    }
    
    /**
     * 处理 WebSocket 消息
     */
    const handleWebSocketMessage = (wsMessage: WebSocketMessage) => {
        if (wsMessage.type === 'CHAT') {
            // 新消息
            const message: ChatMessage = {
                messageId: wsMessage.messageId!,
                fromUserId: wsMessage.fromUserId!,
                fromUserName: wsMessage.fromUserName!,
                fromUserAvatar: wsMessage.fromUserAvatar!,
                toUserId: wsMessage.toUserId!,
                content: wsMessage.content!,
                isRead: wsMessage.isRead || 0,
                createTime: wsMessage.createTime!,
                toUserName: '',
                toUserAvatar: ''
            }
            
            // 如果是当前聊天对象的消息，添加到列表
            if (currentChatUser.value && 
                (message.fromUserId === currentChatUser.value.userId || 
                 message.toUserId === currentChatUser.value.userId)) {
                messages.value.push(message)
                
                // 如果是收到的消息，自动标记已读
                if (message.toUserId !== message.fromUserId && 
                    message.fromUserId === currentChatUser.value.userId) {
                    markMessageRead(message.messageId, message.fromUserId)
                }
            }
            
            // 刷新未读数
            getUnreadCount()
        } else if (wsMessage.type === 'READ_RECEIPT') {
            // 已读回执
            const message = messages.value.find(m => m.messageId === wsMessage.messageId)
            if (message) {
                message.isRead = 1
            }
        }
    }
    
    // 注册 WebSocket 消息监听
    onMounted(() => {
        onMessage(handleWebSocketMessage)
        
        // 获取未读消息数
        getUnreadCount()
        
        // 连接 WebSocket
        connect()
    })
    
    // 清理
    onUnmounted(() => {
        disconnect()
    })
    
    return {
        loading: readonly(loading),
        sending: readonly(sending),
        isConnected,
        currentChatUser: readonly(currentChatUser),
        messages: readonly(messages),
        total: readonly(total),
        unreadCount: readonly(unreadCount),
        getChatHistory,
        sendMessage,
        markMessageRead,
        markAllMessagesRead,
        getUnreadCount,
        checkUserOnline,
        openChat,
        closeChat
    }
}

