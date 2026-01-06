<template>
    <div class="w-64 bg-slate-900 min-h-screen flex flex-col text-slate-300">
        <!-- Logo / Title -->
        <div class="h-16 flex items-center px-6 border-b border-slate-800">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Icon name="lucide:layout-dashboard" class="text-white" size="20" />
            </div>
            <span class="text-white font-bold text-lg tracking-wide">社区智管后台</span>
        </div>

        <!-- Navigation -->
        <nav
            class="flex-1 overflow-y-auto py-6 px-3 space-y-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <SuperCommunitySiderBarCommunity />
            <SuperCommunitySiderBarMall />
            <SuperCommunitySiderBarUserManagement />
        </nav>

        <!-- User Profile / Bottom Actions -->
        <div class="p-4 border-t border-slate-800">
            <div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/50">
                <div
                    class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                    {{ userStore.userRole?.roleName?.charAt(0) || 'A' }}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-white truncate">{{ userStore.userRole?.roleName || '管理员' }}</p>
                    <p class="text-xs text-slate-500 truncate">{{ userStore.userInfo?.email || 'admin@community.com' }}
                    </p>
                </div>
                <button @click="handleLogout" class="text-slate-400 hover:text-white transition-colors">
                    <Icon name="lucide:log-out" size="16" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const userStore = useUserStore();
const router = useRouter();

const handleLogout = () => {
    userStore.logout();
    router.push('/login');
};
</script>