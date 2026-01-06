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
    const loading = ref(false);
    const error = ref<string | null>(null);
    const walletInfo = ref<WalletInfo | null>(null);
    const transactions = ref<TransactionRecord[]>([]);

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

    return {
        loading,
        error,
        walletInfo,
        transactions,
        fetchWalletInfo,
        fetchTransactions
    };
};