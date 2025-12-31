<template>
  <div class="bg-[#FFF9F5] dark:bg-white/5 rounded-2xl p-6 flex items-start gap-5">

    <el-upload class="avatar-uploader" :show-file-list="false" :auto-upload="true" :http-request="uploadAvatar">
      <div class="relative group cursor-pointer">
        <el-avatar :size="72" :src="userInfo?.avatar"
          class="text-xl bg-white border-4 border-white dark:border-white/10 dark:bg-slate-700">
          <Icon name="lucide:user" size="32" class="text-slate-400" />
        </el-avatar>

        <div
          class="absolute inset-0 rounded-full bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs backdrop-blur-sm">
          <Icon name="lucide:camera" size="16" class="mb-0.5" />
          <span>更换</span>
        </div>
      </div>
    </el-upload>

    <div class="flex-1 flex flex-col gap-3">
      <h2 class="text-2xl font-medium text-slate-900 dark:text-white leading-none mt-1">
        {{ userInfo?.userName || "未登录用户" }}
      </h2>

      <div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span>sc{{ userInfo?.userId || "000000" }}</span>
        <span class="w-px h-3 bg-slate-300"></span>
        <NuxtLink to="/user/address" class="hover:text-[#ff5000] transition-colors flex items-center gap-0.5">
          收货地址
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

import { uploadAvatarApi } from '@/utils/api'



const uploadAvatar = async (options: any) => {
  const file = options.file
  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await uploadAvatarApi(formData) as any

    if (res.code == 200) {
      const newAvatarUrl = res.data.url;

      if (userStore.userInfo) {
        userStore.userInfo.avatar = newAvatarUrl;
      }

      ElMessage.success('头像上传成功');

    } else {
      ElMessage.error(res.message)
    }
  } catch (error) {
    ElMessage.error('头像上传失败');
  }
}
</script>

<style scoped>
:deep(.el-upload) {
  display: block;
}
</style>