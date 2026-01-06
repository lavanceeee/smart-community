import { payPropertyFeeApi, getPaymentHistoryApi, getMyBillsApi, getBillDetailApi } from '@/utils/api'

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

    // 缴纳物业费
    const payBill = async (billId: string | number, amount: number) => {
        loading.value = true
        try {
            const res = await payPropertyFeeApi({
                billId,
                amount,
                paymentMethod: 'wallet'
            }) as any

            if (res.code == 200) {
                ElMessage.success('缴费成功！')
                return true;
            }
            else {
                ElMessage.error(res.message || '缴费失败，请重试')
                return false;
            }
        } catch (e) {
            console.error('支付失败:', e)
            ElMessage.error('支付失败，请重试');
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
        payBill
    }
}
