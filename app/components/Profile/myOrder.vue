<template>
  <div class="flex gap-3 h-48 select-none">

    <div
      class="flex-[2] bg-white dark:bg-white/5 rounded-2xl p-4 flex flex-col justify-between border border-slate-100 dark:border-white/5 shadow-sm">
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

      <div
        class="bg-slate-50 dark:bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center gap-1 mt-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
        <span class="text-xs text-slate-500 dark:text-slate-400 font-medium">当前暂无物流信息更新</span>
        <span class="text-[10px] text-slate-400 scale-90">查看全部订单 ></span>
      </div>
    </div>

    <!-- 钱包组件 -->
    <div class="flex-1">
      <WalletMyWallet />
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
</script>