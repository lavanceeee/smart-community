<template>
  <div class="bg-[#FFF9F5] dark:bg-white/5 rounded-2xl p-6 flex items-start gap-5">
    
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :auto-upload="true" 
      :http-request="uploadAvatar"
    >
      <div class="relative group cursor-pointer">
        <el-avatar 
          :size="72" 
          :src="userInfo?.avatar" 
          :icon="UserFilled" 
          class="text-xl bg-white border-4 border-white dark:border-white/10 dark:bg-slate-700"
        />
        
        <div class="absolute inset-0 rounded-full bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs backdrop-blur-sm">
          <Icon name="lucide:camera" size="16" class="mb-0.5" />
          <span>更换</span>
        </div>
      </div>
    </el-upload>

    <div class="flex-1 flex flex-col gap-3">
      <h2 class="text-2xl font-medium text-slate-900 dark:text-white leading-none mt-1">
        {{ userInfo?.nickname || userInfo?.username || '未登录用户' }}
      </h2>

      <div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span>tb{{ userInfo?.id || '000000' }}</span>
        <span class="w-px h-3 bg-slate-300"></span>
        <NuxtLink to="/user/address" class="hover:text-[#ff5000] transition-colors flex items-center gap-0.5">
          收货地址
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue' // 引入默认头像图标

// 1. 从 Store 获取用户资料
const userStore = useUserStore()
// 使用 storeToRefs 保持响应性，或者直接通过 userStore.userInfo 访问
const userInfo = computed(() => userStore.userInfo)

// 2. 模拟头像上传逻辑
const uploadAvatar = async (options: any) => {
  // 这里写实际的上传 API 调用
  const file = options.file
  console.log('正在上传头像:', file.name)
  
  // 模拟上传成功回显
  // const res = await uploadApi(file)
  // userStore.updateUserInfo({ avatar: res.url })
  
  ElMessage.success('头像上传功能待接入后端')
}
</script>

<style scoped>
:deep(.el-upload) {
  display: block;
}
</style>