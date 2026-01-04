<template>
    <div class="max-w-[1500px] mx-auto px-4 py-6 flex items-start gap-4 text-slate-900 dark:text-slate-100">
        <!-- Reuse Sidebar -->
        <ProfileSiderBar class="shrink-0" />

        <div class="flex-1 min-w-0 flex flex-col gap-4">
            <div
                class="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                <h2 class="text-xl font-bold mb-6 flex items-center gap-2">
                    <div class="w-1 h-6 bg-[#ff5000] rounded-full"></div>
                    编辑个人信息
                </h2>

                <!-- Native Form Implementation -->
                <form @submit.prevent="handleSubmit" class="max-w-2xl space-y-6">

                    <!-- Username -->
                    <div class="space-y-1.5">
                        <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">用户名</label>
                        <input v-model="form.userName" type="text" required minlength="2" maxlength="20"
                            class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#ff5000]/20 focus:border-[#ff5000] outline-none transition-all placeholder:text-slate-400"
                            placeholder="请输入用户名" />
                    </div>

                    <!-- Phone & Email Grid -->
                    <div class="grid grid-cols-2 gap-6">
                        <div class="space-y-1.5">
                            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">手机号</label>
                            <div class="relative">
                                <input v-model="form.phone" readonly disabled
                                    class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-500 cursor-not-allowed outline-none" />
                                <Icon name="lucide:lock" size="14"
                                    class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">邮箱</label>
                            <input v-model="form.emial" type="email"
                                class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#ff5000]/20 focus:border-[#ff5000] outline-none transition-all placeholder:text-slate-400"
                                placeholder="请输入邮箱地址" />
                        </div>
                    </div>

                    <!-- Gender & Age Grid -->
                    <div class="grid grid-cols-2 gap-6">
                        <div class="space-y-1.5">
                            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">性别</label>
                            <div class="flex gap-4 pt-1">
                                <label class="flex items-center gap-2 cursor-pointer group">
                                    <input type="radio" v-model="form.gender" value="1"
                                        class="accent-[#ff5000] w-4 h-4 cursor-pointer" />
                                    <span class="text-sm group-hover:text-[#ff5000] transition-colors">男</span>
                                </label>
                                <label class="flex items-center gap-2 cursor-pointer group">
                                    <input type="radio" v-model="form.gender" value="0"
                                        class="accent-[#ff5000] w-4 h-4 cursor-pointer" />
                                    <span class="text-sm group-hover:text-[#ff5000] transition-colors">女</span>
                                </label>
                                <label class="flex items-center gap-2 cursor-pointer group">
                                    <input type="radio" v-model="form.gender" value="2"
                                        class="accent-[#ff5000] w-4 h-4 cursor-pointer" />
                                    <span class="text-sm group-hover:text-[#ff5000] transition-colors">保密</span>
                                </label>
                            </div>
                        </div>

                        <div class="space-y-1.5">
                            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300">年龄</label>
                            <input v-model.number="form.age" type="number" min="1" max="120"
                                class="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-[#ff5000]/20 focus:border-[#ff5000] outline-none transition-all" />
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="pt-6 flex gap-4">
                        <button type="submit" :disabled="loading"
                            class="px-8 h-10 rounded-full bg-[#ff5000] text-white hover:bg-[#ff5000]/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all font-medium text-sm flex items-center gap-2">
                            <Icon v-if="loading" name="lucide:loader-2" class="animate-spin" />
                            <span>保存修改</span>
                        </button>

                        <button type="button" @click="resetForm"
                            class="px-8 h-10 rounded-full border border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800 transition-all text-sm text-slate-600 dark:text-slate-300">
                            重置
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { updateUserInfoApi } from '@/utils/api'

const userStore = useUserStore()
const loading = ref(false)

// Form Model
const form = reactive({
    userName: '',
    phone: '',
    emial: '',
    gender: '1',
    age: 18,
})

// Initialize form from store
onMounted(() => {
    resetForm()
})

const handleSubmit = async () => {
    if (!form.userName) {
        alert('请输入用户名')
        return
    }

    loading.value = true
    try {
        const payload = {
            ...userStore.userInfo,
            ...form,
        }

        const res = await updateUserInfoApi(payload) as any

        if (res.code === 200) {
            // Simple success feedback without Element Plus Dependency
            alert('个人信息更新成功')
            if (userStore.userInfo) {
                Object.assign(userStore.userInfo, form)
            }
        } else {
            alert(res.message || '更新失败')
        }

    } catch (error) {
        console.error(error)
        alert('网络请求失败')
    } finally {
        loading.value = false
    }
}

const resetForm = () => {
    if (userStore.userInfo) {
        const { userName, phone, emial, gender, age } = userStore.userInfo
        form.userName = userName || ''
        form.phone = phone || ''
        form.emial = emial || ''
        form.gender = String(gender) || '1'
        form.age = age || 18
    }
}
</script>