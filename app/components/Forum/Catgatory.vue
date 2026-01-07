<template>
    <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
        <div class="flex items-center justify-between mb-6 px-2">
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-[#ff5000]">
                    <Icon name="lucide:layout-grid" size="20" />
                </div>
                <div>
                    <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">社区版块</h3>
                    <p class="text-[11px] text-slate-400 font-medium mt-0.5">Community Sections</p>
                </div>
            </div>
        </div>

        <div v-if="loading && sections.length === 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="i in 4" :key="i" class="h-32 bg-slate-50 dark:bg-slate-800/50 rounded-2xl animate-pulse"></div>
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <NuxtLink v-for="section in sections" :key="section.sectionId"
                :to="`/service/community/forum/${section.sectionId}`"
                class="group relative bg-slate-50 dark:bg-slate-800/30 hover:bg-white dark:hover:bg-slate-800 rounded-2xl p-5 cursor-pointer transition-all duration-300 border border-slate-100 dark:border-slate-800/50 hover:border-orange-200 dark:hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1">

                <div class="flex items-start justify-between mb-4">
                    <div
                        class="w-12 h-12 rounded-2xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        <img v-if="section.iconUrl" :src="section.iconUrl" class="w-full h-full object-cover"
                            :alt="section.sectionName" />
                        <Icon v-else :name="getFallbackIcon(section.sectionName)" size="24"
                            :class="getIconColor(section.sectionName)" />
                    </div>
                    <div
                        class="w-8 h-8 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all text-slate-400 group-hover:text-[#ff5000]">
                        <Icon name="lucide:arrow-up-right" size="16" />
                    </div>
                </div>

                <div>
                    <h4
                        class="text-base font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-[#ff5000] transition-colors line-clamp-1">
                        {{ section.sectionName }}
                    </h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 min-h-[2.5em]">
                        {{ section.sectionDesc || '暂无描述' }}
                    </p>
                </div>

                <div
                    class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <span class="flex items-center gap-1">
                        <Icon name="lucide:message-square" size="12" />
                        {{ section.postCount || 0 }} 帖子
                    </span>
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity text-[#ff5000]">
                        点击进入
                    </span>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
// Import implicitly from auto-imports, but confirming user wants integration
import { useForum } from '~/composables/form/useForum';
const { sections, loading, fetchSections } = useForum();

onMounted(() => {
    fetchSections();
});

const getFallbackIcon = (name: string) => {
    if (name.includes('公告')) return 'lucide:megaphone';
    if (name.includes('互助')) return 'lucide:heart-handshake';
    if (name.includes('分享')) return 'lucide:coffee';
    if (name.includes('闲置')) return 'lucide:shopping-bag';
    if (name.includes('活动')) return 'lucide:calendar-range';
    return 'lucide:message-square';
};

const getIconColor = (name: string) => {
    if (name.includes('公告')) return 'text-blue-500';
    if (name.includes('互助')) return 'text-rose-500';
    if (name.includes('分享')) return 'text-amber-500';
    if (name.includes('闲置')) return 'text-emerald-500';
    return 'text-[#ff5000]';
};
</script>
