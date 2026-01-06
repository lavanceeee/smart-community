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
                    class="bg-gradient-to-br from-[#ff5000] to-[#ff8c00] rounded-[2rem] p-8 text-white shadow-2xl shadow-orange-500/20 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-8 opacity-20">
                        <Icon name="lucide:wallet" size="120" />
                    </div>
                    <div class="relative z-10">
                        <p class="text-sm font-medium opacity-80 mb-2">账户余额 (元)</p>
                        <h2 class="text-4xl font-black mb-8">1258.40</h2>
                        <div class="flex gap-4">
                            <button
                                class="flex-1 py-3 px-6 bg-white text-[#ff5000] rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-lg">充值</button>
                            <button
                                class="flex-1 py-3 px-6 bg-white/20 backdrop-blur-md text-white rounded-2xl font-bold hover:bg-white/30 transition-colors border border-white/30">提现</button>
                        </div>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-2 gap-4">
                    <div
                        class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
                        <p
                            class="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">
                            积分</p>
                        <p class="text-xl font-black text-slate-800 dark:text-white">862</p>
                    </div>
                    <div
                        class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
                        <p
                            class="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider mb-2">
                            优惠券</p>
                        <p class="text-xl font-black text-slate-800 dark:text-white">5</p>
                    </div>
                </div>
            </div>

            <!-- Transaction History / Detail -->
            <div class="lg:col-span-2">
                <div
                    class="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800">
                    <div class="flex items-center justify-between mb-8">
                        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">账单明细</h3>
                        <div class="flex items-center gap-2 text-sm text-slate-500">
                            <span>全部</span>
                            <Icon name="lucide:chevron-down" size="16" />
                        </div>
                    </div>

                    <!-- Placeholder for list -->
                    <div class="space-y-6">
                        <div v-for="i in 5" :key="i"
                            class="flex items-center justify-between py-4 border-b border-slate-50 dark:border-slate-800/50 last:border-0">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                                    <Icon :name="i % 2 === 0 ? 'lucide:shopping-bag' : 'lucide:arrow-down-to-line'"
                                        size="20" />
                                </div>
                                <div>
                                    <p class="font-bold text-slate-800 dark:text-slate-100">{{ i % 2 === 0 ? '商品支付' :
                                        '余额充值' }}</p>
                                    <p class="text-xs text-slate-400">2026-01-06 12:34:56</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="font-black text-lg"
                                    :class="i % 2 === 0 ? 'text-slate-800 dark:text-white' : 'text-green-500'">
                                    {{ i % 2 === 0 ? '-128.00' : '+500.00' }}
                                </p>
                                <p class="text-[10px] text-slate-400">交易成功</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Page logic here
</script>