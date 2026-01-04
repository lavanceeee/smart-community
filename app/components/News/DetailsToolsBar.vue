<template>
    <div class="flex items-center gap-6 text-sm text-slate-500">
        <!-- Font Size Controls -->
        <div class="flex items-center gap-2">
            <span class="text-slate-400">字号:</span>
            <button @click="$emit('change-font-size', 'normal')"
                :class="currentFontSize === 'normal' ? 'text-[#1e40af] font-bold' : 'hover:text-[#1e40af] transition-colors'">
                默认
            </button>
            <button @click="$emit('change-font-size', 'large')"
                :class="currentFontSize === 'large' ? 'text-[#1e40af] font-bold' : 'hover:text-[#1e40af] transition-colors'">
                大
            </button>
            <button @click="$emit('change-font-size', 'xlarge')"
                :class="currentFontSize === 'xlarge' ? 'text-[#1e40af] font-bold' : 'hover:text-[#1e40af] transition-colors'">
                超大
            </button>
        </div>

        <span class="text-slate-200">|</span>

        <!-- Action Buttons -->
        <div class="flex items-center gap-4">
            <button @click="handlePrint" class="flex items-center gap-1 hover:text-[#1e40af] transition-colors">
                <span>打印</span>
                <Icon name="lucide:printer" size="14" />
            </button>
        </div>

        <span class="text-slate-200">|</span>

        <!-- Social Share (Mock) -->
        <div class="flex items-center gap-2 text-slate-400">
            <button
                class="hover:text-[#ff5000] transition-colors bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center">
                <Icon name="lucide:share-2" size="12" />
            </button>
            <button
                class="hover:text-green-500 transition-colors bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center">
                <Icon name="lucide:message-circle" size="12" />
            </button>
            <button
                class="hover:text-amber-500 transition-colors bg-slate-100 rounded-full w-6 h-6 flex items-center justify-center">
                <Icon name="lucide:star" size="12" />
            </button>
        </div>
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
