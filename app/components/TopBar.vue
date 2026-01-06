<template>
  <nav
    class="h-10 px-4 flex items-center justify-between bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors z-50 relative">
    <nuxt-link to="/">
      <div class="text-sm font-bold text-[#ff5000] flex items-center gap-2">
        <Icon name="lucide:layout-grid" size="14" class="shrink-0" />
        <div class="flex items-center">
          <span>{{ titleParts.base }}</span>
          <Transition name="title-slide" mode="out-in">
            <span :key="titleParts.sub" class="whitespace-nowrap block">{{ titleParts.sub }}</span>
          </Transition>
        </div>
      </div>
    </nuxt-link>

    <div class="flex items-center gap-4 text-xs font-medium">

      <NuxtLink to="/wallet" class="text-slate-600 dark:text-slate-300 hover:text-[#ff5000] transition-colors">
        钱包
      </NuxtLink>

      <NuxtLink to="/superCommunity" v-show="canVisitSc"
        class="text-slate-600 dark:text-slate-300 hover:text-[#ff5000] transition-colors">
        {{ roleType }}
      </NuxtLink>

      <div class="h-3 w-px bg-slate-200 dark:bg-slate-700"></div>

      <button @click="toggleTheme"
        class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#ff5000] transition-all">
        <Icon v-if="colorMode.value === 'dark'" name="lucide:moon" size="14" />
        <Icon v-else name="lucide:sun" size="14" />
      </button>
      <template v-if="userStore.isLoggedIn">
        <NuxtLink to="/profile"
          class="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-[#ff5000] transition-colors">
          <div
            class="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-[#ff5000] text-[10px]">
            {{ userStore.displayName ? userStore.displayName.charAt(0).toUpperCase() : 'U' }}
          </div>
          {{ userStore.displayName }}
        </NuxtLink>
      </template>

      <NuxtLink v-else to="/login" class="text-slate-600 dark:text-slate-300 hover:text-[#ff5000] transition-colors">
        登录
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const route = useRoute();
const userStore = useUserStore();


//canVisitSc
const canVisitSc = computed(() => {
  const roleTypeId = userStore.userRole?.roleId;

  console.log("当前ID为：", roleTypeId);
  if (roleTypeId == 4 || roleTypeId == null) return false;
  return true;
})

//RoleType
const roleType = computed(() => {
  return userStore.userRole?.roleName;
})

const titleParts = computed(() => {
  const path = route.path || "";
  const communityPrefix = "Neuedu智慧社区";

  if (path.startsWith("/service/mall")) {
    return { base: "Neuedu智慧商城", sub: "" };
  }

  if (path.startsWith("/service/community/news"))
    return { base: communityPrefix, sub: " - 公告" };
  if (path.startsWith("/service/community/payment"))
    return { base: communityPrefix, sub: " - 缴费" };
  if (path.startsWith("/service/community/issues"))
    return { base: communityPrefix, sub: " - 报修与投诉" };
  if (path.startsWith("/service/community/parking"))
    return { base: communityPrefix, sub: " - 停车服务" };
  if (path.startsWith("/service/community/visitors"))
    return { base: communityPrefix, sub: " - 访客管理" };
  if (path.startsWith("/wallet"))
    return { base: communityPrefix, sub: " - 我的钱包" };
  if (path.startsWith("/profile"))
    return { base: communityPrefix, sub: " - 我的" };

  return { base: communityPrefix, sub: "" };
});

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.title-slide-enter-active,
.title-slide-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.title-slide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.title-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
