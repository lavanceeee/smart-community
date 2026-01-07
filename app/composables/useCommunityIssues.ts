export const useCommunityIssues = () => {

    const repairList = ref<any[]>([])
    const repairTotal = ref(0)
    const repairLoading = ref(false)
    const repairPagination = reactive({
        pageNum: 1,
        pageSize: 10
    })

    const fetchRepairList = async () => {
        repairLoading.value = true
        try {
            const res = await getRepairListApi(repairPagination) as any
            if (res.code === 200) {
                repairList.value = res.data.records
                repairTotal.value = res.data.total
            }
        } catch (error) {
            console.error('Fetch repair list error:', error)
        } finally {
            repairLoading.value = false
        }
    }

    const createRepair = async (data: any) => {
        repairLoading.value = true
        try {
            const res = await createRepairApi(data) as any
            if (res.code === 200) {
                ElMessage.success('报事维修提交成功')
                fetchRepairList()
                return true
            } else {
                ElMessage.error(res.message || '提交失败')
                return false
            }
        } catch (error) {
            ElMessage.error('提交报事维修时网络请求失败')
            return false
        } finally {
            repairLoading.value = false
        }
    }

    const handleRepairPageChange = (page: number) => {
        repairPagination.pageNum = page
        fetchRepairList()
    }

    const complaintList = ref<any[]>([])
    const complaintTotal = ref(0)
    const complaintLoading = ref(false)
    const complaintPagination = reactive({
        pageNum: 1,
        pageSize: 10
    })

    const fetchComplaintList = async () => {
        complaintLoading.value = true
        try {
            const res = await getComplaintListApi(complaintPagination) as any
            if (res.code === 200) {
                complaintList.value = res.data.records
                complaintTotal.value = res.data.total
            }

        } catch (error) {
            console.error('Fetch complaint list error:', error)
        } finally {
            complaintLoading.value = false
        }
    }

    const createComplaint = async (data: any) => {
        complaintLoading.value = true
        try {
            const res = await createComplaintApi(data) as any
            if (res.code === 200) {
                ElMessage.success('投诉提交成功')
                fetchComplaintList()
                return true
            } else {
                ElMessage.error(res.message || '提交失败')
                return false
            }
        } catch (error) {
            ElMessage.error('提交投诉时网络请求失败')
            return false
        } finally {
            complaintLoading.value = false
        }
    }

    const handleComplaintPageChange = (page: number) => {
        complaintPagination.pageNum = page
        fetchComplaintList()
    }

    return {
        // Repair
        repairList,
        repairTotal,
        repairLoading,
        repairPagination,
        fetchRepairList,
        createRepair,
        handleRepairPageChange,

        // Complaint
        complaintList,
        complaintTotal,
        complaintLoading,
        complaintPagination,
        fetchComplaintList,
        createComplaint,
        handleComplaintPageChange
    }
}
