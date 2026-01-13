<template>
    <div class="h-[calc(100vh-3rem)] relative overflow-clip">
        <!-- Stars Background (Dark Mode Only) -->
        <InspiraCoSrartsbackground v-if="$colorMode.value === 'dark'" :factor="0.05" :speed="50" star-color="#fff"
            class="h-full">
            <div class="h-full flex flex-col relative">
                <AgentSiderBarSiderBarCo />
                <AgentHomepageContentCo :messages="messages" :agent-status="agentStatus" :tool-calls="toolCalls" class="flex-1 z-10" />
                <div
                    class="w-full flex justify-center px-4 pb-12 pt-2 z-10 shrink-0 bg-gradient-to-t to-transparent from-[#131314] via-[#131314]">
                    <AgentHomepageInputCo :loading="isProcessing" @send="handleSendMessage" />
                </div>
            </div>
        </InspiraCoSrartsbackground>

        <!-- Plain White Background (Light Mode) -->
        <div v-else class="h-full flex flex-col relative bg-white">
            <AgentSiderBarSiderBarCo />
            <AgentHomepageContentCo :messages="messages" :agent-status="agentStatus" :tool-calls="toolCalls" class="flex-1 z-10" />
            <div
                class="w-full flex justify-center px-4 pb-12 pt-2 z-10 shrink-0 bg-gradient-to-t to-transparent from-white via-white">
                <AgentHomepageInputCo :loading="isProcessing" @send="handleSendMessage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAgent } from '~/composables/agent/useAgent'
import { useSession } from '~/composables/agent/useSession'
import type { Message } from '~/components/Agent/Homepage/ContentCo.vue'
import { useAgentStore } from '~/stores/agent'
import AgentSiderBarSiderBarCo from '~/components/Agent/SiderBar/SiderBarCo.vue'
definePageMeta({
    layout: 'agent'
})

const route = useRoute()
const sessionId = route.params.sessionId as string
const colorMode = useColorMode()
const agentStore = useAgentStore()

const { sendStreamMessage, streamingMessage, isStreaming, loading, closeStream, agentStatus, toolCalls } = useAgent()
const { fetchSessionMessages } = useSession()

const messages = ref<Message[]>([])
const isProcessing = computed(() => loading.value || isStreaming.value)

// 默认设置为暗色模式
onMounted(async () => {
    agentStore.setSession(sessionId)

    if (colorMode.preference !== 'dark') {
        colorMode.preference = 'dark'
    }

    // Check for initial message from index page
    const initialMessage = route.query.initialMessage as string
    if (initialMessage) {
        // Check if stream is already active (from index.vue using persisted state)
        if (isStreaming.value) {
            // Stream active from index.vue, attach to it
            messages.value.push({ role: 'user', content: initialMessage })
            messages.value.push({
                role: 'assistant',
                content: streamingMessage.value || '',
                isStreaming: true
            })
        } else {
            // Not streaming, start fresh
            handleSendMessage(initialMessage)
        }

        // Remove query param to clean up URL
        const router = useRouter()
        // Use replace to avoid browser history pollution
        router.replace({ path: route.path, query: {} })
    } else if (!isStreaming.value) {
        // Fetch history if not streaming and not new message
        try {
            const history = await fetchSessionMessages(sessionId)
            if (history && Array.isArray(history)) {
                messages.value = history.map((msg: any) => ({
                    role: (msg.role === 'user' || msg.sender_type === 'user') ? 'user' : 'assistant',
                    content: msg.content
                }))
            }
        } catch (e) {
            console.error(e)
        }
    }
})


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

    // Start streaming within this session
    sendStreamMessage(content, sessionId)
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

// Clean up on unmount - Commented out for persistent stream across navigation
/* 
onUnmounted(() => {
    closeStream()
}) 
*/
</script>