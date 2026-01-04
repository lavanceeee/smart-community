<template>
    <div class="max-w-[800px] mx-auto px-4 py-8 min-h-screen">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <NuxtLink to="/" class="hover:text-[#ff5000]">首页</NuxtLink>
            <Icon name="lucide:chevron-right" size="14" />
            <NuxtLink to="/service/community/news" class="hover:text-[#ff5000]">社区公告</NuxtLink>
            <Icon name="lucide:chevron-right" size="14" />
            <span class="text-slate-800">公告详情</span>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="animate-pulse space-y-6">
            <div class="h-8 bg-slate-100 rounded w-3/4"></div>
            <div class="flex gap-4">
                <div class="h-4 bg-slate-100 rounded w-20"></div>
                <div class="h-4 bg-slate-100 rounded w-20"></div>
            </div>
            <div class="space-y-3 pt-6">
                <div class="h-4 bg-slate-100 rounded w-full"></div>
                <div class="h-4 bg-slate-100 rounded w-full"></div>
                <div class="h-4 bg-slate-100 rounded w-2/3"></div>
            </div>
        </div>

        <!-- Content -->
        <article v-else-if="detail" class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <header class="mb-8 border-b border-slate-100 pb-8">
                <h1 class="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                    {{ detail.title }}
                </h1>
                <div class="flex items-center gap-6 text-sm text-slate-400">
                    <div class="flex items-center gap-1.5">
                        <Icon name="lucide:clock" size="14" />
                        <span>{{ detail.publishTime }}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <Icon name="lucide:user" size="14" />
                        <span>{{ detail.publishUserName }}</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <Icon name="lucide:eye" size="14" />
                        <span>{{ detail.readCount }} 阅读</span>
                    </div>
                </div>
            </header>

            <div class="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-loose">
                <p v-for="(paragraph, index) in formattedContent" :key="index">
                    {{ paragraph }}
                </p>
            </div>

            <footer class="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                <button @click="navigateTo('/service/community/news')"
                    class="flex items-center gap-2 text-slate-500 hover:text-[#ff5000] transition-colors">
                    <Icon name="lucide:arrow-left" size="16" />
                    返回列表
                </button>
            </footer>
        </article>

        <!-- Error/Empty State -->
        <div v-else class="text-center py-20">
            <p class="text-slate-400">未找到该公告信息</p>
            <button @click="navigateTo('/service/community/news')"
                class="mt-4 text-[#ff5000] hover:underline">返回列表</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { detail, loading, fetchDetail } = useAnnouncementDetail()

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

useHead({
    title: computed(() => detail.value ? `${detail.value.title} - 社区公告` : '加载中...')
})
</script>
