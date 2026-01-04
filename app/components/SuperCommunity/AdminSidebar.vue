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
        <nav class="flex-1 overflow-y-auto py-6 px-3 space-y-1">
            <div v-for="(group, idx) in menuGroups" :key="idx" class="mb-6">
                <div v-if="group.title" class="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {{ group.title }}
                </div>

                <div class="space-y-1">
                    <NuxtLink v-for="item in group.items" :key="item.path" :to="item.path"
                        class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
                        :class="isActive(item.path)
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                            : 'hover:bg-slate-800 hover:text-white'">
                        <Icon :name="item.icon" size="18" class="mr-3 flex-shrink-0"
                            :class="isActive(item.path) ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
                        {{ item.name }}
                    </NuxtLink>
                </div>
            </div>
        </nav>

        <!-- User Profile / Bottom Actions -->
        <div class="p-4 border-t border-slate-800">
            <div class="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-800/50">
                <div
                    class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white">
                    AD
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-white truncate">超级管理员</p>
                    <p class="text-xs text-slate-500 truncate">admin@community.com</p>
                </div>
                <button class="text-slate-400 hover:text-white transition-colors">
                    <Icon name="lucide:log-out" size="16" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

const menuGroups = [
    {
        title: '消息管理',
        items: [
            { name: '公告发布', path: '/superCommunity/message/announcement', icon: 'lucide:megaphone' },
            { name: '投诉管理', path: '/superCommunity/message/complaint', icon: 'lucide:message-square-warning' }
        ]
    },
    {
        title: '安保管理',
        items: [
            { name: '访客通行', path: '/superCommunity/security/visitor', icon: 'lucide:user-check' },
            { name: '车位管理', path: '/superCommunity/security/parking', icon: 'lucide:car' }
        ]
    },
    {
        title: '物业管理',
        items: [
            { name: '报事处理', path: '/superCommunity/property/repair', icon: 'lucide:wrench' }
        ]
    },
    {
        title: '缴费管理',
        items: [
            { name: '缴费记录', path: '/superCommunity/payment/records', icon: 'lucide:receipt' }
        ]
    }
]

const isActive = (path: string) => route.path.startsWith(path)
</script>
