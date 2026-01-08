<script setup>
const colorMode = useColorMode()
</script>

<template>
  <div
    class="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 transition-colors duration-300">


    <div class="max-w-[1500px] mx-auto px-4 py-4 flex items-start gap-4">

      <aside class="sticky top-[56px] shrink-0 w-60">
        <MainPageLeftSiderBar />
      </aside>

      <main class="flex-1 min-w-0 flex flex-col gap-6">

        <MainPageCommunityNews />
        <ForumMainPageLayout />

        <!-- <NuxtPage /> -->

      </main>

    </div>
  </div>
</template>