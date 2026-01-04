<template>
    <div class="min-h-screen bg-[#f5f7fa] dark:bg-slate-900 pb-12">
        <!-- Header -->
        <div class="pt-8 pb-4 mb-6">
            <div class="max-w-[1000px] mx-auto px-4 flex items-center justify-between">
                <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">车位管理</h1>
            </div>
        </div>

        <div class="max-w-[1000px] mx-auto px-4">
            <AllParking />
        </div>
    </div>
</template>

<script setup lang="ts">
import AllParking from '~/components/Parking/AllParking.vue'

useHead({
    title: '车位管理 - 智慧社区'
})
</script>
