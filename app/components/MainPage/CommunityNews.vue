<template>
  <div class="bg-white dark:bg-white/5 rounded p-5 border border-slate-100 dark:border-white/5 shadow-sm">

    <div class="flex items-center justify-between mb-5 px-1">
      <div class="flex items-center gap-2">
        <span class="w-1 h-4 bg-[#ff5000] rounded-full"></span>
        <h2 class="text-lg font-bold text-slate-800 dark:text-white">社区头条</h2>
      </div>
      <NuxtLink to="/service/community/news"
        class="flex items-center gap-1 text-xs text-slate-400 hover:text-[#ff5000] transition-colors cursor-pointer select-none">
        <span>更多公告</span>
        <Icon name="lucide:chevron-right" size="14" />
      </NuxtLink>
    </div>

    <!-- Empty State (Full Width) -->
    <div v-if="!loading && newsList.length === 0"
      class="min-h-[300px] flex flex-col items-center justify-center text-slate-400">
      <Icon name="lucide:inbox" size="48" class="mb-3 opacity-50" />
      <span class="text-sm">暂无公告</span>
    </div>

    <!-- Content Area -->
    <div v-else class="flex flex-col md:flex-row gap-6">

      <!-- Carousel (Banner) -->
      <div class="w-full md:w-[45%] h-[340px] rounded-xl overflow-hidden relative group shrink-0">
        <el-carousel trigger="click" height="340px" :interval="5000" arrow="hover">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <div class="relative w-full h-full cursor-pointer">
              <img :src="item.image"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-16">
                <span
                  class="bg-[#ff5000] text-white text-[10px] px-1.5 py-0.5 rounded mb-1.5 inline-block font-medium">热点</span>
                <h3 class="text-white font-bold text-base leading-relaxed line-clamp-2 tracking-wide">
                  {{ item.title }}
                </h3>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- News List (Real Data) -->
      <div class="flex-1 min-w-0 py-1 flex flex-col justify-between">

        <!-- Loading State -->
        <div v-if="loading" class="space-y-4">
          <div v-for="i in 6" :key="i" class="flex justify-between items-center animate-pulse">
            <div class="h-4 bg-slate-100 dark:bg-slate-700 rounded w-2/3"></div>
            <div class="h-4 bg-slate-100 dark:bg-slate-700 rounded w-12"></div>
          </div>
        </div>

        <!-- List -->
        <div v-else class="flex flex-col gap-4">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2">
            <div class="flex items-center gap-2 text-[#1a73e8]">
              <div class="p-1 bg-blue-50 dark:bg-blue-900/20 rounded">
                <Icon name="lucide:bell-ring" size="14" />
              </div>
              <span class="font-bold text-sm">最新公告</span>
            </div>
          </div>

          <ul class="flex flex-col gap-3.5">
            <li v-for="(news, i) in displayedNews" :key="news.announceId"
              class="flex items-center justify-between group cursor-pointer">
              <NuxtLink :to="`/service/community/news/${news.announceId}`"
                class="flex items-center gap-2 min-w-0 pr-4 flex-1">
                <span
                  class="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#1a73e8] transition-colors shrink-0 mt-0.5"></span>
                <span
                  class="text-[13px] text-slate-700 dark:text-slate-300 truncate group-hover:text-[#1a73e8] transition-colors leading-normal block">
                  {{ news.title }}
                </span>
                <span v-if="i === 0"
                  class="text-[9px] text-[#ff5000] border border-[#ff5000]/30 px-1 rounded-sm scale-90 origin-left shrink-0">NEW</span>
              </NuxtLink>

              <span class="text-xs text-slate-400 shrink-0 tabular-nums font-medium tracking-tight">
                {{ formatDate(news.publishTime) }}
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useCommunityNews } from '@/composables/useCommunityIssue'

// Use the existing composable
const { newsList, loading, fetchNews } = useCommunityNews()

// Mock Banners (Keep for visual layout as API doesn't provide banner images yet)
const bannerList = [
  {
    id: 1,
    title: '智慧社区“邻里节”圆满举办，共建美好家园',
    image: 'https://img.alicdn.com/imgextra/i2/O1CN01Z7xZ7x1Z7xZ7xZ7xZ_!!6000000000000-0-tps-800-450.jpg'
  },
  {
    id: 2,
    title: '社区开展冬季消防安全大检查，消除隐患保平安',
    image: 'https://img.alicdn.com/imgextra/i4/O1CN014W4W4W14W4W4W4W4W_!!6000000000000-0-tps-800-450.jpg'
  },
  {
    id: 3,
    title: '数字化养老服务中心正式启用，老人生活更便捷',
    image: 'https://img.alicdn.com/imgextra/i3/O1CN013X3X3X13X3X3X3X3X_!!6000000000000-0-tps-800-450.jpg'
  }
]

// Display top 8 news items
const displayedNews = computed(() => {
  return newsList.value.slice(0, 8)
})

const formatDate = (timeStr: string) => {
  if (!timeStr) return ''
  return timeStr.split(' ')[0].slice(5) // Extract MM-DD
}

onMounted(() => {
  // Ensure we fetch news
  fetchNews()
})
</script>

<style scoped>
:deep(.el-carousel__container) {
  /* 确保圆角和高度一致 */
  height: 100% !important;
}

:deep(.el-carousel__button) {
  /* 优化轮播指示器 */
  width: 20px;
  height: 3px;
  border-radius: 2px;
}
</style>