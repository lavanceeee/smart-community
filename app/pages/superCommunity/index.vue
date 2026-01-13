<template>
    <div class="p-6 space-y-6 bg-slate-100 dark:bg-slate-950 min-h-screen">
        <!-- Page Header -->
        <div class="flex items-center justify-between mb-8">
            <div>
                <h1 class="text-2xl font-bold text-slate-800 dark:text-white">数据总览</h1>
                <p class="text-sm text-slate-500 mt-1">社区管理后台数据概览</p>
            </div>
            <div class="flex items-center gap-3">
                <span class="text-xs text-slate-400">最后更新: {{ lastUpdate }}</span>
                <button @click="refreshAllData"
                    class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    <Icon name="lucide:refresh-cw" size="16" :class="{ 'animate-spin': loading }" />
                    刷新
                </button>
            </div>
        </div>

        <!-- 商城统计组件 -->
        <SuperCommunityMainPageCoMallStatic ref="mallStaticRef" />

        <!-- 论坛统计组件 -->
        <SuperCommunityMainPageCoForumStatic ref="forumStaticRef" />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'super-community'
})

const loading = ref(false)
const lastUpdate = ref('')
const mallStaticRef = ref<any>(null)
const forumStaticRef = ref<any>(null)

const refreshAllData = async () => {
    loading.value = true
    // 刷新子组件
    await Promise.all([
        mallStaticRef.value?.refresh(),
        forumStaticRef.value?.refresh()
    ])
    lastUpdate.value = new Date().toLocaleTimeString()
    loading.value = false
}

onMounted(() => {
    lastUpdate.value = new Date().toLocaleTimeString()
})

useHead({
    title: '数据总览 - 社区智管后台'
})
</script>
