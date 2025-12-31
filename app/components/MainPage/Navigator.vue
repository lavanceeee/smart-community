<script setup lang="ts">
// 定义社区服务的菜单数据，完全对应你提供的图片内容
const communityServices = [
  {
    title: '消息管理',
    icon: 'lucide:bell', // 这里的 icon 是可选的，配合你之前的图标库
    items: [
      { name: '公告列表查询', path: '/service/community/news' }
    ]
  },
  {
    title: '安保管理',
    icon: 'lucide:shield-check',
    items: [
      { name: '访客登记', path: '/service/community/visitor' },
      { name: '车位管理', path: '/service/community/parking' }
    ]
  },
  {
    title: '物业管理',
    icon: 'lucide:wrench',
    items: [
      { name: '报事维修', path: '/service/community/repair' },
      { name: '事项投诉', path: '/service/community/complaint' }
    ]
  },
  {
    title: '生活缴费',
    icon: 'lucide:wallet',
    items: [
      { name: '物业费缴纳', path: '/service/community/payment' }
    ]
  }
]
</script>

<template>
  <nav
    class="sticky top-0 z-50 w-full bg-white dark:bg-stone-950 shadow-sm border-b border-slate-100 dark:border-slate-800"
  >
    <div
      class="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between"
    >
      <div class="flex items-center gap-8">
        
        <div class="hidden md:flex items-center gap-2">
          
          <NuxtLink
            to="/service/mall"
            class="px-4 py-2 rounded-full text-slate-600 dark:text-slate-300 font-medium hover:bg-orange-50 hover:text-[#ff5000] transition-all"
            active-class="bg-orange-50 !text-[#ff5000]"
          >
            商城服务
          </NuxtLink>

          <div class="relative group">
            <div
              class="flex items-center gap-1 px-4 py-2 rounded-full text-slate-600 dark:text-slate-300 font-medium hover:bg-orange-50 hover:text-[#ff5000] transition-all cursor-pointer"
              active-class="bg-orange-50 !text-[#ff5000]"
            >
              社区服务
              <Icon name="lucide:chevron-down" size="14" class="transition-transform group-hover:rotate-180" />
          </div>

            <div class="absolute top-full left-0 pt-2 w-[480px] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform origin-top-left">
              
              <div class="bg-white dark:bg-stone-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 grid grid-cols-2 gap-4">
                
                <div v-for="category in communityServices" :key="category.title" class="flex flex-col gap-2">
                  
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider pb-1 border-b border-slate-50 dark:border-slate-800/50">
                    <Icon :name="category.icon" size="12" />
                    {{ category.title }}
                  </div>

                  <div class="flex flex-col gap-1">
                    <NuxtLink
                      v-for="item in category.items"
                      :key="item.name"
                      :to="item.path"
                      class="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-orange-50 hover:text-[#ff5000] dark:hover:bg-[#ff5000]/10 transition-colors flex items-center justify-between group/item"
                    >
                      {{ item.name }}
                      <Icon name="lucide:arrow-right" size="12" class="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#ff5000]" />
                    </NuxtLink>
                  </div>
                </div>

              </div>
            </div>
            </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  font-weight: 700;
}
</style>