<template>
    <div class="bg-white dark:bg-white/5 rounded p-5 border border-slate-100 dark:border-white/5 shadow-sm">
        <div class="flex items-center justify-between mb-5 px-1">
            <div class="flex items-center gap-2">
                <span class="w-1 h-4 bg-[#ff5000] rounded-full"></span>
                <h2 class="text-lg font-bold text-slate-800 dark:text-white">社区论坛</h2>
            </div>

            <div class="flex items-center gap-2 select-none" v-if="totalPages > 1">
                <button @click="prevPage" :disabled="currentPage === 1"
                    class="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    <Icon name="lucide:chevron-left" size="16" />
                </button>
                <span class="text-xs text-slate-400 font-mono">{{ currentPage }}/{{ totalPages }}</span>
                <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="w-6 h-6 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                    <Icon name="lucide:chevron-right" size="16" />
                </button>
            </div>
        </div>

        <!-- Section Grid -->
        <div v-if="loading" class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="i in 8" :key="i"
                class="flex gap-3 p-3 rounded-lg border border-slate-50 dark:border-white/5 animate-pulse">
                <div class="w-12 h-12 bg-slate-100 rounded-lg shrink-0"></div>
                <div class="flex-1 space-y-2">
                    <div class="h-4 bg-slate-100 rounded w-3/4"></div>
                    <div class="h-3 bg-slate-100 rounded w-1/2"></div>
                </div>
            </div>
        </div>

        <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div v-for="section in displayedSections" :key="section.sectionId"
                @click="navigateToSection(section.sectionId)"
                class="flex gap-3 p-3 rounded-xl border border-transparent hover:border-slate-100 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer group">
                <!-- Icon -->
                <img :src="section.iconUrl || 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'"
                    class="w-12 h-12 rounded-lg object-cover shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 group-hover:scale-105 transition-transform duration-300" />

                <div class="flex-1 min-w-0 flex flex-col justify-center">
                    <h3
                        class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 truncate group-hover:text-[#ff5000] transition-colors">
                        {{ section.sectionName }}
                    </h3>
                    <div class="flex items-center gap-3 text-[10px] text-slate-400">
                        <!-- We don't have member count in API yet, assuming postCount for both or just generic heat -->
                        <!-- If API adds member count later, replace the first stat -->
                        <div class="flex items-center gap-0.5" title="贴子数">
                            <Icon name="lucide:message-square" size="10" />
                            <span>{{ formatCount(section.postCount) }}</span>
                        </div>
                        <!-- Use a calculated heat or just same for now if no other data -->
                        <div class="flex items-center gap-0.5" title="热度">
                            <!-- Using postCount * 10 or similar as mock 'heat' if needed, or just hide -->
                            <Icon name="lucide:activity" size="10" />
                            <span>{{ formatCount(section.postCount * 13 + 520) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useForum } from '~/composables/form/useForum';

const router = useRouter();
const { sections, loading, fetchSections } = useForum();

const currentPage = ref(1);
const pageSize = 8; // 2 rows * 4 cols

const totalPages = computed(() => Math.ceil(sections.value.length / pageSize));

const displayedSections = computed(() => {
    const start = (currentPage.value - 1) * pageSize;
    const end = start + pageSize;
    return sections.value.slice(start, end);
});

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const navigateToSection = (id: number) => {
    router.push(`/service/community/forum/${id}`);
};

const formatCount = (num: number) => {
    if (num >= 10000) {
        return (num / 10000).toFixed(1) + 'W';
    }
    return num.toString();
};

onMounted(() => {
    if (sections.value.length === 0) {
        fetchSections();
    }
});
</script>
