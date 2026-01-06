<template>
    <div class="min-h-screen bg-[#f5f7fa] dark:bg-slate-900 pb-24 transition-colors duration-300">
        <!-- Header / Top Bar -->
        <div
            class="pt-8 pb-4 mb-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm sticky top-0 z-10">
            <div class="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <div>
                        <h1 class="text-xl font-bold text-slate-800 dark:text-slate-100">我的购物车</h1>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <NuxtLink to="/service/mall"
                        class="text-slate-500 hover:text-[#ff5000] text-sm flex items-center gap-1 transition-colors">
                        <Icon name="lucide:arrow-left" size="14" />
                        继续购物
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="max-w-[1000px] mx-auto px-4 mt-8">
            <!-- Cart List -->
            <div v-if="loading && cartList.length === 0" class="space-y-4">
                <div v-for="i in 3" :key="i"
                    class="bg-white dark:bg-slate-800 p-6 rounded-md animate-pulse h-32 border border-slate-100 dark:border-slate-700">
                </div>
            </div>

            <div v-else-if="cartList.length > 0" class="space-y-4">
                <div v-for="item in cartList" :key="item.cartItemId"
                    class="bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow transition-all border border-slate-100 dark:border-slate-700 p-5 group flex gap-4 relative">

                    <!-- Checkbox (Future feature) -->
                    <!-- <div class="flex items-center">
                        <div class="w-5 h-5 rounded-full border border-slate-300"></div>
                    </div> -->

                    <!-- Product Image -->
                    <div
                        class="w-24 h-24 bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden shrink-0 border border-slate-100 dark:border-slate-700">
                        <img v-if="item.productImage" :src="item.productImage" class="w-full h-full object-cover" />
                        <div v-else class="w-full h-full flex items-center justify-center text-slate-300">
                            <Icon name="lucide:image" size="24" />
                        </div>
                    </div>

                    <div class="flex-1 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-start mb-2">
                                <div class="flex items-center gap-2">
                                    <span
                                        class="bg-orange-50 text-[#ff5000] text-[10px] px-1.5 py-0.5 rounded-sm font-bold border border-orange-100">
                                        {{ item.storeName || '自营门店' }}
                                    </span>
                                    <h3
                                        class="font-bold text-slate-800 dark:text-slate-100 text-base line-clamp-1 group-hover:text-[#ff5000] transition-colors">
                                        {{ item.productName }}
                                    </h3>
                                </div>
                                <button @click="handleRemove(item.cartItemId)"
                                    class="text-slate-400 hover:text-red-500 transition-colors">
                                    <Icon name="lucide:trash-2" size="16" />
                                </button>
                            </div>

                            <!-- Specs or other info -->
                            <div class="text-xs text-slate-400 mb-2">
                                规格: 默认
                            </div>
                        </div>

                        <div class="flex items-end justify-between">
                            <div class="flex items-baseline gap-1 text-[#ff5000]">
                                <span class="text-xs font-bold">¥</span>
                                <span class="text-xl font-black">{{ item.price }}</span>
                            </div>

                            <div
                                class="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 px-2 py-1">
                                <span class="text-xs text-slate-500">数量:</span>
                                <span class="font-bold text-slate-800 dark:text-slate-200">{{ item.quantity }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else
                class="py-20 text-center bg-white dark:bg-slate-800 rounded-md border border-slate-100 dark:border-slate-700">
                <div
                    class="w-16 h-16 bg-slate-50 dark:bg-slate-700/50 rounded-md flex items-center justify-center mx-auto mb-3 text-slate-300 dark:text-slate-500 border border-slate-100 dark:border-slate-600">
                    <Icon name="lucide:shopping-cart" size="32" />
                </div>
                <p class="text-slate-400 text-sm mb-4">购物车空空如也</p>
                <NuxtLink to="/service/mall"
                    class="inline-flex items-center justify-center px-6 py-2 bg-[#ff5000] text-white rounded-full hover:bg-[#e64a00] transition-colors text-sm font-bold">
                    去逛逛
                </NuxtLink>
            </div>
        </div>

        <!-- Checkout Bar -->
        <div v-if="cartList.length > 0"
            class="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-4 shadow-lg z-20">
            <div class="max-w-[1000px] mx-auto flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <div class="text-sm text-slate-500">
                        共 <span class="text-[#ff5000] font-bold">{{ cartCount }}</span> 件商品
                    </div>
                </div>
                <div class="flex items-center gap-6">
                    <div class="flex items-center gap-2">
                        <span class="text-sm text-slate-500">合计:</span>
                        <span class="text-[#ff5000] font-black text-xl">¥{{ totalPrice.toFixed(2) }}</span>
                    </div>
                    <button
                        class="bg-[#ff5000] hover:bg-[#e64a00] text-white px-8 py-2.5 rounded-full font-bold shadow-sm hover:shadow-md transition-all active:scale-95">
                        去结算
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMallGoods } from '@/composables/mall/useMallGoods'

const { cartList, loading, fetchCartList, fetchRemoveCart } = useMallGoods()

onMounted(() => {
    fetchCartList()
})

const cartCount = computed(() => {
    return cartList.value.reduce((sum, item) => sum + (item.quantity || 0), 0)
})

const totalPrice = computed(() => {
    return cartList.value.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0)
})

const handleRemove = async (id: number) => {
    await ElMessageBox.confirm(
        '确定要从购物车移除该商品吗？',
        '移除确认',
        {
            confirmButtonText: '移除',
            cancelButtonText: '取消',
            type: 'warning',
            center: true
        }
    )
    await fetchRemoveCart(id)
}

useHead({
    title: '我的购物车 - 智慧社区'
})
</script>

<style scoped>
/* 仿照 issues/index.vue 的样式 */
</style>