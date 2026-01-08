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
                const userStore = useUserStore()
                
                // 立即添加到消息列表（乐观更新）
                const newMessage: ChatMessage = {
                    messageId: res.data?.messageId || Date.now(), // 使用返回的ID或临时ID
                    fromUserId: userStore.userInfo?.userId ? Number(userStore.userInfo.userId) : 0,
                    fromUserName: userStore.userInfo?.userName || '',
                    fromUserAvatar: userStore.userInfo?.avatar || '',
                    toUserId: toUserId,
                    toUserName: currentChatUser.value?.userName || '',
                    toUserAvatar: currentChatUser.value?.avatar || '',
                    content: content.trim(),
                    isRead: 0,
                    createTime: new Date().toISOString()
                }
                
                // 添加到消息列表
                messages.value.push(newMessage)
                
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
            const userStore = useUserStore()
            const currentUserId = userStore.userInfo?.userId ? Number(userStore.userInfo.userId) : 0
            const message = messages.value.find(m => m.messageId === messageId)
            
            // 只标记"我收到的"消息为已读（不标记我发送的消息）
            if (!message || message.fromUserId === currentUserId) {
                return
            }
            
            const res = await markMessageReadApi(messageId) as any
            
            if (res.code === 200) {
                // 更新本地消息状态
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
            const userStore = useUserStore()
            const currentUserId = userStore.userInfo?.userId ? Number(userStore.userInfo.userId) : 0
            
            if (res.code === 200) {
                // 只更新"我收到的"消息状态（fromUserId是对方，toUserId是我）
                messages.value.forEach(message => {
                    if (message.fromUserId === otherUserId && message.toUserId === currentUserId) {
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
            const userStore = useUserStore()
            const currentUserId = userStore.userInfo?.userId ? Number(userStore.userInfo.userId) : 0
            
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
            
            // 如果是收到的消息（不是自己发的）
            const isReceivedMessage = message.toUserId === currentUserId && message.fromUserId !== currentUserId
            
            // 如果是当前聊天对象的消息
            if (currentChatUser.value && 
                (message.fromUserId === currentChatUser.value.userId || 
                 message.toUserId === currentChatUser.value.userId)) {
                
                // 检查是否已存在（避免重复）
                const exists = messages.value.some(m => m.messageId === message.messageId)
                
                if (!exists) {
                    messages.value.push(message)
                } else {
                    // 如果已存在，更新消息信息（可能是临时ID被真实ID替换）
                    const index = messages.value.findIndex(m => m.messageId === message.messageId)
                    if (index !== -1) {
                        messages.value[index] = message
                    }
                }
                
                // 如果是收到的消息，自动标记已读
                if (isReceivedMessage) {
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

