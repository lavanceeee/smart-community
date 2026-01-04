<template>
    <div class="bg-white pt-8 pb-4 border-b border-slate-100 mb-6">
        <div class="max-w-[1000px] mx-auto px-4">
            <!-- Search Input Group -->
            <div class="flex max-w-[800px] mx-auto h-12 shadow-sm mb-6">
                <!-- Dropdown -->
                <div class="relative group shrink-0">
                    <button
                        class="h-full px-4 bg-slate-50 border border-slate-200 border-r-0 rounded-l-md flex items-center gap-2 text-slate-700 hover:text-[#ff5000] transition-colors text-sm font-medium">
                        <span>全部</span>
                        <Icon name="lucide:chevron-down" size="14" class="text-slate-400 group-hover:text-[#ff5000]" />
                    </button>
                    <!-- Dropdown Menu (Mock) -->
                    <div
                        class="absolute top-full left-0 w-32 bg-white shadow-lg border border-slate-100 rounded-md mt-1 hidden group-hover:block z-20 py-1">
                        <div class="px-4 py-2 hover:bg-orange-50 hover:text-[#ff5000] text-sm cursor-pointer">全部</div>
                        <div class="px-4 py-2 hover:bg-orange-50 hover:text-[#ff5000] text-sm cursor-pointer">标题</div>
                        <div class="px-4 py-2 hover:bg-orange-50 hover:text-[#ff5000] text-sm cursor-pointer">内容</div>
                    </div>
                </div>

                <!-- Input -->
                <div class="flex-1 relative">
                    <input v-model="searchKeyword" @keyup.enter="handleSearch" type="text" placeholder="请输入搜索关键词"
                        class="w-full h-full border border-slate-200 outline-none px-4 text-slate-700 placeholder:text-slate-400 focus:border-[#ff5000] focus:ring-1 focus:ring-[#ff5000] transition-all" />
                    <button v-if="searchKeyword" @click="searchKeyword = ''"
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500">
                        <Icon name="lucide:x-circle" size="16" />
                    </button>
                </div>

                <!-- Search Button -->
                <button @click="handleSearch"
                    class="w-20 bg-[#ff5000] hover:bg-[#ff4000] text-white flex items-center justify-center rounded-r-md transition-colors">
                    <Icon name="lucide:search" size="20" />
                </button>
            </div>

            <!-- Filters Row -->
            <div
                class="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-slate-500 justify-center sm:justify-start max-w-[800px] mx-auto">
                <div class="text-slate-400">
                    相关结果: 约 <span class="text-[#ff5000] font-bold">{{ total }}</span> 个
                </div>

                <div class="flex items-center gap-3">
                    <span class="text-slate-400">排序方式:</span>
                    <label class="flex items-center gap-1 cursor-pointer hover:text-[#ff5000]">
                        <input type="radio" name="sort" value="relevance" class="accent-[#ff5000]" checked>
                        按相关度
                    </label>
                    <label class="flex items-center gap-1 cursor-pointer hover:text-[#ff5000]">
                        <input type="radio" name="sort" value="time" class="accent-[#ff5000]">
                        按时间
                    </label>
                </div>

                <div class="flex items-center gap-3">
                    <span class="text-slate-400">检索方式:</span>
                    <label class="flex items-center gap-1 cursor-pointer hover:text-[#ff5000]">
                        <input type="radio" name="type" value="full" class="accent-[#ff5000]" checked>
                        全文
                    </label>
                    <label class="flex items-center gap-1 cursor-pointer hover:text-[#ff5000]">
                        <input type="radio" name="type" value="title" class="accent-[#ff5000]">
                        标题
                    </label>
                </div>

                <div class="flex items-center gap-2">
                    <select
                        class="bg-slate-50 border border-slate-200 rounded px-2 py-0.5 outline-none focus:border-[#ff5000] hover:border-[#ff5000] text-slate-600 transition-colors">
                        <option>时间不限</option>
                        <option>最近一周</option>
                        <option>最近一月</option>
                        <option>最近一年</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    total?: number
}>()

const emit = defineEmits(['search'])
const searchKeyword = ref('')

const handleSearch = () => {
    emit('search', searchKeyword.value)
}
</script>
