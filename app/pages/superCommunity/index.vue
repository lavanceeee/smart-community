<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Welcome Card -->
        <div
            class="col-span-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg overflow-hidden relative">
            <div class="relative z-10">
                <h1 class="text-3xl font-bold mb-2">欢迎回来，管理员</h1>
                <p class="text-blue-100 opacity-90 max-w-xl">这里是智慧社区管理后台。您可以发布公告、处理投诉、管理访客和查看缴费记录。</p>
            </div>
            <!-- Decorative circles -->
            <div class="absolute -right-10 -bottom-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
            <div class="absolute top-10 right-20 w-32 h-32 rounded-full bg-blue-400 opacity-20 blur-2xl"></div>
        </div>

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

        <!-- Quick Actions -->
        <div
            class="col-span-full lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
            <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                <Icon name="lucide:zap" class="text-amber-500" />
                快捷入口
            </h3>
            <div class="grid grid-cols-2 gap-4">
                <NuxtLink to="/superCommunity/message/announcement"
                    class="flex items-center gap-3 p-4 rounded-xl border border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-colors group">
                    <div
                        class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <Icon name="lucide:plus" />
                    </div>
                    <div>
                        <div class="font-medium text-slate-900 group-hover:text-blue-700">发布新公告</div>
                        <div class="text-xs text-slate-500">发送全员通知</div>
                    </div>
                </NuxtLink>
                <NuxtLink to="/superCommunity/security/visitor"
                    class="flex items-center gap-3 p-4 rounded-xl border border-dashed border-slate-300 hover:border-green-500 hover:bg-green-50 transition-colors group">
                    <div
                        class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                        <Icon name="lucide:check-square" />
                    </div>
                    <div>
                        <div class="font-medium text-slate-900 group-hover:text-green-700">审批访客</div>
                        <div class="text-xs text-slate-500">3 条待办申请</div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <!-- Recent Activity Placeholder -->
        <div
            class="col-span-full lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm">
            <h3 class="text-lg font-bold mb-4">待处理事项</h3>
            <div class="space-y-4">
                <div v-for="i in 3" :key="i"
                    class="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 rounded-full bg-red-500"></div>
                        <span class="text-sm font-medium">住户报修：水管漏水 (3单元201)</span>
                    </div>
                    <button class="text-xs text-blue-600 hover:underline">去处理</button>
                </div>
            </div>
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