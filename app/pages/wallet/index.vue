<template>
    <div class="min-h-screen bg-slate-50 dark:bg-slate-950">
        <!-- Header -->
        <div
            class="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 py-4 sticky top-0 z-10">
            <div class="max-w-[1500px] mx-auto flex items-center gap-4">
                <NuxtLink to="/profile"
                    class="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors">
                    <Icon name="lucide:arrow-left" size="20" />
                </NuxtLink>
                <h1 class="text-lg font-bold text-slate-800 dark:text-slate-100">我的钱包</h1>
            </div>
        </div>

        <div class="max-w-[1500px] mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Balance Card -->
            <div class="lg:col-span-1 space-y-6">
                <div
                    class="bg-gradient-to-br from-[#ff5000] to-[#ff8c00] rounded-[2rem] p-8 text-white shadow-2xl shadow-orange-500/20 relative overflow-hidden h-[300px] flex flex-col justify-between">
                    <div class="absolute top-0 right-0 p-8 opacity-20">
                        <Icon name="lucide:wallet" size="120" />
                    </div>
                    <div class="relative z-10">
                        <p class="text-sm font-medium opacity-80 mb-2">账户余额 (元)</p>
                        <h2 class="text-4xl font-black mb-2">
                            {{ loading && !walletInfo ? '---' : (walletInfo?.balance || 0).toFixed(2) }}
                        </h2>
                        <p v-if="walletInfo?.frozenAmount" class="text-xs opacity-70">
                            冻结金额: ¥{{ walletInfo.frozenAmount.toFixed(2) }}
                        </p>
                    </div>
                    <div class="relative z-10 flex gap-4">
                        <button @click="showRecharge = true"
                            class="flex-1 py-3 px-6 bg-white text-[#ff5000] rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-lg">充值</button>
                        <button
                            class="flex-1 py-3 px-6 bg-white/20 backdrop-blur-md text-white rounded-2xl font-bold hover:bg-white/30 transition-colors border border-white/30">转账</button>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-2 gap-4">
                    <div
                        class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
                        <p
                            class="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2 text-opacity-80">
                            总消耗</p>
                        <p class="text-xl font-black text-slate-800 dark:text-white">¥{{ walletInfo?.totalExpense || 0
                        }}</p>
                    </div>
                    <div
                        class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
                        <p
                            class="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2 text-opacity-80">
                            总充值</p>
                        <p class="text-xl font-black text-slate-800 dark:text-white">¥{{ walletInfo?.totalRecharge || 0
                        }}</p>
                    </div>
                </div>
            </div>

            <!-- Transaction History -->
            <div class="lg:col-span-2">
                <div
                    class="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 min-h-[500px]">
                    <div class="flex items-center justify-between mb-8">
                        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">账单明细</h3>
                        <div class="flex items-center gap-2 text-sm text-slate-500 cursor-pointer">
                            <span>筛选</span>
                            <Icon name="lucide:filter" size="16" />
                        </div>
                    </div>

                    <!-- Transaction List -->
                    <div v-if="loading && transactions.length === 0" class="space-y-6">
                        <div v-for="i in 5" :key="i"
                            class="h-20 bg-slate-50 dark:bg-slate-800/50 animate-pulse rounded-2xl"></div>
                    </div>

                    <div v-else-if="transactions.length === 0"
                        class="flex flex-col items-center justify-center py-20 text-slate-400">
                        <Icon name="lucide:receipt-text" size="48" class="mb-4 opacity-20" />
                        <p>暂无交易记录</p>
                    </div>

                    <div v-else class="space-y-6">
                        <div v-for="item in transactions" :key="item.transactionId"
                            class="flex items-center justify-between py-4 border-b border-slate-50 dark:border-slate-800/50 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors px-4 -mx-4 rounded-2xl">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                                    <Icon :name="getTransactionIcon(item.transactionType)" size="20" />
                                </div>
                                <div>
                                    <p class="font-bold text-slate-800 dark:text-slate-100">{{ item.description ||
                                        item.transactionType }}</p>
                                    <p class="text-xs text-slate-400">{{ formatDate(item.createTime) }}</p>
                                    <p class="text-[10px] text-slate-300 dark:text-slate-600 font-mono mt-0.5">{{
                                        item.transactionNo }}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="font-black text-lg"
                                    :class="item.amount >= 0 ? 'text-green-500' : 'text-slate-800 dark:text-white'">
                                    {{ item.amount >= 0 ? '+' : '' }}{{ item.amount.toFixed(2) }}
                                </p>
                                <p class="text-[10px] text-slate-400">余额: ¥{{ item.balanceAfter.toFixed(2) }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Recharge Modal -->
        <WalletRecharge :show="showRecharge" @close="showRecharge = false" @success="handleRechargeSuccess" />
    </div>
</template>

<script setup lang="ts">
const { walletInfo, transactions, loading, fetchWalletInfo, fetchTransactions } = useWallet();
const showRecharge = ref(false);

const handleRechargeSuccess = () => {
    // Shared state is updated automatically by doRecharge
};

onMounted(async () => {
    await Promise.all([
        fetchWalletInfo(),
        fetchTransactions()
    ]);
});

const getTransactionIcon = (type: string) => {
    switch (type?.toLowerCase()) {
        case 'recharge': return 'lucide:arrow-down-to-line';
        case 'expense': return 'lucide:shopping-bag';
        case 'refund': return 'lucide:rotate-ccw';
        default: return 'lucide:receipt';
    }
};

const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleString();
};
</script>