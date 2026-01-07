import {
    createProductOrderApi,
    getOrdersListApi,
    getOrdersListByTypeApi,
    getOrdersListByStatusApi,
    getOrderDetailApi,
    cancelOrderApi
} from '@/utils/api'

export const useGoodsOrder = () => {
    const loading = ref(false)
    const detailLoading = ref(false)
    const cancelLoading = ref(false)
    const orderList = ref<any[]>([])
    const orderDetail = ref<any>(null)
    const total = ref(0)
    const pagination = reactive({
        pageNum: 1,
        pageSize: 10
    })

    const filters = reactive({
        orderType: 'ALL', // ALL, PRODUCT, PROPERTY_FEE, RECHARGE
        status: 'ALL',     // ALL, 0, 1, 2, 3
        paymentMethod: 'ALL' // ALL, ALIPAY, WECHAT, WALLET
    })

    const createOrder = async (storeId: number, cartItemIds: number[], remark: string = '') => {
        loading.value = true
        try {
            const res = await createProductOrderApi({
                storeId,
                cartItemIds,
                remark
            }) as any

            if (res.code === 200) {
                ElMessage.success('订单创建成功')
                return res.data
            } else {
                ElMessage.error(res.message || '创建订单失败')
                return null
            }
        } catch (error: any) {
            console.error('Create order error:', error)
            ElMessage.error(error.message)
            return null
        } finally {
            loading.value = false
        }
    }

    const fetchOrderList = async () => {
        loading.value = true
        try {
            let res: any
            const params: any = {
                pageNum: pagination.pageNum,
                pageSize: pagination.pageSize
            }

            // Priority: Status > Type > PaymentMethod > All
            if (filters.status !== 'ALL') {
                params.status = Number(filters.status)
                res = await getOrdersListByStatusApi(params)
            } else if (filters.orderType !== 'ALL') {
                params.orderType = filters.orderType
                res = await getOrdersListByTypeApi(params)
            } else if (filters.paymentMethod !== 'ALL') {
                params.paymentMethod = filters.paymentMethod
                res = await getOrdersListApi(params)
            } else {
                res = await getOrdersListApi(params)
            }

            if (res.code === 200) {
                orderList.value = res.data.records
                total.value = res.data.total
            } else {
                ElMessage.error(res.message || '获取订单列表失败')
            }
        } catch (error) {
            console.error('Fetch orders error:', error)
            ElMessage.error('获取订单列表时网络请求失败')
        } finally {
            loading.value = false
        }
    }

    const fetchOrderDetail = async (orderId: string | number) => {
        detailLoading.value = true
        orderDetail.value = null
        try {
            const res = await getOrderDetailApi(orderId) as any
            if (res.code === 200) {
                orderDetail.value = res.data
                return res.data
            } else {
                ElMessage.error(res.message || '获取订单详情失败')
            }
        } catch (error) {
            console.error('Fetch detail error:', error)
            ElMessage.error('获取订单详情时网络请求失败')
        } finally {
            detailLoading.value = false
        }
    }

    const cancelOrder = async (orderId: string | number) => {
        cancelLoading.value = true
        try {
            const res = await cancelOrderApi(orderId) as any
            if (res.code === 200) {
                ElMessage.success('订单已取消')
                await fetchOrderList()
                return true
            } else {
                ElMessage.error(res.message || '取消订单失败')
                return false
            }
        } catch (error) {
            console.error('Cancel order error:', error)
            ElMessage.error('取消订单时网络请求失败')
            return false
        } finally {
            cancelLoading.value = false
        }
    }

    const setFilter = (type: 'orderType' | 'status' | 'paymentMethod', value: string) => {
        filters[type] = value
        // Reset to page 1 when filter changes
        pagination.pageNum = 1

        // Mutual exclusivity for specific APIs
        if (type === 'orderType' && value !== 'ALL') {
            filters.status = 'ALL'
            filters.paymentMethod = 'ALL'
        }
        if (type === 'status' && value !== 'ALL') {
            filters.orderType = 'ALL'
            filters.paymentMethod = 'ALL'
        }
        if (type === 'paymentMethod' && value !== 'ALL') {
            filters.orderType = 'ALL'
            filters.status = 'ALL'
        }

        fetchOrderList()
    }

    const handlePageChange = (page: number) => {
        pagination.pageNum = page
        fetchOrderList()
    }

    return {
        loading,
        detailLoading,
        cancelLoading,
        orderList,
        orderDetail,
        total,
        pagination,
        filters,
        createOrder,
        fetchOrderList,
        fetchOrderDetail,
        cancelOrder,
        setFilter,
        handlePageChange
    }
}
