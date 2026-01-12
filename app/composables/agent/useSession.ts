import { agentApi } from '~/utils/API/agent'
import { MessagesApi, get_session_messages, deleteSession } from '~/utils/API/AgentMessages/Messages'

export interface Session {
    id: number
    user_id: number
    title: string
    created_at: string
}

interface ApiResponse<T> {
    code: number
    message: string
    data: {
        items: T[]
        page: number
        page_size: number
        total: number
    }
}

export const useSession = () => {
    const userStore = useUserStore()
    const historyList = useState<Session[]>('session_history', () => [])
    const loading = ref(false)
    const error = ref<any>(null)

    const fetchHistory = async () => {
        if (!userStore.userInfo?.userId) return

        loading.value = true
        error.value = null

        try {
            const res = await agentApi.getHistory({
                page: 1, // Default page
                page_size: 20 // Default page size
            }) as unknown as ApiResponse<Session>

            if (res.code === 200 && res.data && Array.isArray(res.data.items)) {
                historyList.value = res.data.items
            } else {
                historyList.value = []
            }

        } catch (err) {
            console.error('Failed to fetch history:', err)
            error.value = err
            ElMessage.error('获取历史记录失败')
        } finally {
            loading.value = false
        }
    }

    const createSession = async (content: string) => {
        if (!userStore.userInfo?.userId) return null

        try {
            const res = await MessagesApi.createSession({
                content: content
            }) as any

            let newSession = null
            // Handle: { code: 200, data: { sessionId: 1, title: "...", message: ... } }
            if (res.code === 200 && res.data) {
                newSession = {
                    id: res.data.sessionId,
                    user_id: Number(userStore.userInfo.userId),
                    title: res.data.title,
                    created_at: new Date().toISOString() // Backend might not return date, use current
                }
            }

            if (newSession) {
                historyList.value.unshift(newSession)
                return newSession
            }
            return null
        } catch (err) {
            console.error('Failed to create session:', err)
            // Failed silently to not interrupt user flow too much, or show error
            return null
        }
    }

    const fetchSessionMessages = async (sessionId: string | number) => {
        try {
            const res = await get_session_messages(sessionId) as any
            if (res.code == 200 || res.code === '200') {
                return res.data
            }
            return []
        } catch (err) {
            console.error('Failed to fetch session messages:', err)
            return []
        }
    }

    const removeSession = async (sessionId: number) => {
        try {
            const res = await deleteSession(sessionId) as any
            if (res.code === 200 || res.code === '200') {
                historyList.value = historyList.value.filter(s => s.id !== sessionId)
                ElMessage.success('会话删除成功')
                return true
            }
            ElMessage.error(res.message || '删除失败')
            return false
        } catch (e: any) {
            console.error(e)
            ElMessage.error(e.message || '删除失败')
            return false
        }
    }

    return {
        historyList,
        loading,
        error,
        fetchHistory,
        createSession,
        fetchSessionMessages,
        removeSession
    }
}
