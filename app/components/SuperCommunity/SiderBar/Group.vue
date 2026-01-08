<template>
    <div class="mb-2">
        <button 
            @click="toggle"
            class="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors"
            :class="collapsed && 'justify-center'"
            :title="collapsed ? title : ''"
        >
            <Transition name="fade">
                <span v-if="!collapsed">{{ title }}</span>
            </Transition>
            
            <!-- Collapsed: Show icon, Expanded: Show chevron -->
            <template v-if="collapsed">
                <Icon :name="icon || 'lucide:folder'" size="18" class="text-slate-400" />
            </template>
            <template v-else>
                <Icon name="lucide:chevron-down" size="14" class="transition-transform duration-200"
                    :class="{ 'rotate-180': isOpen }" />
            </template>
        </button>
        
        <div v-show="isOpen && !collapsed" class="space-y-1 transition-all duration-300 ease-in-out">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    icon: String,
    collapsed: {
        type: Boolean,
        default: false
    },
    defaultOpen: {
        type: Boolean,
        default: true
    }
})

const isOpen = ref(props.defaultOpen)

const toggle = () => {
    if (!props.collapsed) {
        isOpen.value = !isOpen.value
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
