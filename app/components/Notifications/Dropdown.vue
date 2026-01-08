<template>
    <el-popover
        :visible="visible"
        placement="bottom-end"
        :width="420"
        trigger="click"
        popper-class="notification-popover"
        @update:visible="handleVisibleChange"
    >
        <template #reference>
            <button
                class="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-[#ff5000] transition-colors"
            >
                <Icon name="lucide:bell" size="20" />
                <!-- 未读通知徽章 -->
                <span
                    v-if="unreadCount > 0"
                    class="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full ring-2 ring-white dark:ring-slate-900"
                >
                    {{ unreadCount > 99 ? '99+' : unreadCount }}
                </span>
            </button>
        </template>

        <!-- 通知内容 -->
        <div class="notification-content">
            <!-- 头部 -->
            <div class="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                <div class="flex items-center gap-2">
                    <Icon name="lucide:bell" size="18" class="text-[#ff5000]" />
                    <h3 class="text-base font-bold text-slate-800 dark:text-white">
                        通知中心
                    </h3>
                    <span v-if="unreadCount > 0" class="text-xs text-slate-500 dark:text-slate-400">
                        ({{ unreadCount }} 条未读)
                    </span>
                </div>
                <button
                    v-if="unreadCount > 0"
                    @click="handleMarkAllRead"
                    class="text-xs text-[#ff5000] hover:text-[#ff7000] font-medium transition-colors"
                >
                    全部已读
                </button>
            </div>

            <!-- 通知列表 -->
            <div class="notification-list max-h-[480px] overflow-y-auto">
                <template v-if="loading">
                    <div class="flex items-center justify-center py-12">
                        <Icon name="lucide:loader-2" size="32" class="animate-spin text-[#ff5000]" />
                    </div>
                </template>

                <template v-else-if="notifications.length === 0">
                    <div class="flex flex-col items-center justify-center py-12 text-slate-400 dark:text-slate-500">
                        <Icon name="lucide:bell-off" size="48" class="mb-3 opacity-30" />
                        <p class="text-sm">暂无通知</p>
                    </div>
                </template>

                <template v-else>
                    <div
                        v-for="notification in notifications"
                        :key="notification.notificationId"
                        @click="handleNotificationClick(notification)"
                        class="notification-item px-4 py-3 border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                        :class="{ 'unread': notification.isRead === 0 }"
                    >
                        <div class="flex items-start gap-3">
                            <!-- 图标 -->
                            <div 
                                class="w-10 h-10 shrink-0 flex items-center justify-center rounded-full"
                                :class="getTypeColorClass(notification.type)"
                            >
                                <Icon :name="getTypeIcon(notification.type)" size="20" />
                            </div>

                            <!-- 内容 -->
                            <div class="flex-1 min-w-0">
                                <div class="flex items-start justify-between gap-2 mb-1">
                                    <h4 class="text-sm font-semibold text-slate-800 dark:text-white truncate">
                                        {{ notification.title }}
                                    </h4>
                                    <span
                                        v-if="notification.isRead === 0"
                                        class="w-2 h-2 shrink-0 bg-red-500 rounded-full mt-1.5"
                                    ></span>
                                </div>
                                <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-2">
                                    {{ notification.content }}
                                </p>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs text-slate-400 dark:text-slate-500">
                                        {{ formatTime(notification.createTime) }}
                                    </span>
                                    <span 
                                        class="text-xs px-2 py-0.5 rounded-full"
                                        :class="getTypeBadgeClass(notification.type)"
                                    >
                                        {{ getTypeText(notification.type) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <!-- 底部 -->
            <div 
                v-if="notifications.length > 0"
                class="px-4 py-3 border-t border-slate-100 dark:border-slate-700 text-center"
            >
                <button
                    @click="handleViewAll"
                    class="text-sm text-[#ff5000] hover:text-[#ff7000] font-medium transition-colors"
                >
                    查看全部通知
                </button>
            </div>
        </div>
    </el-popover>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNotifications, NotificationTypeText, NotificationTypeIcon, NotificationTypeColor, type Notification } from '~/composables/useNotifications'
import { useRouter } from 'vue-router'

const router = useRouter()
const visible = ref(false)

const {
    notifications,
    loading,
    unreadCount,
    fetchNotifications,
    markAsRead,
    markAllAsRead
} = useNotifications()

// 组件挂载时获取通知
onMounted(() => {
    fetchNotifications()
})

// 处理弹窗显示状态变化
const handleVisibleChange = (val: boolean) => {
    visible.value = val
    if (val) {
        // 打开时刷新通知列表
        fetchNotifications()
    }
}

// 处理通知点击
const handleNotificationClick = async (notification: Notification) => {
    // 标记为已读
    if (notification.isRead === 0) {
        await markAsRead(notification.notificationId)
    }

    // 根据通知类型跳转
    switch (notification.type) {
        case 4: // 好友申请
            router.push('/service/community/friends')
            break
        case 5: // 私信通知
            // TODO: 打开聊天窗口
            router.push('/service/community/friends')
            break
        default:
            // 其他类型暂不处理
            break
    }

    // 关闭弹窗
    visible.value = false
}

// 标记全部已读
const handleMarkAllRead = async () => {
    await markAllAsRead()
}

// 查看全部通知
const handleViewAll = () => {
    // TODO: 跳转到通知页面
    visible.value = false
}

// 获取类型文本
const getTypeText = (type: number) => {
    return NotificationTypeText[type] || '未知'
}

// 获取类型图标
const getTypeIcon = (type: number) => {
    return NotificationTypeIcon[type] || 'lucide:bell'
}

// 获取类型颜色类
const getTypeColorClass = (type: number) => {
    const color = NotificationTypeColor[type] || 'blue'
    const colorMap: Record<string, string> = {
        blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
        red: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400',
        green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
        orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
        purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    }
    return colorMap[color] || colorMap.blue
}

// 获取类型徽章类
const getTypeBadgeClass = (type: number) => {
    const color = NotificationTypeColor[type] || 'blue'
    const colorMap: Record<string, string> = {
        blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
        red: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400',
        green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
        orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
        purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
    }
    return colorMap[color] || colorMap.blue
}

// 格式化时间 - 相对时间
const formatTime = (time: string) => {
    const now = new Date()
    const date = new Date(time)
    const diff = now.getTime() - date.getTime()
    
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(days / 365)
    
    if (seconds < 60) {
        return '刚刚'
    } else if (minutes < 60) {
        return `${minutes}分钟前`
    } else if (hours < 24) {
        return `${hours}小时前`
    } else if (days < 30) {
        return `${days}天前`
    } else if (months < 12) {
        return `${months}个月前`
    } else {
        return `${years}年前`
    }
}
</script>

<style scoped>
.notification-content {
    @apply bg-white dark:bg-slate-900;
}

.notification-list::-webkit-scrollbar {
    width: 6px;
}

.notification-list::-webkit-scrollbar-track {
    @apply bg-slate-100 dark:bg-slate-800 rounded-full;
}

.notification-list::-webkit-scrollbar-thumb {
    @apply bg-slate-300 dark:bg-slate-600 rounded-full hover:bg-slate-400 dark:hover:bg-slate-500;
}

.notification-item.unread {
    @apply bg-orange-50/30 dark:bg-orange-950/10;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>

<style>
.notification-popover {
    padding: 0 !important;
    border-radius: 12px !important;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1) !important;
}
</style>

