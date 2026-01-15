<script setup lang="ts">
const colorMode = useColorMode();

useHead({
    htmlAttrs: {
        class: computed(() => (colorMode.value === "dark" ? "dark" : "")),
    },
});
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
