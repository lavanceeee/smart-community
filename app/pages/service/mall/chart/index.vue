<template>
    <div class="min-h-screen bg-[#f5f7fa] dark:bg-slate-900 pb-24 transition-colors duration-300">
        <!-- Header / Top Bar -->
        <div
            class="pt-8 pb-4 mb-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-sm sticky top-0 z-50">
            <div class="max-w-[1300px] mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                    <div>
                        <h1 class="text-xl font-bold text-slate-800 dark:text-slate-100">我的购物车</h1>
                    </div>
                </div>

            </div>
        </div>

        <div class="max-w-[1300px] mx-auto px-4 mt-8">
            <div v-if="loading && cartList.length === 0" class="space-y-4">
                <div v-for="i in 3" :key="i"
                    class="bg-white dark:bg-slate-800 p-6 rounded-md animate-pulse h-32 border border-slate-100 dark:border-slate-700">
                </div>
            </div>

            <div v-else-if="cartList.length > 0"
                class="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start relative box-border">

                <!-- Left Column: Cart Items -->
                <div class="lg:col-span-2 space-y-4">
                    <MallChartGoodsList :cartList="cartList" :selectedIds="selectedIds"
                        @toggleSelectAll="toggleSelectAll" @toggleSelection="toggleSelection"
                        @toggleStoreSelection="toggleStoreSelection" @quantityChange="handleQuantityChange"
                        @quantityUpdate="handleQuantityUpdate" @remove="handleRemove" />
                </div>

                <!-- Right Column: Checkout Summary -->
                <div class="lg:col-span-1 h-full">
                    <MallChartGoSettlement :selectedList="selectedList" @checkout="handleCheckout"
                        class="sticky top-28" />
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
    </div>
</template>

<script setup lang="ts">
import { useMallGoods } from '@/composables/mall/useMallGoods'

const { cartList, loading, fetchCartList, fetchRemoveCart, fetchUpdateCartQuantity } = useMallGoods()

const selectedIds = ref<number[]>([])

onMounted(() => {
    fetchCartList()
})

// Toggle single item selection
const toggleSelection = (id: number) => {
    if (selectedIds.value.includes(id)) {
        selectedIds.value = selectedIds.value.filter(itemId => itemId !== id)
    } else {
        selectedIds.value.push(id)
    }
}

// Toggle store selection
const toggleStoreSelection = (ids: number[]) => {
    // Check if ALL ids are currently selected
    const allSelected = ids.every(id => selectedIds.value.includes(id))

    if (allSelected) {
        // Deselect all
        selectedIds.value = selectedIds.value.filter(id => !ids.includes(id))
    } else {
        // Select all (add missing ones)
        const missing = ids.filter(id => !selectedIds.value.includes(id))
        selectedIds.value.push(...missing)
    }
}

// Toggle all items
const toggleSelectAll = () => {
    if (isAllSelected.value) {
        selectedIds.value = []
    } else {
        selectedIds.value = cartList.value.map(item => item.cartId)
    }
}

// Computed: Is all selected?
const isAllSelected = computed(() => {
    return cartList.value.length > 0 && selectedIds.value.length === cartList.value.length
})

// Computed: Selected Items List (Detail object)
const selectedList = computed(() => {
    return cartList.value.filter(item => selectedIds.value.includes(item.cartId))
})

const handleQuantityChange = async (item: any, delta: number) => {
    const newQty = (item.quantity || 1) + delta;
    if (newQty < 1) return;
    await handleQuantityUpdate(item, newQty);
}

const handleQuantityUpdate = async (item: any, quantity: number) => {
    if (quantity < 1) quantity = 1;
    item.loading = true; // Local loading state
    const success = await fetchUpdateCartQuantity(item.cartId, quantity);
    item.loading = false;

    if (success) {
        item.quantity = quantity;
    } else {
        fetchCartList();
    }
}

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
    const success = await fetchRemoveCart(id)
    if (success) {
        // Remove from selectedIds if present
        if (selectedIds.value.includes(id)) {
            selectedIds.value = selectedIds.value.filter(itemId => itemId !== id)
        }
    }
}

const handleCheckout = () => {
    if (selectedList.value.length === 0) return;
    ElMessage.success('跳转结算页 -> ' + selectedList.value.map(i => i.productName).join(', '));
    // navigateTo('/service/mall/checkout') // TODO: Implement checkout page
}

useHead({
    title: '我的购物车 - 智慧社区'
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #cbd5e1;
}
</style>