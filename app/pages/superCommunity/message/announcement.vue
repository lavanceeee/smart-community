<template>
    <div class="space-y-6">
        <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h2 class="text-lg font-bold mb-4">发布新公告</h2>

            <div class="space-y-4 max-w-2xl">
                <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">公告标题</label>
                    <input type="text"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="请输入标题" />
                </div>

                <div>
                    <label class="block text-sm font-medium text-slate-700 mb-1">内容详情</label>
                    <textarea rows="6"
                        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="请输入公告内容..."></textarea>
                </div>

                <button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                    发布公告
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'super-community'
})
</script>
