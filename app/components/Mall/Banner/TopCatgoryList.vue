<script setup lang="ts">
import { useMallGoods } from '@/composables/mall/useMallGoods'

const { categoryList, fetchCategories } = useMallGoods()
const router = useRouter()

onMounted(() => {
    fetchCategories()
})

const goToCategory = (item: any) => {
    navigateTo({
        path: '/service/mall/search',
        query: {
            categoryId: item.categoryId,
            categoryName: item.categoryName
        }
    })
}
</script>

<template>
    <div
        class="w-full px-4 flex items-center justify-center border-slate-100 dark:border-slate-800 overflow-x-auto whitespace-nowrap">
        <div v-for="(cat, index) in categoryList" :key="cat.categoryId" class="flex items-center">
            <span v-if="index > 0" class="mx-3 text-slate-300 dark:text-slate-600 select-none">/</span>
            <span @click.stop="goToCategory(cat)"
                class="text-[13px] text-slate-600 dark:text-slate-300 hover:text-[#ff5000] cursor-pointer hover:font-bold transition-all duration-200">
                {{ cat.categoryName }}
            </span>
        </div>

    </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
