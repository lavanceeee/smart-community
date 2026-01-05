<template>
  <div class="bg-white dark:bg-white/5 rounded p-5 border border-slate-100 dark:border-white/5 shadow-sm">

    <div class="flex items-center justify-between mb-5 px-1">
      <div class="flex items-center gap-2">
        <span class="w-1 h-4 bg-[#ff5000] rounded-full"></span>
        <h2 class="text-lg font-bold text-slate-800 dark:text-white">社区头条</h2>
      </div>
      <div class="flex gap-4 text-xs text-slate-400 select-none">
        <span class="cursor-pointer hover:text-[#ff5000] transition-colors">图片新闻</span>
        <span class="cursor-pointer hover:text-[#ff5000] transition-colors">政策解读</span>
        <span class="cursor-pointer hover:text-[#ff5000] transition-colors">通知公告</span>
      </div>
    </div>

    <div class="flex flex-col md:flex-row gap-6">

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

      <div class="flex-1 flex flex-col justify-between gap-6 min-w-0 py-1">

        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2">
            <div class="flex items-center gap-2 text-[#d93025]">
              <div class="p-1 bg-red-50 dark:bg-red-900/20 rounded">
                <Icon name="lucide:mic-2" size="14" />
              </div>
              <span class="font-bold text-sm">政声传递</span>
            </div>
            <NuxtLink to="/news/politics" class="text-[11px] text-slate-400 hover:text-[#d93025] flex items-center">
              更多
              <Icon name="lucide:chevron-right" size="12" />
            </NuxtLink>
          </div>

          <ul class="flex flex-col gap-3">
            <li v-for="(news, i) in politicsList" :key="i"
              class="flex items-center justify-between group cursor-pointer">
              <div class="flex items-center gap-2 min-w-0 pr-4">
                <span
                  class="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#d93025] transition-colors shrink-0 mt-0.5"></span>
                <span
                  class="text-[13px] text-slate-700 dark:text-slate-300 truncate group-hover:text-[#d93025] transition-colors leading-normal">
                  {{ news.title }}
                </span>
                <span v-if="i === 0"
                  class="text-[9px] text-[#d93025] border border-[#d93025]/30 px-1 rounded-sm scale-90 origin-left shrink-0">最新</span>
              </div>

              <span class="text-xs text-slate-400 shrink-0 tabular-nums font-medium tracking-tight">
                {{ news.date }}
              </span>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/5 pb-2">
            <div class="flex items-center gap-2 text-[#1a73e8]">
              <div class="p-1 bg-blue-50 dark:bg-blue-900/20 rounded">
                <Icon name="lucide:building-2" size="14" />
              </div>
              <span class="font-bold text-sm">社区政务</span>
            </div>
            <NuxtLink to="/news/affairs" class="text-[11px] text-slate-400 hover:text-[#1a73e8] flex items-center">
              更多
              <Icon name="lucide:chevron-right" size="12" />
            </NuxtLink>
          </div>

          <ul class="flex flex-col gap-3">
            <li v-for="(news, i) in affairsList" :key="i"
              class="flex items-center justify-between group cursor-pointer">
              <div class="flex items-center gap-2 min-w-0 pr-4">
                <span
                  class="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-[#1a73e8] transition-colors shrink-0 mt-0.5"></span>
                <span
                  class="text-[13px] text-slate-700 dark:text-slate-300 truncate group-hover:text-[#1a73e8] transition-colors leading-normal">
                  {{ news.title }}
                </span>
              </div>
              <span class="text-xs text-slate-400 shrink-0 tabular-nums font-medium tracking-tight">
                {{ news.date }}
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 模拟数据 (保持不变)
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

const politicsList = [
  { title: '关于印发《2024年街道民生实事项目》的通知', date: '01-15' },
  { title: '市委书记调研我区老旧小区改造工作', date: '01-14' },
  { title: '全区学习贯彻二十大精神宣讲报告会举行', date: '01-12' },
  { title: '区政府召开常务会议，研究部署近期重点工作', date: '01-10' },
  { title: '关于进一步加强社区基层治理能力的实施意见', date: '01-08' }
]

const affairsList = [
  { title: '本周社区便民服务大集时间安排通知', date: '今天' },
  { title: '关于开展全员核酸检测应急演练的公告', date: '昨天' },
  { title: '社区卫生服务中心流感疫苗接种指南', date: '01-13' },
  { title: '关于暂停小区部分公共区域水电供应的检修通知', date: '01-11' },
  { title: '2024年度社区居民医疗保险缴费截止提醒', date: '01-09' }
]
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