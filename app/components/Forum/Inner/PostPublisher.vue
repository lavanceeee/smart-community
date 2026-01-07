<template>
    <div class="bg-white dark:bg-slate-900 rounded p-5 border border-slate-100 dark:border-slate-800 shadow-sm">
        <div class="flex gap-4">
            <img :src="userAvatar" class="w-10 h-10 rounded-full object-cover bg-slate-100" />
            <div class="flex-1">
                <div
                    class="w-full bg-slate-50 dark:bg-slate-800/50 rounded p-3 mb-3 focus-within:ring-2 ring-orange-100 dark:ring-orange-900/20 transition-all">
                    <textarea v-model="content" placeholder="分享此刻的想法..."
                        class="w-full bg-transparent border-none outline-none resize-none text-sm min-h-[60px] text-slate-700 dark:text-slate-200 placeholder:text-slate-400"></textarea>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <button
                            class="text-slate-400 hover:text-[#ff5000] transition-colors p-1 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10">
                            <Icon name="lucide:hash" size="18" />
                        </button>
                        <button
                            class="text-slate-400 hover:text-[#ff5000] transition-colors p-1 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10">
                            <Icon name="lucide:smile" size="18" />
                        </button>
                        <button
                            class="text-slate-400 hover:text-[#ff5000] transition-colors p-1 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10">
                            <Icon name="lucide:image" size="18" />
                        </button>
                        <button
                            class="text-slate-400 hover:text-[#ff5000] transition-colors p-1 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/10">
                            <Icon name="lucide:video" size="18" />
                        </button>
                    </div>

                    <div class="flex items-center gap-3">
                        <button @click="handleSubmit" :disabled="!content.trim() || creating"
                            class="bg-[#ff5000] hover:bg-[#ff6a00] disabled:bg-slate-200 disabled:text-slate-400 text-white px-5 py-1.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-orange-500/20 disabled:shadow-none flex items-center gap-2">
                            <span v-if="creating"
                                class="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            发想法
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePost } from '~/composables/form/usePost';

const props = defineProps<{
    sectionId: string | number;
}>();

const emit = defineEmits(['success']);

const userStore = useUserStore();
const { creating, createPost } = usePost();
const content = ref('');

const userAvatar = computed(() => userStore.userInfo?.avatar);

const handleSubmit = async () => {
    if (!content.value.trim()) return;

    try {
        await createPost({
            sectionId: props.sectionId,
            title: content.value.slice(0, 20), // Use first 20 chars as title for "Quick Post"
            content: content.value,
        });
        content.value = '';
        ElMessage.success('发布成功');
        emit('success');
    } catch (e: any) {
        ElMessage.error(e.message || '发布失败');
    }
};
</script>
