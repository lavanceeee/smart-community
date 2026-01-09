import { agentApi } from '~/utils/API/agent'

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
    const historyList = ref<Session[]>([])
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

    return {
        historyList,
        loading,
        error,
        fetchHistory
    }
}
