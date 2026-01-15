<template>
    <div class="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
        <!-- Font Size Controls -->
        <div class="flex items-center gap-2">
            <span class="text-slate-400 dark:text-slate-500">字号:</span>
            <button @click="$emit('change-font-size', 'normal')"
                :class="currentFontSize === 'normal' ? 'text-[#1e40af] dark:text-blue-400 font-bold' : 'hover:text-[#1e40af] dark:hover:text-blue-400 transition-colors'">
                默认
            </button>
            <button @click="$emit('change-font-size', 'large')"
                :class="currentFontSize === 'large' ? 'text-[#1e40af] dark:text-blue-400 font-bold' : 'hover:text-[#1e40af] dark:hover:text-blue-400 transition-colors'">
                大
            </button>
            <button @click="$emit('change-font-size', 'xlarge')"
                :class="currentFontSize === 'xlarge' ? 'text-[#1e40af] dark:text-blue-400 font-bold' : 'hover:text-[#1e40af] dark:hover:text-blue-400 transition-colors'">
                超大
            </button>
        </div>

        <span class="text-slate-200 dark:text-slate-700">|</span>

        <!-- Action Buttons -->
        <div class="flex items-center gap-4">
            <button @click="handlePrint"
                class="flex items-center gap-1 hover:text-[#1e40af] dark:hover:text-blue-400 transition-colors">
                <span>打印</span>
                <Icon name="lucide:printer" size="14" />
            </button>
        </div>

        <span class="text-slate-200 dark:text-slate-700">|</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    currentFontSize: 'normal' | 'large' | 'xlarge'
}>()

defineEmits(['change-font-size'])

const handlePrint = () => {
    window.print()
}
</script>
