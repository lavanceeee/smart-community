<template>
  <div class="max-w-[1240px] mx-auto px-4 py-6">
    <!-- Section Title -->
    <div class="flex items-center gap-2 mb-6">
      <div class="w-1 h-6 bg-[#ff5000] rounded-full"></div>
      <h2 class="text-xl font-bold text-slate-900 dark:text-white">猜你喜欢</h2>
    </div>

    <!-- Goods Grid -->
    <div v-if="loading && goodsList.length === 0"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
      <div v-for="i in 10" :key="i" class="bg-gray-100 dark:bg-slate-800 rounded-xl h-64 animate-pulse"></div>
    </div>

    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
      <div v-for="item in goodsList" :key="item.productId" @click="goToDetail(item.productId)"
        class="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-transparent cursor-pointer shadow-sm hover:shadow-md flex flex-col">
        <!-- Product Image -->
        <div class="aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
          <img :src="productMainImages[item.productId] || item.coverImg" :alt="item.productName"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <!-- Optional Hover Action Overlay -->
          <div
            class="absolute inset-x-0 bottom-0 bg-black/5 py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-[10px] text-white">查看详情</span>
          </div>
        </div>

        <!-- Product Details -->
        <div class="p-3 flex-1 flex flex-col">
          <!-- Title -->
          <h3
            class="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug mb-1 min-h-[2.5rem]">
            {{ item.productName }}
          </h3>

          <!-- Description (Replacing tags since real data has description) -->
          <p class="text-xs text-slate-400 line-clamp-1 mb-2">{{ item.description }}</p>

          <!-- Price and Sales -->
          <div class="mt-auto flex items-baseline justify-between gap-1 flex-wrap">
            <div class="flex items-baseline text-[#ff5000]">
              <span class="text-xs font-bold font-sans">¥</span>
              <span class="text-lg font-bold">{{ String(item.price).split('.')[0] }}</span>
              <span v-if="String(item.price).includes('.')" class="text-xs font-bold">.{{
                String(item.price).split('.')[1] || '0'
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Placeholder -->
    <div class="mt-12 text-center" v-if="goodsList.length > 0">
      <button v-if="hasMore" @click="loadMore" :disabled="loading"
        class="px-8 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm hover:border-[#ff5000] hover:text-[#ff5000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        {{ loading ? '加载中...' : '加载更多' }}
      </button>
      <span v-else class="text-slate-400 text-sm">没有更多商品了</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMallGoods } from '@/composables/mall/useMallGoods'

const { goodsList, loading, fetchGoodsList, loadMore, hasMore, fetchProductImages } = useMallGoods()

const productMainImages = ref<Record<string, string>>({})

const goToDetail = (productId: string | number) => {
  navigateTo(`/service/mall/${productId}`)
}

// 获取单个商品的主图
const preloadItemImage = async (productId: number | string) => {
  if (productMainImages.value[productId]) return
  const images = await fetchProductImages(productId)
  if (images && images.length > 0) {
    productMainImages.value[productId] = images[0].imageUrl
  }
}

// 监听列表变化，自动拉取新到货商品图片
watch(goodsList, (newList) => {
  newList.forEach(item => {
    preloadItemImage(item.productId)
  })
}, { immediate: true, deep: true })

onMounted(() => {
  if (goodsList.value.length === 0) {
    fetchGoodsList()
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
