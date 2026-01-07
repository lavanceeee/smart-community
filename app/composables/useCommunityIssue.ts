import { getCommunityNewsApi, getAnnouncementDetailApi } from '@/utils/api'

//社区公告
export const useAnnouncementDetail = () => {
    const detail = ref<any>(null)
    const loading = ref(false)

    const fetchDetail = async (id: string | number) => {
        loading.value = true
        try {
            const res = await getAnnouncementDetailApi(id) as any
            if (res.code === 200) {
                detail.value = res.data
            } else {
                ElMessage.error(res.message || '获取公告详情失败')
            }
        } catch (error) {
            console.error('Fetch detail error:', error)
            ElMessage.error('获取公告详情时网络请求失败')
        } finally {
            loading.value = false
        }
    }

    return {
        detail,
        loading,
        fetchDetail
    }
}

export const useCommunityNews = () => {
    const newsList = ref<any[]>([])
    const total = ref(0)
    const loading = ref(false)
    // Search params state
    const queryParams = reactive({
        keyword: '',
        searchScope: 'ALL', // ALL, TITLE
        timeRange: 'ALL',   // ALL, WEEK, MONTH, YEAR
        sortType: 'TIME'    // TIME, RELEVANCE
    })

    // Pagination state
    const pagination = reactive({
        pageNum: 1,
        pageSize: 10
    })

    // Fetch news list
    const fetchNews = async () => {
        loading.value = true
        try {
            const params: any = {
                pageNum: pagination.pageNum,
                pageSize: pagination.pageSize,
                ...queryParams
            }
            // Remove empty keyword if preferred, or backend handles empty string
            if (!params.keyword) delete params.keyword

            const res = await getCommunityNewsApi(params) as any

            if (res.code === 200) {
                newsList.value = res.data.records
                total.value = res.data.total
            } else {
                ElMessage.error(res.message || '获取公告列表失败')
            }
        } catch (error) {
            console.error('Fetch news error:', error)
            ElMessage.error('获取公告列表时网络请求失败')
        } finally {
            loading.value = false
        }
    }

    // Handle page change
    const handlePageChange = (newPage: number) => {
        pagination.pageNum = newPage
        fetchNews()
    }

    return {
        newsList,
        total,
        loading,
        pagination,
        queryParams,
        fetchNews,
        handlePageChange
    }
}
