<template>
    <div
        class="h-screen flex flex-col overflow-hidden bg-white dark:bg-black text-slate-900 dark:text-slate-200 transition-colors duration-300">
        <TopBar class="shrink-0" />
        <div class="flex-1 relative">
            <slot />
        </div>
    </div>
</template>
