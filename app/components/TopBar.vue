<template>
  <nav
    class="h-10 px-4 flex items-center justify-between bg-white dark:bg-[oklch(13%_0.028_261.692)] border-b border-slate-100 dark:border-slate-800 transition-colors">
    <nuxt-link to="/">
      <div class="text-sm font-bold text-[#ff5000]">
        {{ topBarTitle }}
      </div>
    </nuxt-link>

    <div class="flex items-center gap-4 text-xs">
      <button @click="
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        " class="text-slate-500 hover:text-[#ff5000] cursor-pointer">
        {{ colorMode.value === "dark" ? "显示浅色" : "显示深色" }}
      </button>

      <template v-if="userStore.isLoggedIn">
        <NuxtLink to="/profile" class="text-slate-500 hover:text-[#ff5000] cursor-pointer">
          您好，{{ userStore.displayName }}
        </NuxtLink>
      </template>

      <NuxtLink v-else to="/login" class="text-slate-500 hover:text-[#ff5000] cursor-pointer">
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
</script>
