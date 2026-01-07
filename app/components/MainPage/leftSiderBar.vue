<template>
  <div class="w-60 flex flex-col gap-4 shrink-0">

    <!-- Navigation Groups -->
    <div v-for="group in menuGroups" :key="group.title"
      class="bg-white dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm">
      <div class="px-4 py-3 border-b border-slate-50 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
        <h3 class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{{ group.title }}</h3>
      </div>
      <div class="p-2 flex flex-col gap-1">
        <NuxtLink v-for="item in group.items" :key="item.path" :to="item.path" v-show="item.show !== false"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-600 dark:text-slate-300 hover:bg-orange-50 dark:hover:bg-[#ff5000]/10 hover:text-[#ff5000] transition-all group relative"
          active-class="active-nav bg-orange-50 dark:bg-[#ff5000]/10 text-[#ff5000] font-bold">
          <Icon :name="item.icon" size="18" class="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
          <span>{{ item.name }}</span>
          <!-- Active Indicator Dot -->
          <div class="absolute right-2 w-1.5 h-1.5 rounded-full bg-[#ff5000] opacity-0 scale-0 transition-all nav-dot">
          </div>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()

// Navigation Groups Data
const menuGroups = computed(() => [
  {
    title: '社区服务',
    items: [
      { name: '通知公告', path: '/service/community/news', icon: 'lucide:megaphone' },
      { name: '物业缴费', path: '/service/community/payment', icon: 'lucide:credit-card' },
      { name: '报修投诉', path: '/service/community/issues', icon: 'lucide:wrench' },
      { name: '停车服务', path: '/service/community/parking', icon: 'lucide:car' },
      { name: '访客管理', path: '/service/community/visitors', icon: 'lucide:users' },
    ]
  },
  {
    title: '个人中心',
    items: [
      { name: '我的钱包', path: '/wallet', icon: 'lucide:wallet' },
      { name: '基本信息', path: '/profile', icon: 'lucide:user-circle' },
      {
        name: '管理后台',
        path: '/superCommunity',
        icon: 'lucide:shield-check',
        show: userStore.userRole?.roleId !== 4 && userStore.userRole?.roleId != null
      },
    ]
  }
])
</script>

<style scoped>
.active-nav .nav-dot {
  opacity: 1;
  scale: 1;
}

/* Custom scrollbar if needed */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>