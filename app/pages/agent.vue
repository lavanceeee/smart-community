<template>
    <div
        class="h-[calc(100vh-2.5rem)] flex flex-col bg-white dark:bg-[#131314] transition-colors relative overflow-hidden">

        <!-- Content Area -->
        <AgentHomepageContentCo :messages="messages" :agent-status="agentStatus" class="flex-1" />

        <!-- Input Area -->
        <div
            class="w-full flex justify-center px-4 pb-8 pt-4 bg-gradient-to-t from-white via-white to-transparent dark:from-[#131314] dark:via-[#131314] z-10 shrink-0">
            <AgentHomepageInputCo :loading="isProcessing" @send="handleSendMessage" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAgent } from '~/composables/agent/useAgent'
import type { Message } from '~/components/Agent/Homepage/ContentCo.vue'

definePageMeta({
    layout: 'agent'
})

const { sendStreamMessage, streamingMessage, isStreaming, loading, closeStream, agentStatus } = useAgent()

const messages = ref<Message[]>([])

const isProcessing = computed(() => loading.value || isStreaming.value)

// Handle sending message
const handleSendMessage = (content: string) => {
    // Add user message
    messages.value.push({
        role: 'user',
        content: content
    })

    // Add placeholder for AI response
    messages.value.push({
        role: 'assistant',
        content: '',
        isStreaming: true
    })

    // Start streaming
    sendStreamMessage(content)
}

// Watch streaming content update
watch(streamingMessage, (newContent) => {
    if (messages.value.length > 0) {
        const lastMsg = messages.value[messages.value.length - 1]
        if (lastMsg && lastMsg.role === 'assistant') {
            lastMsg.content = newContent
        }
    }
})

// Watch streaming status to turn off loading state in UI
watch(isStreaming, (streaming) => {
    if (!streaming && messages.value.length > 0) {
        const lastMsg = messages.value[messages.value.length - 1]
        if (lastMsg && lastMsg.role === 'assistant') {
            lastMsg.isStreaming = false
        }
    }
})

// Clean up on unmount
onUnmounted(() => {
    closeStream()
})
</script>
