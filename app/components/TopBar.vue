<template>
  <nav
    class="h-10 px-4 flex items-center justify-between bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 transition-colors z-50 relative">
    <nuxt-link to="/">
      <div class="text-sm font-bold text-[#ff5000] flex items-center gap-2">
        <Icon name="lucide:layout-grid" size="14" />
        {{ topBarTitle }}
      </div>
    </nuxt-link>

    <div class="flex items-center gap-4 text-xs font-medium">
      <button @click="toggleTheme"
        class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#ff5000] transition-all">
        <Icon v-if="colorMode.value === 'dark'" name="lucide:moon" size="14" />
        <Icon v-else name="lucide:sun" size="14" />
      </button>

      <div class="h-3 w-px bg-slate-200 dark:bg-slate-700"></div>

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

const topBarTitle = computed(() => {
  const path = route.path || "";
  if (path.startsWith("/service/mall")) {
    return "Neuedu智慧商城";
  }
  if (path.startsWith("/service/community")) {
    return "Neuedu智慧社区";
  }
  return "Neuedu智慧社区";
});

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
