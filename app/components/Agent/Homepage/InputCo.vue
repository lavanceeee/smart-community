<template>
    <div class="w-full max-w-3xl relative group">
        <div
            class="w-full min-h-[56px] bg-gray-100 dark:bg-[#1E1F20] rounded-[28px] p-4 flex flex-col gap-4 transition-all duration-200 border border-transparent focus-within:bg-gray-200 dark:focus-within:bg-[#28292c] hover:bg-gray-200 dark:hover:bg-[#28292c]">
            <!-- Input Area -->
            <textarea v-model="inputValue" rows="1" placeholder="Ask Agent..."
                class="w-full bg-transparent text-slate-800 dark:text-slate-200 text-lg placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none resize-none overflow-hidden font-normal py-1 px-1 h-auto min-h-[40px] leading-relaxed"
                @input="autoResize" @keydown.enter.prevent="handleSend"></textarea>

            <!-- Bottom Toolbar -->
            <div class="flex items-center justify-end px-1">
                <div class="flex items-center gap-4">
                    <button @click="handleSend" :disabled="loading || !hasText"
                        class="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-95 bg-white dark:bg-[#131314] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm dark:shadow-none">
                        <Icon v-if="loading" name="lucide:loader-2" size="20"
                            class="animate-spin text-slate-900 dark:text-white" />
                        <template v-else>
                            <Icon name="lucide:arrow-up" size="20" class="text-slate-900 dark:text-white" />
                        </template>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    loading?: boolean
}>()

const emit = defineEmits<{
    (e: 'send', message: string): void
}>()

const inputValue = ref('')
const hasText = computed(() => inputValue.value.trim().length > 0)

const autoResize = (event: Event) => {
    const textarea = event.target as HTMLTextAreaElement
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
}

const handleSend = () => {
    if (!hasText.value || props.loading) return

    emit('send', inputValue.value)
    inputValue.value = ''

    // Reset height
    nextTick(() => {
        const textarea = document.querySelector('textarea')
        if (textarea) {
            textarea.style.height = 'auto'
        }
    })
}
</script>

<style scoped>
/* Hidden scrollbar */
textarea::-webkit-scrollbar {
    display: none;
}
</style>
