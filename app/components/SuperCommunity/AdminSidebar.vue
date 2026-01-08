<template>
    <div 
        class="bg-slate-900 min-h-screen flex flex-col text-slate-300 transition-all duration-300 ease-in-out relative"
        :class="isCollapsed ? 'w-20' : 'w-64'"
    >
        <!-- Logo / Title -->
        <div class="h-16 flex items-center border-b border-slate-800 px-4">
            <div class="flex items-center flex-1 min-w-0">
                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="lucide:layout-dashboard" class="text-white" size="20" />
                </div>
                <Transition name="fade-slide">
                    <span v-if="!isCollapsed" class="text-white font-bold text-lg tracking-wide ml-3 truncate">
                        社区智管后台
                    </span>
                </Transition>
            </div>
        </div>

        <!-- Navigation -->
        <nav
            class="flex-1 overflow-y-auto py-6 px-3 space-y-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <SuperCommunitySiderBarCommunity :collapsed="isCollapsed" />
            <SuperCommunitySiderBarMall :collapsed="isCollapsed" />
            <SuperCommunitySiderBarUserManagement :collapsed="isCollapsed" />
        </nav>

        <!-- User Profile / Bottom Actions -->
        <div class="p-4 border-t border-slate-800 space-y-2">
            <!-- Toggle Button -->
            <button 
                @click="toggleSidebar"
                class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-200 group"
                :class="isCollapsed ? 'justify-center' : ''"
                :title="isCollapsed ? '展开侧边栏' : '收起侧边栏'"
            >
                <Icon 
                    name="lucide:panel-left-close" 
                    class="text-slate-400 group-hover:text-blue-400 transition-colors shrink-0"
                    :class="isCollapsed ? 'rotate-180' : ''"
                    size="18" 
                />
                <Transition name="fade-slide">
                    <span v-if="!isCollapsed" class="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        收起侧边栏
                    </span>
                </Transition>
            </button>

            <!-- User Profile -->
            <div 
                class="flex items-center gap-3 rounded-lg bg-slate-800/50 transition-all duration-300"
                :class="isCollapsed ? 'px-2 py-2 justify-center' : 'px-3 py-2'"
            >
                <div
                    class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white shrink-0"
                    :title="userStore.userRole?.roleName || '管理员'"
                >
                    {{ userStore.userRole?.roleName?.charAt(0) || 'A' }}
                </div>
                
                <Transition name="fade-slide">
                    <div v-if="!isCollapsed" class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-white truncate">
                            {{ userStore.userRole?.roleName || '管理员' }}
                        </p>
                        <p class="text-xs text-slate-500 truncate">
                            {{ userStore.userInfo?.email || 'admin@community.com' }}
                        </p>
                    </div>
                </Transition>
                
                <button 
                    @click="handleLogout" 
                    class="text-slate-400 hover:text-white transition-colors shrink-0"
                    :class="isCollapsed && 'hidden'"
                    title="退出登录"
                >
                    <Icon name="lucide:log-out" size="16" />
                </button>
            </div>
            
            <!-- Collapsed Logout Button -->
            <Transition name="fade">
                <button
                    v-if="isCollapsed"
                    @click="handleLogout"
                    class="w-full flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="退出登录"
                >
                    <Icon name="lucide:log-out" size="16" />
                </button>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const router = useRouter()
const { isCollapsed, toggleSidebar } = useSidebarCollapse()

const handleLogout = () => {
    userStore.logout()
    router.push('/login')
}
</script>

<style scoped>
/* Fade Slide Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateX(-10px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>