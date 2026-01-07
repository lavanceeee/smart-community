
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
            ElMessage.error('获取访客列表时网络请求失败')
        } finally {
            loading.value = false
        }
    }

    // Handle page change
    const handlePageChange = (newPage: number) => {
        pagination.pageNum = newPage
        fetchVisitorList()
    }

    // Create visitor registration
    const createVisitor = async (data: any) => {
        loading.value = true
        try {
            const res = await createVisitorApi(data) as any
            if (res.code === 200) {
                ElMessage.success('访客登记提交成功')
                fetchVisitorList() // Refresh list
                return true
            } else {
                ElMessage.error(res.message || '提交失败')
                return false
            }
        } catch (error) {
            console.error('Create visitor error:', error)
            ElMessage.error('提交访客登记时网络请求失败')
            return false
        } finally {
            loading.value = false
        }
    }

    // Cancel visitor registration
    const cancelVisitor = async (registerId: number | string) => {
        try {
            const res = await cancelVisitorApi(registerId) as any
            if (res.code === 200) {
                ElMessage.success('撤销申请成功')
                fetchVisitorList() // Refresh list
                return true
            } else {
                ElMessage.error(res.message || '撤销失败')
                return false
            }
        } catch (error) {
            console.error('Cancel visitor error:', error)
            ElMessage.error('撤销申请时网络请求失败')
            return false
        }
    }

    return {
        visitorList,
        total,
        loading,
        pagination,
        fetchVisitorList,
        handlePageChange,
        createVisitor,
        cancelVisitor
    }
}
