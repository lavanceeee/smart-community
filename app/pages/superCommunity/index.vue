<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Quick Stat Cards (Placeholder Data) -->
        <div v-for="stat in stats" :key="stat.title"
            class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-4">
                <div class="p-3 rounded-lg" :class="stat.bgClass">
                    <Icon :name="stat.icon" size="24" :class="stat.textClass" />
                </div>
                <span class="text-2xs font-bold px-2 py-1 rounded-full" :class="stat.changeClass">
                    {{ stat.change }}
                </span>
            </div>
            <div class="text-3xl font-bold text-slate-900 dark:text-white mb-1">{{ stat.value }}</div>
            <div class="text-sm text-slate-500">{{ stat.title }}</div>
        </div>



    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'super-community'
})

const stats = [
    {
        title: '今日访客',
        value: '24',
        icon: 'lucide:users',
        bgClass: 'bg-blue-50 dark:bg-blue-900/20',
        textClass: 'text-blue-600 dark:text-blue-400',
        change: '+12%',
        changeClass: 'bg-green-100 text-green-700'
    },
    {
        title: '待处理报修',
        value: '5',
        icon: 'lucide:wrench',
        bgClass: 'bg-amber-50 dark:bg-amber-900/20',
        textClass: 'text-amber-600 dark:text-amber-400',
        change: '待办',
        changeClass: 'bg-amber-100 text-amber-700'
    },
    {
        title: '本周投诉',
        value: '2',
        icon: 'lucide:message-square-warning',
        bgClass: 'bg-red-50 dark:bg-red-900/20',
        textClass: 'text-red-600 dark:text-red-400',
        change: '-50%',
        changeClass: 'bg-green-100 text-green-700'
    },
    {
        title: '车位使用率',
        value: '85%',
        icon: 'lucide:car',
        bgClass: 'bg-indigo-50 dark:bg-indigo-900/20',
        textClass: 'text-indigo-600 dark:text-indigo-400',
        change: '紧张',
        changeClass: 'bg-red-100 text-red-700'
    }
]
</script>