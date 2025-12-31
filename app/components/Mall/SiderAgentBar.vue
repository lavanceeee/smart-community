<template>
  <div class="fixed right-4 top-1/2 -translate-y-1/2 z-[150] flex flex-col items-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl py-4 px-2 w-16 gap-6 select-none">

    <!-- Messages -->
    <div class="flex flex-col items-center gap-1 cursor-pointer group relative">
      <div class="text-slate-700 dark:text-slate-300 group-hover:text-[#ff5000] transition-colors">
        <Icon name="lucide:message-square" size="24" />
      </div>
      <span class="text-[11px] text-slate-500 group-hover:text-[#ff5000]">消息</span>
      <!-- Badge -->
      <div class="absolute -top-1 -right-1 bg-[#ff5000] text-white text-[9px] font-bold px-1 rounded-full border-2 border-white dark:border-slate-900">
        29
      </div>
    </div>

    <!-- Cart -->
    <div class="flex flex-col items-center gap-1 cursor-pointer group relative">
      <div class="text-slate-700 dark:text-slate-300 group-hover:text-[#ff5000] transition-colors">
        <Icon name="lucide:shopping-cart" size="24" />
      </div>
      <span class="text-[11px] text-slate-500 group-hover:text-[#ff5000]">购物车</span>
      <!-- Badge -->
      <div class="absolute -top-1 -right-1 bg-[#ff5000] text-white text-[9px] font-bold px-1 rounded-full border-2 border-white dark:border-slate-900">
        6
      </div>
    </div>

    <!-- Survey -->
    <div class="flex flex-col items-center gap-1 cursor-pointer group">
      <div class="w-7 h-7 bg-red-500 rounded flex items-center justify-center text-white shadow-sm">
        <Icon name="lucide:hand-coins" size="18" />
      </div>
      <span class="text-[11px] text-slate-500 group-hover:text-[#ff5000] leading-tight text-center">用户调研</span>
    </div>

    <!-- Divider -->
    <div class="w-8 h-[1px] bg-slate-100 dark:bg-slate-800"></div>

    <!-- More -->
    <div class="flex flex-col items-center gap-1 cursor-pointer group">
      <div class="text-slate-400 group-hover:text-[#ff5000] transition-colors">
        <Icon name="lucide:ellipsis" size="24" />
      </div>
      <span class="text-[11px] text-slate-500 group-hover:text-[#ff5000]">更多</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// Logic can be added here if needed
</script>

<style scoped>
/* Individual styles if needed */
</style>
