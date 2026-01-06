export interface WalletInfo {
    walletId: number;
    userId: number;
    balance: number;
    frozenAmount: number;
    totalRecharge: number;
    totalExpense: number;
    status: number;
    createTime: string;
    updateTime: string;
}

export interface TransactionRecord {
    transactionId: number;
    userId: number;
    transactionNo: string;
    transactionType: string;
    amount: number;
    balanceBefore: number;
    balanceAfter: number;
    relatedUserId: number;
    relatedOrderNo: string;
    description: string;
    createTime: string;
}

export const useWallet = () => {
    const loading = useState('wallet-loading', () => false);
    const error = useState<string | null>('wallet-error', () => null);
    const walletInfo = useState<WalletInfo | null>('wallet-info', () => null);
    const transactions = useState<TransactionRecord[]>('wallet-transactions', () => []);
    const lastOrderData = useState<any>('wallet-last-order', () => null);

    const fetchWalletInfo = async () => {
        loading.value = true;
        error.value = null;
        try {
            const res = await getWalletInfoApi() as any;
            if (res.code === 200) {
                walletInfo.value = res.data;
            } else {
                throw new Error(res.message || '获取钱包信息失败');
            }
        } catch (e: any) {
            error.value = e.message;
            console.error('Wallet Info Error:', e);
        } finally {
            loading.value = false;
        }
    };

    const fetchTransactions = async () => {
        loading.value = true;
        error.value = null;
        try {
            const res = await getTransactionsApi() as any;
            if (res.code === 200) {
                transactions.value = res.data;
            } else {
                throw new Error(res.message || '获取交易记录失败');
            }
        } catch (e: any) {
            error.value = e.message;
            console.error('Transactions Error:', e);
        } finally {
            loading.value = false;
        }
    };

    // 使用 createOrderApi 创建充值订单
    const createRechargeOrder = async (amount: number, paymentMethod: string) => {
        loading.value = true;
        error.value = null;
        try {
            const data = {
                orderType: "RECHARGE",
                amount: amount,
                paymentMethod: paymentMethod,
                relatedId: 1, // 暂时硬编码或根据业务调整
                description: "钱包充值"
            };
            const res = await createOrderApi(data) as any;
            if (res.code === 200) {
                lastOrderData.value = res.data; // 保存订单详情
                return res.data;
            } else {
                throw new Error(res.message || '创建订单失败');
            }
        } catch (e: any) {
            error.value = e.message;
            throw e;
        } finally {
            loading.value = false;
        }
    };

    // 发起支付
    const initiatePayment = async (orderNo: string | number) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await initiatePaymentApi(orderNo) as any;
            if (res.code === 200) {
                return res;
            } else {
                throw new Error(res.message || '发起支付失败');
            }
        } catch (e: any) {
            error.value = e.message;
            throw e;
        } finally {
            loading.value = false;
        }
    };

    // 轮询订单状态
    // 0 待支 1 支付中 2 成功 3失败
    const pollOrderStatus = (orderNo: string | number, maxRetries = 60, interval = 3000): Promise<boolean> => {
        return new Promise((resolve) => {
            let attempts = 0;
            const timer = setInterval(async () => {
                attempts++;
                try {
                    const res = await queryOrderStatusApi(orderNo) as any;

                    if (res.code === 200 && res.data) {
                        if (res.data.status === 2) {
                            clearInterval(timer);
                            resolve(true);
                            return;
                        } else if (res.data.status === 3) {
                            clearInterval(timer);
                            ElMessage.error('支付失败');
                            resolve(false);
                            return;
                        }
                        // status 0 or 1, continue polling
                    }
                } catch (e) {
                    console.error('Polling error:', e);
                }

                if (attempts >= maxRetries) {
                    clearInterval(timer);
                    resolve(false);
                }
            }, interval);
        });
    };

    return {
        loading,
        error,
        walletInfo,
        transactions,
        lastOrderData,
        fetchWalletInfo,
        fetchTransactions,
        createRechargeOrder,
        initiatePayment,
        pollOrderStatus
    };
};
