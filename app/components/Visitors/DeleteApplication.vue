<template>
    <el-popconfirm title="确定要撤销这条访客申请吗？" confirm-button-text="确定" cancel-button-text="取消" @confirm="handleConfirm"
        width="220">
        <template #reference>
            <button
                class="bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/20 dark:hover:bg-red-900/40 dark:text-red-400 px-3 py-1 rounded text-xs transition-colors flex items-center gap-1">
                <Icon name="lucide:trash-2" size="14" />
                撤销申请
            </button>
        </template>
    </el-popconfirm>
</template>

<script setup lang="ts">
const props = defineProps<{
    registerId: number | string
}>()

const emit = defineEmits(['delete'])

const handleConfirm = () => {
    emit('delete', props.registerId)
}
</script>
