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

    const transactionPage = useState('wallet-transaction-page', () => 1);
    const hasMore = useState('wallet-has-more', () => true);

    const fetchTransactions = async (page = 1, size = 10, type = 'ALL', append = false) => {
        loading.value = true;
        error.value = null;
        try {
            const params = { page, size, type };
            const res = await getTransactionsApi(params) as any;

            if (res.code === 200) {
                // Determine the list from response
                let newItems: TransactionRecord[] = [];
                if (Array.isArray(res.data)) {
                    newItems = res.data;
                } else if (res.data && Array.isArray(res.data.records)) {
                    newItems = res.data.records;
                }

                // Filter out duplicates based on transactionId
                const existingIds = new Set(transactions.value.map(t => t.transactionId));
                const uniqueNewItems = newItems.filter(item => !existingIds.has(item.transactionId));

                if (append) {
                    transactions.value = [...transactions.value, ...uniqueNewItems];
                    // If we are appending, but got no NEW unique items, it means we reached the end or backend is looping
                    if (uniqueNewItems.length === 0 && newItems.length > 0) {
                        hasMore.value = false;
                    } else {
                        hasMore.value = newItems.length >= size;
                    }
                } else {
                    transactions.value = newItems; // Reset list
                    hasMore.value = newItems.length >= size;
                }

                transactionPage.value = page;

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

    const resetTransactions = () => {
        transactions.value = [];
        transactionPage.value = 1;
        hasMore.value = true;
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

    // 切换支付方式
    const changePayMethod = async (orderNo: string | number, method: string) => {
        loading.value = true;
        try {
            const res = await changePayMethodApi(orderNo, method) as any;
            if (res.code === 200) {
                ElMessage.success('支付方式已更新');
                return true;
            } else {
                ElMessage.error(res.message || '切换支付方式失败,请稍后重试');
                return false;
            }
        } catch (e: any) {
            console.error('Change Pay Method Error:', e);
            ElMessage.error('切换支付方式失败,请稍后重试');
            return false;
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        error,
        walletInfo,
        transactions,
        lastOrderData,
        transactionPage,
        hasMore,
        fetchWalletInfo,
        fetchTransactions,
        resetTransactions,
        createRechargeOrder,
        initiatePayment,
        changePayMethod,
        pollOrderStatus
    };
};
