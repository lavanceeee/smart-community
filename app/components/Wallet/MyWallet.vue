<template>
    <NuxtLink to="/wallet"
        class="block group relative overflow-hidden bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

        <!-- Decorative background elements -->
        <div
            class="absolute -top-12 -right-12 w-32 h-32 bg-orange-100/50 dark:bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-200 dark:group-hover:bg-orange-500/20 transition-colors">
        </div>
        <div class="absolute -bottom-8 -left-8 w-24 h-24 bg-[#ff5000]/5 dark:bg-[#ff5000]/10 rounded-full blur-2xl">
        </div>

        <div class="relative z-10">
            <!-- Header -->
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-3">
                    <div
                        class="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff5000] to-[#ff8c00] flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                        <Icon name="lucide:wallet" size="20" />
                    </div>
                    <div>
                        <h3 class="text-sm font-bold text-slate-800 dark:text-slate-100">我的钱包</h3>
                        <p class="text-[10px] text-slate-400 dark:text-slate-500 font-medium tracking-wider">WALLET
                            SERVICES</p>
                    </div>
                </div>
                <div
                    class="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-[#ff5000] group-hover:bg-orange-50 transition-all">
                    <Icon name="lucide:chevron-right" size="16" />
                </div>
            </div>

            <!-- Balance Section -->
            <div class="flex items-end justify-between">
                <div>
                    <div
                        class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mb-1 uppercase tracking-widest text-opacity-80">
                        账户余额 (元)
                    </div>
                    <div class="flex items-baseline gap-1">
                        <span class="text-2xl font-black text-slate-900 dark:text-white">{{ balance.toFixed(2) }}</span>
                    </div>
                </div>

                <!-- Stats/Misc -->
                <div class="text-right">
                    <div class="text-[10px] text-slate-400 dark:text-slate-500 mb-1">积分余额</div>
                    <div class="text-sm font-bold text-[#ff5000]">862</div>
                </div>
            </div>

            <!-- Bottom Decorative Line -->
            <div class="mt-6 pt-4 border-t border-slate-50 dark:border-slate-800/50 flex items-center gap-4">
                <div class="flex items-center gap-1.5">
                    <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span
                        class="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tighter">支付安全保护中</span>
                </div>
                <div class="flex -space-x-1.5 ml-auto">
                    <div v-for="icon in ['lucide:shield-check', 'lucide:coins', 'lucide:badge-percent']" :key="icon"
                        class="w-5 h-5 rounded-full border border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                        <Icon :name="icon" size="10" class="text-slate-400" />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
// In a real app, this would come from a store or prop
const props = defineProps({
    balance: {
        type: Number,
        default: 1258.40
    }
});
</script>

<style scoped>
.group:hover {
    border-color: rgba(255, 80, 0, 0.2);
}
</style>
