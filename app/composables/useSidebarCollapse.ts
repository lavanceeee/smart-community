/**
 * 后台管理侧边栏折叠状态管理
 * 支持持久化存储，用户偏好会被记住
 */

export const useSidebarCollapse = () => {
    // 使用 useState 确保状态在客户端持久化
    const isCollapsed = useState('sidebarCollapsed', () => {
        // 从 localStorage 读取用户偏好
        if (import.meta.client) {
            const stored = localStorage.getItem('sidebar-collapsed')
            return stored === 'true'
        }
        return false
    })

    /**
     * 切换侧边栏状态
     */
    const toggleSidebar = () => {
        isCollapsed.value = !isCollapsed.value
        
        // 保存到 localStorage
        if (import.meta.client) {
            localStorage.setItem('sidebar-collapsed', String(isCollapsed.value))
        }
    }

    /**
     * 设置侧边栏状态
     */
    const setSidebarCollapsed = (collapsed: boolean) => {
        isCollapsed.value = collapsed
        
        if (import.meta.client) {
            localStorage.setItem('sidebar-collapsed', String(collapsed))
        }
    }

    /**
     * 获取侧边栏宽度（用于布局计算）
     */
    const sidebarWidth = computed(() => {
        return isCollapsed.value ? '80px' : '256px' // w-20 : w-64
    })

    return {
        isCollapsed: readonly(isCollapsed),
        sidebarWidth,
        toggleSidebar,
        setSidebarCollapsed
    }
}

