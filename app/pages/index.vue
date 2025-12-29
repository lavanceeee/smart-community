<script setup>
const colorMode = useColorMode()
</script>

<template>
  <div class="p-10 min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <h1 class="text-2xl">当前模式: {{ colorMode.value }}</h1>
    <select v-model="colorMode.preference" class="mt-4 border p-2 text-black">
      <option value="system">系统</option>
      <option value="light">亮色</option>
      <option value="dark">暗黑</option>
    </select>
  </div>
</template>