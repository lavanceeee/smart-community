<template>
  <header
    class="w-full bg-white dark:bg-[oklch(13%_0.028_261.692)] shadow-sm sticky top-10 z-[40] transition-colors duration-300">
    <div
      class="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 h-8 flex items-center text-[11px] text-slate-500">
      <div class="w-full px-4 flex justify-end gap-4">
        <NuxtLink to="/service/mall/mo" class="hover:text-[#ff5000]">我的订单</NuxtLink>
        <NuxtLink to="/service/mall/chart" class="hover:text-[#ff5000]">购物车</NuxtLink>
      </div>
    </div>

    <div class="max-w-[1200px] mx-auto px-4 py-4 flex flex-col items-center justify-center gap-3">

      <div class="flex w-full max-w-[850px]">
        <MallSearchBar v-model="searchQuery" width="100%" height="42px" placeholder="搜索商品..." button-text="搜索"
          @search="handleSearch" />
      </div>

      <div class="flex items-center gap-6 mt-1">
        <div v-for="item in mallIcons" :key="item.name" class="flex items-center gap-1 cursor-pointer group">
          <img :src="`/mallIcon/${item.icon}`" class="w-4 h-4 object-contain" :alt="item.name" />
          <span
            class="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-[#ff5000] transition-colors">
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const colorMode = useColorMode()

// 根据你提供的数据和文件名进行配置
const mallIcons = [
  { name: '天猫', icon: 'tianmao.png' },
  { name: '淘宝直播', icon: 'zhibo.png' },
  { name: '淘宝企业购', icon: 'qiyegou.png' },
  { name: '司法拍卖', icon: 'sifa.png' },
  { name: '天猫超市', icon: 'tianmaogou.png' },
  { name: '国家补贴', icon: 'guobu.png' },
  { name: '超级立减', icon: 'lijian.png' },
  { name: '全部频道', icon: 'quanbu.png' }
]

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('正在搜索:', searchQuery.value)
  }
}
</script>