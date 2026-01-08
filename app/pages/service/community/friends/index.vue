<script setup>
</script>

<template>
    <div
        class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <div class="max-w-[1500px] mx-auto px-4 py-4 flex items-start gap-4">

            <!-- Left Sidebar (Reused) -->
            <aside class="sticky top-[56px] shrink-0 w-60">
                <MainPageLeftSiderBar />
            </aside>

            <!-- Main Content -->
            <main class="flex-1 min-w-0 flex flex-col gap-6">

                <!-- Top Banner -->
                <FriendsTopBanner />

                <!-- Friends List Placeholder / Content Area -->
                <div
                    class="bg-white dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 p-8 min-h-[500px] flex flex-col items-center justify-center text-slate-400">
                    <div class="p-6 bg-slate-50 dark:bg-slate-800 rounded-full mb-4 animate-pulse">
                        <Icon name="lucide:users" size="48" class="opacity-30" />
                    </div>
                    <h3 class="text-lg font-medium text-slate-600 dark:text-slate-300 mb-2">好友列表</h3>
                    <p class="text-sm opacity-60">暂无好友，快去添加新朋友吧</p>
                </div>

            </main>

        </div>
    </div>
</template>