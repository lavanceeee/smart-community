
export const useVisitorList = () => {
    const visitorList = ref<any[]>([])
    const total = ref(0)
    const loading = ref(false)

    // Pagination state
    const pagination = reactive({
        pageNum: 1,
        pageSize: 10
    })

    // Fetch visitor list
    const fetchVisitorList = async () => {
        loading.value = true
        try {
            const params = {
                pageNum: pagination.pageNum,
                pageSize: pagination.pageSize
            }
            const res = await getVisitorListApi(params) as any

            if (res.code === 200) {
                visitorList.value = res.data.records
                total.value = res.data.total
            } else {
                ElMessage.error(res.message || '获取访客列表失败')
            }
        } catch (error) {
            console.error('Fetch visitor list error:', error)
            ElMessage.error('网络请求失败')
        } finally {
            loading.value = false
        }
    }

    // Handle page change
    const handlePageChange = (newPage: number) => {
        pagination.pageNum = newPage
        fetchVisitorList()
    }

    return {
        visitorList,
        total,
        loading,
        pagination,
        fetchVisitorList,
        handlePageChange
    }
}
