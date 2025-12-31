<template>
  <header class="w-full bg-white dark:bg-[oklch(13%_0.028_261.692)] shadow-sm sticky top-0 z-[100] transition-colors duration-300">
    <div class="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 h-7 flex items-center text-[11px] text-slate-500">
      <div class="max-w-[1200px] mx-auto w-full px-4 flex justify-end gap-4">
        <NuxtLink to="/orders" class="hover:text-[#ff5000]">我的订单</NuxtLink>
        <NuxtLink to="/cart" class="hover:text-[#ff5000]">购物车</NuxtLink>
      </div>
    </div>

    <div class="max-w-[1200px] mx-auto px-4 py-4 flex flex-col items-center justify-center gap-3">
      
      <div class="flex h-11 w-full max-w-[850px]"> 
        <input 
          v-model="searchQuery"
          type="text"
          placeholder="搜索商品..."
          class="flex-1 px-4 text-sm bg-transparent border-2 border-[#ff5000] rounded-l outline-none dark:text-white transition-all"
          @keyup.enter="handleSearch"
        />
        <button 
          @click="handleSearch"
          class="bg-[#ff5000] text-white px-10 text-sm font-bold rounded-r hover:bg-[#e64500] transition-colors shrink-0"
        >
          搜索
        </button>
      </div>

      <div class="flex items-center gap-6 mt-1">
        <div v-for="item in mallIcons" :key="item.name" class="flex items-center gap-1 cursor-pointer group">
          <img :src="`/mallIcon/${item.icon}`" class="w-4 h-4 object-contain" :alt="item.name" />
          <span class="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-[#ff5000] transition-colors">
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
  { name: '超级立减', icon: 'lijian.png'},
  { name: '全部频道', icon: 'quanbu.png'}
]

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('正在搜索:', searchQuery.value)
  }
}
</script>