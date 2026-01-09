<template>
    <div class="h-[calc(100vh-3rem)] relative overflow-clip">
        <!-- Stars Background (Dark Mode Only) -->
        <InspiraCoSrartsbackground v-if="$colorMode.value === 'dark'" :factor="0.05" :speed="50" star-color="#fff"
            class="h-full">
            <div class="h-full flex flex-col relative">
                <AgentHomepageSiderBarCo />
                <AgentHomepageContentCo :messages="messages" :agent-status="agentStatus" class="flex-1 z-10" />
                <div
                    class="w-full flex justify-center px-4 pb-12 pt-2 z-10 shrink-0 bg-gradient-to-t to-transparent from-[#131314] via-[#131314]">
                    <AgentHomepageInputCo :loading="isProcessing" @send="handleSendMessage" />
                </div>
            </div>
        </InspiraCoSrartsbackground>

        <!-- Plain White Background (Light Mode) -->
        <div v-else class="h-full flex flex-col relative bg-white">
            <AgentHomepageSiderBarCo />
            <AgentHomepageContentCo :messages="messages" :agent-status="agentStatus" class="flex-1 z-10" />
            <div
                class="w-full flex justify-center px-4 pb-12 pt-2 z-10 shrink-0 bg-gradient-to-t to-transparent from-white via-white">
                <AgentHomepageInputCo :loading="isProcessing" @send="handleSendMessage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAgent } from '~/composables/agent/useAgent'
import type { Message } from '~/components/Agent/Homepage/ContentCo.vue'

definePageMeta({
    layout: 'agent'
})


const colorMode = useColorMode()

// 默认设置为暗色模式
onMounted(() => {
    if (colorMode.preference !== 'dark') {
        colorMode.preference = 'dark'
    }
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
