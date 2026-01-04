<template>
    <div class="min-h-screen bg-white dark:bg-slate-900">
        <!-- Breadcrumb -->
        <div class="bg-[#f5f7fa] dark:bg-slate-900 py-3 border-b border-slate-100 dark:border-slate-800 mb-8">
            <div class="max-w-[1000px] mx-auto px-4 flex items-center gap-2 text-sm text-slate-500">
                <NuxtLink to="/" class="hover:text-[#1e40af]">首页</NuxtLink>
                <Icon name="lucide:chevron-right" size="14" />
                <NuxtLink to="/service/community/news" class="hover:text-[#1e40af]">社区公告</NuxtLink>
                <Icon name="lucide:chevron-right" size="14" />
                <span class="text-slate-800">公告详情</span>
            </div>
        </div>

        <div class="max-w-[1000px] mx-auto px-4 pb-20">
            <!-- Loading State -->
            <div v-if="loading" class="animate-pulse space-y-8 mt-10">
                <div class="h-10 bg-slate-100 rounded w-3/4 mx-auto"></div>
                <div class="flex justify-center gap-8">
                    <div class="h-4 bg-slate-100 rounded w-32"></div>
                    <div class="h-4 bg-slate-100 rounded w-32"></div>
                </div>
                <div class="space-y-4 pt-8">
                    <div class="h-4 bg-slate-100 rounded w-full"></div>
                    <div class="h-4 bg-slate-100 rounded w-full"></div>
                    <div class="h-4 bg-slate-100 rounded w-2/3"></div>
                </div>
            </div>

            <!-- Content -->
            <article v-else-if="detail" class="bg-white dark:bg-slate-800 dark:text-gray-200">
                <header class="mb-10 text-center border-b border-slate-100 dark:border-slate-700 pb-6">
                    <h1
                        class="text-3xl md:text-[34px] font-medium text-[#333] dark:text-gray-100 mb-8 leading-tight tracking-tight">
                        {{ detail.title }}
                    </h1>

                    <div
                        class="flex flex-wrap items-center justify-between gap-4 text-sm text-[#999] dark:text-slate-400">
                        <div class="flex items-center gap-6">
                            <span>{{ detail.publishTime }}</span>
                            <span>来源：物业服务中心</span>
                        </div>

                        <!-- Tools Bar -->
                        <DetailsToolsBar :current-font-size="currentFontSize"
                            @change-font-size="handleChangeFontSize" />
                    </div>
                </header>

                <div class="prose dark:prose-invert max-w-none text-[#333] dark:text-gray-200 font-serif" :class="{
                    'prose-base': currentFontSize === 'normal',
                    'prose-lg': currentFontSize === 'large',
                    'prose-xl': currentFontSize === 'xlarge'
                }">
                    <!-- Using content logic similar to standard prose but with customized indent and spacing -->
                    <div class="space-y-6 leading-8">
                        <p v-for="(paragraph, index) in formattedContent" :key="index" class="indent-8 text-justify">
                            {{ paragraph }}
                        </p>
                    </div>
                </div>

                <footer class="mt-16 pt-8 border-t border-slate-100 dark:border-slate-700 flex justify-center">
                    <button @click="goBack"
                        class="px-8 py-2 bg-[#f5f7fa] dark:bg-slate-700 hover:bg-[#ff5000] dark:hover:bg-[#ff5000] text-slate-600 dark:text-slate-200 hover:text-white rounded transition-colors text-sm">
                        关闭窗口
                    </button>
                </footer>
            </article>

            <!-- Error/Empty State -->
            <div v-else class="text-center py-20">
                <p class="text-slate-400">未找到该公告信息</p>
                <button @click="goBack" class="mt-4 text-[#1e40af] hover:underline">返回列表</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DetailsToolsBar from '~/components/News/DetailsToolsBar.vue'

const route = useRoute()
const { detail, loading, fetchDetail } = useAnnouncementDetail()
const currentFontSize = ref<'normal' | 'large' | 'xlarge'>('normal')

const formattedContent = computed(() => {
    if (!detail.value?.content) return []
    return detail.value.content.split(/\r\n|\n/).filter((p: string) => p.trim() !== '')
})

onMounted(() => {
    const id = route.params.id
    if (id) {
        fetchDetail(id as string)
    }
})

const handleChangeFontSize = (size: 'normal' | 'large' | 'xlarge') => {
    currentFontSize.value = size
}

useHead({
    title: computed(() => detail.value ? `${detail.value.title} - 社区公告` : '加载中...')
})

const goBack = () => {
    // navigateTo('/service/community/news')
    // Ideally close window if opened in new tab, or back if SPA
    navigateTo('/service/community/news')
}
</script>
