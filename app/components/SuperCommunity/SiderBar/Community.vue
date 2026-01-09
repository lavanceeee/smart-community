<template>
    <!-- Community Management -->
    <SuperCommunitySiderBarGroup 
        title="社区管理" 
        icon="lucide:users"
        :collapsed="collapsed"
        v-if="hasCommunityPermission"
    >
        <NuxtLink v-if="hasPermission('forum:section:view')" to="/superCommunity/community/section"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/community/section') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:layout-grid" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/community/section') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            板块管理
        </NuxtLink>

        <NuxtLink v-if="hasPermission('forum:view')" to="/superCommunity/community/forum"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/community/forum') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:messages-square" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/community/forum') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            论坛管理
        </NuxtLink>
    </SuperCommunitySiderBarGroup>

    <!-- Message Management -->
    <SuperCommunitySiderBarGroup 
        title="消息管理" 
        icon="lucide:megaphone"
        :collapsed="collapsed"
        v-if="hasMessagePermission"
    >
        <NuxtLink v-if="hasPermission('notification:view')" to="/superCommunity/message/notification"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/message/notification') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:bell" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/message/notification') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            通知管理
        </NuxtLink>

        <NuxtLink v-if="hasPermission('announcement:view')" to="/superCommunity/message/announcement"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/message/announcement') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:megaphone" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/message/announcement') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            公告管理
        </NuxtLink>

        <NuxtLink v-if="hasPermission('complaint:view')" to="/superCommunity/message/complaint"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/message/complaint') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:message-square-warning" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/message/complaint') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            投诉管理
        </NuxtLink>
    </SuperCommunitySiderBarGroup>

    <!-- Security Management -->
    <SuperCommunitySiderBarGroup 
        title="安保管理" 
        icon="lucide:shield"
        :collapsed="collapsed"
        v-if="hasSecurityPermission"
    >
        <NuxtLink v-if="hasPermission('visitor:view')" to="/superCommunity/security/visitor"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/security/visitor') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:user-check" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/security/visitor') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            访客通行
        </NuxtLink>

        <NuxtLink v-if="hasPermission('parking:view')" to="/superCommunity/security/parking"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/security/parking') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:car" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/security/parking') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            车位管理
        </NuxtLink>
    </SuperCommunitySiderBarGroup>
</template>

<script setup lang="ts">
defineProps({
    collapsed: {
        type: Boolean,
        default: false
    }
})

const route = useRoute()
const userStore = useUserStore()

const isActive = (path: string) => route.path.startsWith(path)

const hasPermission = (permissionCode: string) => {
    if (userStore.userRole?.roleCode === 'ROLE_SUPER_ADMIN') return true;
    return userStore.userPermissions?.some(p => p.permissionCode === permissionCode);
};

const hasCommunityPermission = computed(() => {
    return hasPermission('forum:section:view') || hasPermission('forum:view');
});

const hasMessagePermission = computed(() => {
    return hasPermission('notification:view') || hasPermission('announcement:view') || hasPermission('complaint:view');
});

const hasSecurityPermission = computed(() => {
    return hasPermission('visitor:view') || hasPermission('parking:view');
});
</script>
