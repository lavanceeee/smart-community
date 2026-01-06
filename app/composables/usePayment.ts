import { createOrderApi, getPaymentHistoryApi, getMyBillsApi, getBillDetailApi } from '@/utils/api'

export const usePayment = () => {
    const loading = ref(false)
    const pendingBills = ref<any[]>([])
    const historyRecords = ref<any[]>([])
    const currentBill = ref<any>(null)

    // 查询我的物业费账单 (待缴)
    const fetchMyBills = async (status: number = 0) => {
        loading.value = true
        try {
            const res = await getMyBillsApi({ status }) as any
            if (res.code === 200 && res.data && res.data.length > 0) {
                pendingBills.value = res.data
            }
            return pendingBills.value
        } catch (e) {
            console.error('获取账单失败:', e)
            return pendingBills.value
        } finally {
            loading.value = false
        }
    }

    // 查询缴费记录
    const fetchPaymentHistory = async () => {
        loading.value = true
        try {
            const res = await getPaymentHistoryApi({ pageSize: 50 }) as any
            if (res.code === 200 && res.data && res.data.length > 0) {
                historyRecords.value = res.data
            }
            return historyRecords.value
        } catch (e) {
            console.error('获取缴费记录失败:', e)
            return historyRecords.value
        } finally {
            loading.value = false
        }
    }

    // 获取账单详情
    const fetchBillDetail = async (billId: string | number) => {
        loading.value = true
        try {
            const res = await getBillDetailApi(billId) as any
            if (res.code === 200) {
                currentBill.value = res.data
            }
            return res.data
        } catch (e) {
            console.error('获取账单详情失败:', e)
            throw e
        } finally {
            loading.value = false
        }
    }

    // 创建物业费支付订单
    const createPaymentOrder = async (billId: string | number, amount: number, paymentMethod: string, description: string = '物业费缴纳') => {
        loading.value = true
        try {
            const data = {
                orderType: "PROPERTY_FEE",
                amount: amount,
                paymentMethod: paymentMethod,
                relatedId: billId,
                description: description
            };

            const res = await createOrderApi(data) as any

            if (res.code == 200) {
                return res.data;
            }
            else {
                ElMessage.error(res.message || '创建订单失败，请重试')
                return null;
            }
        } catch (e: any) {
            console.error('创建订单失败:', e)
            ElMessage.error(e.message || '创建订单失败，请重试');
            throw e
        } finally {
            loading.value = false
        }
    }

    return {
        loading,
        pendingBills,
        historyRecords,
        currentBill,
        fetchMyBills,
        fetchPaymentHistory,
        fetchBillDetail,
        createPaymentOrder
    }
}
