<template>
  <div class="w-60 flex flex-col gap-3 shrink-0">

    <div class="bg-white dark:bg-white/5 rounded p-4 border border-slate-100 dark:border-white/5">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2 text-[#ff5000]">
          <Icon name="lucide:megaphone" size="16" />
          <span class="font-bold text-sm">平台公告</span>
        </div>
        <NuxtLink to="/service/community/news" class="text-xs text-slate-400 hover:text-[#ff5000]">更多</NuxtLink>
      </div>

      <div class="flex flex-col gap-3">
        <NuxtLink v-for="item in announcements" :key="item.id" :to="`/service/community/news/${item.id}`"
          class="group block">
          <div class="flex items-start gap-2">
            <span
              class="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#ff5000] mt-2 shrink-0 transition-colors"></span>
            <span
              class="text-xs text-slate-600 dark:text-slate-300 group-hover:text-[#ff5000] leading-relaxed line-clamp-2 transition-colors">
              <span v-if="item.isTop" class="text-[#ff5000] scale-90 inline-block mr-0.5">[置顶]</span>
              {{ item.title }}
            </span>
          </div>
          <div class="pl-3 mt-1 text-[10px] text-slate-400 font-mono">{{ item.date }}</div>
        </NuxtLink>
      </div>
    </div>

    <div class="bg-white dark:bg-white/5 rounded p-4 border border-slate-100 dark:border-white/5">
      <h3 class="font-bold text-sm text-slate-800 dark:text-slate-200 mb-3">快捷服务</h3>
      <div class="grid grid-cols-2 gap-2">
        <div v-for="tool in quickTools" :key="tool.name"
          class="flex flex-col items-center justify-center gap-1 bg-slate-50 dark:bg-white/5 rounded-lg py-3 cursor-pointer hover:bg-orange-50 dark:hover:bg-[#ff5000]/10 hover:text-[#ff5000] transition-colors group">
          <Icon :name="tool.icon" size="18" class="text-slate-500 dark:text-slate-400 group-hover:text-[#ff5000]" />
          <span class="text-xs font-medium text-slate-600 dark:text-slate-300 group-hover:text-[#ff5000]">{{ tool.name
          }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { getCommunityNewsApi } from '@/utils/api'

const announcements = ref<any[]>([])

onMounted(async () => {
  try {
    const res = await getCommunityNewsApi({ pageNum: 1, pageSize: 4 }) as any
    if (res.code === 200 && res.data?.records) {
      announcements.value = res.data.records.map((item: any) => ({
        id: item.announceId,
        title: item.title,
        // Simplest date formatting without external libs
        date: item.publishTime ? item.publishTime.split(' ')[0] : '',
        isTop: false
      }))
    }
  } catch (error) {
    ElMessage.error('获取公告列表失败');
    console.error('Fetch announcements error:', error)
  }
})

// 2. 快捷工具数据
const quickTools = [
  { name: '交易规则', icon: 'lucide:book-open' },
  { name: '安全中心', icon: 'lucide:shield-check' },
  { name: '投诉反馈', icon: 'lucide:message-square-warning' },
  { name: '帮助中心', icon: 'lucide:help-circle' },
]
</script>