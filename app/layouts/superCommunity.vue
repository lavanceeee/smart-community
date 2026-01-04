<template>
    <div class="flex h-screen bg-slate-50 dark:bg-slate-900">
        <!-- Sidebar -->
        <SuperCommunityAdminSidebar class="shrink-0" />

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

            <!-- Top Header (Optional, for mobile toggle or breadcrumbs) -->
            <header
                class="h-16 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-8 shadow-sm z-10">
                <h2 class="text-xl font-bold text-slate-800 dark:text-white tracking-tight">
                    {{ pageTitle }}
                </h2>
            </header>

            <!-- Scrollable Page Content -->
            <main class="flex-1 overflow-auto p-8">
                <slot />
            </main>

        </div>
    </div>
</template>

<script setup lang="ts">

const route = useRoute()

// Map routes to titles
const pageTitle = computed(() => {
    const path = route.path
    if (path.includes('/message/announcement')) return '公告发布'
    if (path.includes('/message/complaint')) return '投诉管理'
    if (path.includes('/security/visitor')) return '访客通行'
    if (path.includes('/security/parking')) return '车位管理'
    if (path.includes('/property/repair')) return '报事处理'
    if (path.includes('/payment/records')) return '缴费记录'
    return '数据看板'
})

</script>
