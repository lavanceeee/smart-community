<template>
    <div class="max-w-[1000px] mx-auto px-4 py-8 min-h-screen">
        <div class="mb-10 text-center">
            <h1 class="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">社区公告</h1>
            <p class="text-slate-500 text-sm">第一时间获取小区最新动态通知，共建美好家园</p>
        </div>

        <!-- Loading Skeleton -->
        <div v-if="loading" class="space-y-6">
            <div v-for="i in 3" :key="i"
                class="bg-white rounded-xl p-6 shadow-sm border border-slate-100 h-40 animate-pulse">
                <div class="h-6 bg-slate-100 rounded w-1/3 mb-4"></div>
                <div class="h-4 bg-slate-100 rounded w-full mb-2"></div>
                <div class="h-4 bg-slate-100 rounded w-2/3"></div>
            </div>
        </div>

        <!-- News List -->
        <div v-else class="space-y-6">
            <div v-for="item in newsList" :key="item.announceId"
                @click="navigateTo('/service/community/news/' + item.announceId)"
                class="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#ff5000]/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden">

                <!-- Decorative accent -->
                <div
                    class="absolute w-1 h-full left-0 top-0 bg-[#ff5000] opacity-0 group-hover:opacity-100 transition-opacity">
                </div>

                <div class="flex justify-between items-start mb-3">
                    <div class="flex-1 pr-4">
                        <h2
                            class="text-xl font-bold text-slate-800 group-hover:text-[#ff5000] transition-colors line-clamp-1 mb-2">
                            {{ item.title }}
                        </h2>
                        <p class="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                            {{ item.content }}
                        </p>
                    </div>
                    <div class="flex flex-col items-end shrink-0 pl-4 border-l border-slate-50">
                        <span class="text-2xl font-bold text-slate-200 group-hover:text-[#ff5000]/20 transition-colors">
                            {{ new Date(item.publishTime).getDate() }}
                        </span>
                        <span class="text-xs font-bold text-slate-400 uppercase">
                            {{ new Date(item.publishTime).toLocaleString('default', { month: 'short' }) }}
                        </span>
                    </div>
                </div>

                <div class="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-50">
                    <div class="flex items-center gap-4">
                        <span class="flex items-center gap-1.5 bg-slate-50 px-2 py-1 rounded-full text-slate-500">
                            <Icon name="lucide:user-circle" size="14" class="text-[#ff5000]" />
                            <span class="font-medium text-slate-600">{{ item.publishUserName }}</span>
                        </span>
                        <span class="flex items-center gap-1">
                            <Icon name="lucide:clock" size="14" />
                            {{ item.publishTime }}
                        </span>
                    </div>
                    <div
                        class="flex items-center gap-1.5 px-2 py-1 rounded-full group-hover:bg-[#ff5000]/5 group-hover:text-[#ff5000] transition-colors">
                        <Icon name="lucide:eye" size="14" />
                        <span>{{ item.readCount }} 次阅读</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Empty State -->
        <div v-if="!loading && newsList.length === 0" class="py-20 text-center">
            <div
                class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                <Icon name="lucide:inbox" size="40" />
            </div>
            <p class="text-slate-400 text-sm">暂无公告消息</p>
        </div>

        <!-- Pagination -->
        <div class="mt-12 flex justify-center">
            <el-pagination v-if="total > 0" background layout="prev, pager, next" :total="total"
                :page-size="pagination.pageSize" :current-page="pagination.pageNum" @current-change="handlePageChange"
                class="custom-pagination" />
        </div>
    </div>
</template>

<script setup lang="ts">
const { newsList, total, loading, pagination, fetchNews, handlePageChange } = useCommunityNews()

useHead({
    title: '社区公告 - 智慧社区'
})

onMounted(() => {
    fetchNews()
})
</script>

<style scoped>
:deep(.custom-pagination .el-pager li.is-active) {
    background-color: #ff5000 !important;
}

:deep(.custom-pagination .el-pager li:hover) {
    color: #ff5000 !important;
}
</style>