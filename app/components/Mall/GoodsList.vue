<template>
  <div class="max-w-[1240px] mx-auto px-4 py-6">
    <!-- Section Title -->
    <div class="flex items-center gap-2 mb-6">
      <div class="w-1 h-6 bg-[#ff5000] rounded-full"></div>
      <h2 class="text-xl font-bold text-slate-900 dark:text-white">猜你喜欢</h2>
    </div>

    <!-- Goods Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
      <div v-for="item in goods" :key="item.id"
        class="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-transparent hover:border-[#ff5000] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col">
        <!-- Product Image -->
        <div class="aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
          <img :src="item.image" :alt="item.name"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <!-- Optional Hover Action Overlay -->
          <div
            class="absolute inset-x-0 bottom-0 bg-black/5 py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="text-[10px] text-white">查看详情</span>
          </div>
        </div>

        <!-- Product Details -->
        <div class="p-3 flex-1 flex flex-col">
          <!-- Title with Platform Tag -->
          <h3
            class="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug mb-2 min-h-[2.5rem]">
            <span v-if="item.platform === '天猫'"
              class="bg-red-500 text-white text-[9px] px-1 rounded mr-1 inline-block transform translate-y-[-1px]">天猫</span>
            <span v-else-if="item.platform === '天猫国际'"
              class="bg-purple-600 text-white text-[9px] px-1 rounded mr-1 inline-block transform translate-y-[-1px]">天猫国际</span>
            {{ item.name }}
          </h3>

          <!-- Promotion Section -->
          <div class="flex flex-wrap gap-1 mb-2">
            <span v-if="item.promotion" class="text-[#ff5000] text-[10px] font-bold">{{ item.promotion }}</span>
            <span v-for="tag in item.tags.slice(0, 2)" :key="tag"
              class="border border-[#ff5000]/30 text-[#ff5000] text-[9px] px-1 rounded leading-tight">{{ tag }}</span>
          </div>

          <!-- Price and Sales -->
          <div class="mt-auto flex items-baseline justify-between gap-1 flex-wrap">
            <div class="flex items-baseline text-[#ff5000]">
              <span class="text-xs font-bold font-sans">¥</span>
              <span class="text-lg font-bold">{{ item.price.split('.')[0] }}</span>
              <span v-if="item.price.includes('.')" class="text-xs font-bold">.{{ item.price.split('.')[1] || '0'
                }}</span>
            </div>
            <div class="text-[10px] text-slate-400 dark:text-slate-500">
              {{ item.sales }}人购买
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Placeholder -->
    <div class="mt-12 text-center">
      <button
        class="px-8 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm hover:border-[#ff5000] hover:text-[#ff5000] transition-colors">
        加载更多
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import goodsData from './goods.json'

interface Good {
  id: number
  name: string
  image: string
  price: string
  sales: string
  platform: string
  promotion: string
  tags: string[]
}

const goods = goodsData as Good[]
</script>

<style scoped>
/* Ensure smooth line clamping */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
