<template>
    <div class="mb-2">
        <button @click="toggle"
            class="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors">
            <span>{{ title }}</span>
            <Icon name="lucide:chevron-down" size="14" class="transition-transform duration-200"
                :class="{ 'rotate-180': isOpen }" />
        </button>
        <div v-show="isOpen" class="space-y-1 transition-all duration-300 ease-in-out">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    defaultOpen: {
        type: Boolean,
        default: true
    }
});

const isOpen = ref(props.defaultOpen);

const toggle = () => {
    isOpen.value = !isOpen.value;
};
</script>
