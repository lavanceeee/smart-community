<template>
    <!-- Message Management -->
    <SuperCommunitySiderBarGroup title="消息管理" v-if="hasMessagePermission">
        <NuxtLink v-if="hasPermission('announcement:view')" to="/superCommunity/message/announcement"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/message/announcement') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:megaphone" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/message/announcement') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            公告发布
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
    <SuperCommunitySiderBarGroup title="安保管理" v-if="hasSecurityPermission">
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

    <!-- Property Management -->
    <SuperCommunitySiderBarGroup title="物业管理" v-if="hasPropertyPermission">
        <NuxtLink v-if="hasPermission('repair:view')" to="/superCommunity/property/repair"
            class="group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200"
            :class="isActive('/superCommunity/property/repair') ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20' : 'hover:bg-slate-800 hover:text-white'">
            <Icon name="lucide:wrench" size="18" class="mr-3 flex-shrink-0"
                :class="isActive('/superCommunity/property/repair') ? 'text-white' : 'text-slate-400 group-hover:text-white'" />
            报事处理
        </NuxtLink>
    </SuperCommunitySiderBarGroup>
</template>

<script setup lang="ts">
const route = useRoute();
const userStore = useUserStore();

const isActive = (path: string) => route.path.startsWith(path);

const hasPermission = (permissionCode: string) => {
    if (userStore.userRole?.roleCode === 'ROLE_SUPER_ADMIN') return true;
    return userStore.userPermissions?.some(p => p.permissionCode === permissionCode);
};

const hasMessagePermission = computed(() => {
    return hasPermission('announcement:view') || hasPermission('complaint:view');
});

const hasSecurityPermission = computed(() => {
    return hasPermission('visitor:view') || hasPermission('parking:view');
});

const hasPropertyPermission = computed(() => {
    return hasPermission('repair:view');
});
</script>
