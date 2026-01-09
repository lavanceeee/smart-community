<template>
    <div class="w-full max-w-3xl">
        <InspiraCoVanishingInput v-model="inputValue" :placeholders="placeholders" :disabled="loading"
            @submit="handleSend" />
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

const placeholders = [
    "Ask me anything about your code...",
    "What can I help you with today?",
    "Need help debugging something?",
    "Ask about best practices...",
    "How can I assist you?",
]

const handleSend = () => {
    const message = inputValue.value.trim()
    if (!message || props.loading) return

    emit('send', message)
    inputValue.value = ''
}
</script>
