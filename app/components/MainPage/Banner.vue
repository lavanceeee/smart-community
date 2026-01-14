<template>
    <div
        class="w-full rounded border border-blue-200/50 dark:border-blue-500/20 bg-gradient-to-br from-blue-50/80 to-white dark:from-slate-800/50 dark:to-slate-900 p-3 shadow-sm">
        <div class="flex gap-3">
            <!-- 左侧轮播区域 -->
            <div class="flex-1 min-w-0 h-[280px] relative rounded-xl overflow-hidden">
                <!-- 当前轮播项 -->
                <img :src="bannerList[currentIndex]?.image"
                    class="w-full h-full object-cover transition-opacity duration-500"
                    :alt="bannerList[currentIndex]?.title" />

                <!-- 遮罩层 -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-600/70 to-transparent"></div>

                <!-- 文字内容 -->
                <div class="absolute inset-0 flex flex-col justify-center px-8">
                    <h2 class="text-white text-2xl font-bold leading-tight mb-3 drop-shadow-lg whitespace-pre-line">
                        {{ bannerList[currentIndex]?.title }}
                    </h2>
                    <button
                        class="w-fit px-5 py-1.5 rounded-full border-2 border-white/80 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                        {{ bannerList[currentIndex]?.buttonText || '重要提示' }}
                    </button>
                </div>

                <!-- 左右箭头 -->
                <button @click="prevSlide"
                    class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-colors">
                    <Icon name="lucide:chevron-left" size="20" />
                </button>
                <button @click="nextSlide"
                    class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-colors">
                    <Icon name="lucide:chevron-right" size="20" />
                </button>
            </div>
        </div>

        <!-- 轮播指示器 -->
        <div class="flex items-center justify-center gap-2 mt-3">
            <button v-for="(_, index) in bannerList" :key="index" @click="goToSlide(index)" class="group">
                <span class="block h-1.5 rounded-full transition-all duration-300" :class="index === currentIndex
                    ? 'w-8 bg-blue-500'
                    : 'w-4 bg-slate-300 dark:bg-slate-600 group-hover:bg-blue-300'">
                </span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface BannerItem {
    id: number
    title: string
    image: string
    buttonText?: string
    link?: string
}

const bannerList = ref<BannerItem[]>([
    {
        id: 1,
        title: '关于疫情\n封控的通知',
        image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80',
        buttonText: '重要提示'
    },
    {
        id: 2,
        title: '智慧社区\n服务升级',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
        buttonText: '了解详情'
    },
    {
        id: 3,
        title: '社区活动\n精彩回顾',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
        buttonText: '查看更多'
    }
])

const currentIndex = ref(0)
let autoPlayTimer: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % bannerList.value.length
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + bannerList.value.length) % bannerList.value.length
}

const goToSlide = (index: number) => {
    currentIndex.value = index
}

const startAutoPlay = () => {
    stopAutoPlay()
    autoPlayTimer = setInterval(() => {
        nextSlide()
    }, 5000)
}

const stopAutoPlay = () => {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer)
        autoPlayTimer = null
    }
}

onMounted(() => {
    startAutoPlay()
})

onUnmounted(() => {
    stopAutoPlay()
})
</script>
