<template>
    <div class="flex-1 w-full max-w-3xl mx-auto overflow-y-auto p-4 space-y-6 scroll-smooth" ref="containerRef">
        <div v-for="(msg, index) in messages" :key="index" class="flex flex-col gap-2"
            :class="[msg.role === 'user' ? 'items-end' : 'items-start']">

            <!-- Avatar & Name -->
            <div class="flex items-center gap-2" :class="[msg.role === 'user' ? 'flex-row-reverse' : 'flex-row']">
                <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-colors"
                    :class="[msg.role === 'user' ? 'bg-blue-100 border-blue-200 dark:bg-blue-900/30 dark:border-blue-800' : 'bg-emerald-100 border-emerald-200 dark:bg-emerald-900/30 dark:border-emerald-800']">
                    <Icon v-if="msg.role === 'user'" name="lucide:user" size="16"
                        class="text-blue-600 dark:text-blue-400" />
                    <Icon v-else name="lucide:bot" size="16" class="text-emerald-600 dark:text-emerald-400" />
                </div>
                <!-- <span class="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {{ msg.role === 'user' ? 'You' : 'Agent' }}
                </span> -->

                <!-- Agent Status Indicator -->
                <div v-if="msg.role === 'assistant' && msg.isStreaming && agentStatus"
                    class="flex items-center gap-2 ml-2 transition-all animate-pulse">
                    <Icon name="lucide:loader-2" size="14" class="animate-spin text-emerald-500" />
                    <span class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{{ agentStatus }}</span>
                </div>
            </div>



            <!-- Message Bubble -->
            <div class="max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed whitespace-pre-wrap shadow-sm transition-all"
                :class="[
                    msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-sm'
                        : 'bg-white dark:bg-[#1E1F20] text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-tl-sm'
                ]">
                <div v-if="msg.role === 'assistant'" v-html="formatMessage(msg.content)"></div>
                <div v-else>{{ msg.content }}</div>

                <!-- 光标动画 -->
                <span v-if="msg.role === 'assistant' && msg.isStreaming && !agentStatus"
                    class="inline-block w-1.5 h-4 ml-0.5 align-middle bg-emerald-500 animate-pulse rounded-full"></span>
            </div>


        </div>

        <!-- Empty State -->
        <div v-if="messages.length === 0"
            class="h-full flex flex-col items-center justify-center text-gray-400 dark:text-gray-600 space-y-6 pb-20">
            <div
                class="w-20 h-20 rounded-3xl bg-gray-50 dark:bg-[#1E1F20] flex items-center justify-center border border-gray-100 dark:border-gray-800">
                <Icon name="lucide:sparkles" size="40" class="text-gray-300 dark:text-gray-500" />
            </div>
            <p class="font-medium text-lg">Ready to help, ask me anything!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface Message {
    role: 'user' | 'assistant'
    content: string
    isStreaming?: boolean
}

const props = defineProps<{
    messages: Message[],
    agentStatus?: string // New prop
}>()

const containerRef = ref<HTMLElement | null>(null)

// Simple formatter
const formatMessage = (content: string) => {
    if (!content) return ''

    // 1. Basic HTML Escape (prevent injection)
    let safe = content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    // 2. Bold: **text** -> <strong>text</strong>
    safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // 3. List: - item -> • item (Visual improvement)
    safe = safe.replace(/^- /gm, '• ');

    return safe;
}

// Auto scroll to bottom
const scrollToBottom = () => {
    if (containerRef.value) {
        containerRef.value.scrollTop = containerRef.value.scrollHeight
    }
}

// Watch deep to catch content changes during streaming
watch(() => props.messages, () => {
    nextTick(scrollToBottom)
}, { deep: true })

watch(() => props.agentStatus, () => {
    nextTick(scrollToBottom)
})

onMounted(scrollToBottom)
</script>

<style scoped>
/* Custom Scrollbar for Webkit */
div::-webkit-scrollbar {
    width: 6px;
}

div::-webkit-scrollbar-track {
    background: transparent;
}

div::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.2);
    border-radius: 3px;
}

div::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.4);
}

/* Basic Markdown Styling mimics */
:deep(strong) {
    font-weight: 600;
}

:deep(ul) {
    list-style-type: disc;
    padding-left: 1.5em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

:deep(li) {
    margin-bottom: 0.25em;
}
</style>
