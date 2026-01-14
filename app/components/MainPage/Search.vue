<template>
    <div class="relative w-full z-50" ref="searchContainer">
        <!-- 搜索输入框 -->
        <div class="relative group">
            <div
                class="flex items-center w-full h-12 px-4 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500">

                <Icon name="lucide:search" class="w-5 h-5 text-slate-400 mr-3" />

                <input v-model="searchState.query" type="text" placeholder="搜索社区服务、公告、论坛..."
                    class="flex-1 bg-transparent border-none outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 text-base h-full"
                    @focus="openDropdown" />

                <div v-if="searchState.query" @click="clearSearch"
                    class="cursor-pointer p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 transition-colors">
                    <Icon name="lucide:x" class="w-4 h-4" />
                </div>
            </div>
        </div>

        <!-- 搜索结果下拉面板 -->
        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-2 opacity-0"
            enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-2 opacity-0">
            <div v-show="searchState.isOpen && (hasResults || searchState.loading || searchState.query)"
                class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden max-h-[300px] overflow-y-auto z-50 custom-scrollbar">

                <!-- 加载状态 -->
                <div v-if="searchState.loading" class="p-4 space-y-4">
                    <div v-for="i in 3" :key="i" class="flex gap-3 animate-pulse">
                        <div class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
                        <div class="flex-1 space-y-2 py-1">
                            <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
                            <div class="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
                        </div>
                    </div>
                </div>

                <!-- 搜索结果 -->
                <div v-else-if="hasResults" class="py-2">

                    <!-- 社区服务 -->
                    <div v-if="searchState.results.services.length > 0" class="mb-2">
                        <div
                            class="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/50">
                            社区服务 ({{ searchState.results.services.length }})
                        </div>
                        <div v-for="item in searchState.results.services" :key="item.id" @click="handleSelect(item)"
                            class="px-4 py-3 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors border-b border-slate-50 dark:border-slate-700/30 last:border-0">
                            <div
                                class="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 shrink-0">
                                <Icon :name="item.icon || 'lucide:grid'" class="w-5 h-5" />
                            </div>
                            <div>
                                <div class="text-sm font-medium text-slate-800 dark:text-slate-200">{{ item.title }}
                                </div>
                                <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{{
                                    item.description }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- 公告新闻 -->
                    <div v-if="searchState.results.news.length > 0" class="mb-2">
                        <div
                            class="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/50">
                            公告新闻 ({{ searchState.results.news.length }})
                        </div>
                        <div v-for="item in searchState.results.news" :key="item.id" @click="handleSelect(item)"
                            class="px-4 py-3 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors border-b border-slate-50 dark:border-slate-700/30 last:border-0">
                            <div
                                class="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-500 shrink-0">
                                <Icon name="lucide:newspaper" class="w-5 h-5" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-1">{{
                                    item.title }}</div>
                                <div class="flex items-center gap-2 mt-0.5">
                                    <span class="text-xs text-slate-400">{{ formatTime(item.timestamp) }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 论坛帖子 -->
                    <div v-if="searchState.results.forum.length > 0">
                        <div
                            class="px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-800/50">
                            论坛帖子 ({{ searchState.results.forum.length }})
                        </div>
                        <div v-for="item in searchState.results.forum" :key="item.id" @click="handleSelect(item)"
                            class="px-4 py-3 flex items-start gap-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors border-b border-slate-50 dark:border-slate-700/30 last:border-0">
                            <div
                                class="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500 shrink-0">
                                <Icon name="lucide:message-circle" class="w-5 h-5" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="text-sm font-medium text-slate-800 dark:text-slate-200 line-clamp-1">{{
                                    item.title }}</div>
                                <div class="flex items-center gap-2 mt-0.5">
                                    <span v-if="item.category"
                                        class="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500">{{
                                            item.category }}</span>
                                    <div class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{{
                                        item.description }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 空状态 -->
                <div v-else class="p-8 text-center text-slate-500 dark:text-slate-400">
                    <div
                        class="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-3">
                        <Icon name="lucide:search-x" class="w-6 h-6 text-slate-400" />
                    </div>
                    <p class="text-sm">未找到相关结果</p>
                    <p class="text-xs mt-1 text-slate-400">换个关键词试试？</p>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { useGlobalSearch, type SearchResult } from '~/composables/useGlobalSearch'
import { onClickOutside } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()
const { searchState, clearSearch } = useGlobalSearch()
const searchContainer = ref(null)

// 计算是否有结果
const hasResults = computed(() => {
    const { services, news, forum } = searchState.results
    return services.length > 0 || news.length > 0 || forum.length > 0
})

// 点击外部关闭
onClickOutside(searchContainer, () => {
    searchState.isOpen = false
})

const openDropdown = () => {
    if (searchState.query) {
        searchState.isOpen = true
    }
}

const handleSelect = (item: SearchResult) => {
    if (item.path) {
        router.push(item.path)
    }
    searchState.isOpen = false
}

const formatTime = (time?: string) => {
    if (!time) return ''
    return new Date(time).toLocaleDateString()
}
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #475569;
}
</style>
