<script setup>
const colorMode = useColorMode()
</script>

<template>
  <div class="min-h-screen bg-[#f7f9fa] dark:bg-[oklch(13%_0.028_261.692)] text-slate-900 dark:text-slate-200 transition-colors duration-300">
    
    <MainPageNavigator class="sticky top-0 z-50 shadow-sm" />

    <div class="max-w-[1500px] mx-auto px-4 py-6 flex items-start gap-4">
      
      <aside class="sticky top-0 shrink-0">
        <MainPageLeftSiderBar />
      </aside>

      <main class="flex-1 min-w-0">
        <NuxtPage /> 
      </main>

    </div>
  </div>
</template>