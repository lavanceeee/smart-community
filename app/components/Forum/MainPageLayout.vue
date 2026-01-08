<template>
    <div class="bg-white dark:bg-white/5 rounded p-5 border border-slate-100 dark:border-white/5 shadow-sm">
        <div class="flex items-center justify-between mb-5 px-1">
            <div class="flex items-center gap-2">
                <span class="w-1 h-4 bg-[#ff5000] rounded-full"></span>
                <h2 class="text-lg font-bold text-slate-800 dark:text-white">社区论坛</h2>
            </div>
            <NuxtLink to="/service/community/forum"
                class="flex items-center gap-1 text-xs text-slate-400 hover:text-[#ff5000] transition-colors cursor-pointer select-none">
                <span>全部版块</span>
                <Icon name="lucide:chevron-right" size="14" />
            </NuxtLink>
        </div>

        <!-- Forum Content (Mock) -->
        <div class="space-y-4">
            <div v-for="i in 3" :key="i"
                class="flex gap-4 border-b border-slate-50 dark:border-white/5 pb-4 last:border-0 last:pb-0 group">
                <div
                    class="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Icon name="lucide:user" size="24" class="text-slate-400" />
                </div>
                <div class="flex-1">
                    <h3
                        class="font-bold text-slate-800 dark:text-slate-100 text-base mb-1 group-hover:text-[#ff5000] transition-colors cursor-pointer">
                        社区周末举办的跳蚤市场活动非常成功！
                    </h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">
                        感谢各位邻居的参与，这次活动大家互通有无，增进了邻里感情。晒几张现场照片，期待下一次活动！
                    </p>
                    <div class="flex items-center gap-4 text-xs text-slate-400">
                        <span>张三</span>
                        <span>10分钟前</span>
                        <div class="flex items-center gap-1">
                            <Icon name="lucide:message-square" size="12" />
                            <span>12</span>
                        </div>
                        <div class="flex items-center gap-1">
                            <Icon name="lucide:thumbs-up" size="12" />
                            <span>56</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Basic mock logic if needed
</script>
