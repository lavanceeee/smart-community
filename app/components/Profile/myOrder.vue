<template>
  <div class="flex gap-3 h-48 select-none">
    
    <div class="flex-[2] bg-white dark:bg-white/5 rounded-2xl p-4 flex flex-col justify-between border border-slate-100 dark:border-white/5 shadow-sm">
      <div class="flex items-center justify-between cursor-pointer hover:text-[#ff5000] transition-colors group">
        <span class="font-bold text-slate-800 dark:text-slate-200">我的订单</span>
        <Icon name="lucide:chevron-right" size="16" class="text-slate-400 group-hover:text-[#ff5000]" />
      </div>

      <div class="flex justify-between items-center px-2 mt-2">
        <div v-for="item in orderStats" :key="item.label" class="flex flex-col items-center gap-1 cursor-pointer group">
          <span class="text-xl font-medium transition-colors" 
            :class="item.count > 0 ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-400 dark:text-slate-600'">
            {{ item.count }}
          </span>
          <span class="text-xs text-slate-500 group-hover:text-[#ff5000]">{{ item.label }}</span>
        </div>
      </div>

      <div class="bg-slate-50 dark:bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center gap-1 mt-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
        <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">当前暂无物流信息更新</span>
        <span class="text-[10px] text-slate-400 scale-90">查看全部订单 ></span>
      </div>
    </div>

    <div class="flex-1 bg-white dark:bg-white/5 rounded-2xl p-3 flex flex-col border border-slate-100 dark:border-white/5 shadow-sm cursor-pointer hover:shadow-md transition-shadow group">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-[#ff5000]">我的收藏</span>
        <Icon name="lucide:chevron-right" size="14" class="text-slate-300" />
      </div>
      <div class="flex-1 flex flex-col items-center justify-center gap-2">
        <div class="w-16 h-16 bg-slate-50 rounded-lg p-1">
           <img :src="mockData.fav.image" class="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
        </div>
        <div class="text-center w-full">
          <div class="text-[10px] text-slate-500 truncate w-full px-2">{{ mockData.fav.title }}</div>
          <div class="text-[#ff5000] text-xs font-bold mt-0.5">收藏后降 ¥{{ mockData.fav.priceDiff }}</div>
        </div>
      </div>
    </div>

    <div class="flex-1 bg-white dark:bg-white/5 rounded-2xl p-3 flex flex-col border border-slate-100 dark:border-white/5 shadow-sm cursor-pointer hover:shadow-md transition-shadow group">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-[#ff5000]">我的足迹</span>
        <Icon name="lucide:chevron-right" size="14" class="text-slate-300" />
      </div>
      <div class="flex-1 flex flex-col items-center justify-center gap-2">
        <div class="w-16 h-16 bg-slate-50 rounded-lg p-1">
           <img :src="mockData.footprint.image" class="w-full h-full object-cover rounded mix-blend-multiply dark:mix-blend-normal" />
        </div>
        <div class="text-center w-full">
          <div class="text-[10px] text-slate-500 truncate w-full px-2">{{ mockData.footprint.title }}</div>
          <div class="text-slate-900 dark:text-white text-xs font-bold mt-0.5">¥{{ mockData.footprint.price }}</div>
        </div>
      </div>
    </div>

    <div class="flex-1 bg-white dark:bg-white/5 rounded-2xl p-3 flex flex-col border border-slate-100 dark:border-white/5 shadow-sm cursor-pointer hover:shadow-md transition-shadow group">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover:text-[#ff5000]">购物车</span>
        <Icon name="lucide:chevron-right" size="14" class="text-slate-300" />
      </div>
      <div class="flex-1 flex flex-col items-center justify-center gap-2">
        <div class="w-16 h-16 bg-slate-50 rounded-lg p-1">
           <img :src="mockData.cart.image" class="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" />
        </div>
        <div class="text-center w-full">
          <div class="text-[10px] text-slate-500 truncate w-full px-2">{{ mockData.cart.title }}</div>
          <div class="text-[#ff5000] text-xs font-bold mt-0.5">券后价 ¥{{ mockData.cart.price }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
// 1. 订单状态数据接口
const orderStats = [
  { label: '待付款', count: 0 },
  { label: '待发货', count: 1 }, // 模拟有一个待发货
  { label: '待收货', count: 0 },
  { label: '待评价', count: 0 },
  { label: '退款/售后', count: 0 }
]

// 2. 模拟商品数据 (图片使用了 Placehold.co 或 网上公开图，你可以直接替换)
const mockData = {
  fav: {
    title: '澳大利亚SPEQT 运动水壶',
    priceDiff: '7.00',
    // 替换为你的真实图片 URL
    image: 'https://img.alicdn.com/bao/uploaded/i4/2216506362540/O1CN01eJk2qH1QfWp5x6y5z_!!2216506362540.jpg_200x200q90.jpg_.webp' 
  },
  footprint: {
    title: '深海鳕鱼片250g 零食',
    price: '18.8',
    image: 'https://img.alicdn.com/bao/uploaded/i2/725677994/O1CN018y3k5z28vIgP4q8y5_!!725677994.jpg_200x200q90.jpg_.webp'
  },
  cart: {
    title: '霸王何首乌控油洗发水',
    price: '34.9',
    image: 'https://img.alicdn.com/bao/uploaded/i3/2200742939268/O1CN01l8z5z21q5y5x6y5z_!!2200742939268.jpg_200x200q90.jpg_.webp'
  }
}
</script>