/**
 * 后台管理系统加载状态管理
 * 用于控制进入后台管理时的加载动画和状态
 */

export const useSuperCommunityLoader = () => {
    const isLoading = useState('superCommunityLoading', () => false)
    const isInitialized = useState('superCommunityInitialized', () => false)

    /**
     * 开始加载流程
     * @param minDuration 最小加载时长（毫秒），确保用户能看到加载动画
     */
    const startLoading = async (minDuration: number = 2300) => {
        isLoading.value = true
        const startTime = Date.now()

        try {
            // 这里可以添加需要预加载的数据或初始化逻辑
            // 例如：验证权限、加载用户配置等
            await performInitialization()

            // 确保加载动画至少显示指定时长
            const elapsed = Date.now() - startTime
            if (elapsed < minDuration) {
                await new Promise(resolve => setTimeout(resolve, minDuration - elapsed))
            }

            isInitialized.value = true
        } catch (error) {
            console.error('后台管理初始化失败:', error)
            throw error
        } finally {
            isLoading.value = false
        }
    }

    /**
     * 执行初始化逻辑
     */
    const performInitialization = async () => {
        const userStore = useUserStore()

        // 验证用户是否已登录
        if (!userStore.isLoggedIn) {
            throw new Error('用户未登录')
        }

        // 验证用户权限
        const userRole = userStore.userRole
        if (!userRole || userRole.roleId === 4) {
            throw new Error('无权限访问后台管理')
        }

        // 可以在这里添加更多初始化逻辑
        // 例如：预加载常用数据、初始化配置等
        await new Promise(resolve => setTimeout(resolve, 100))
    }

    /**
     * 重置加载状态
     */
    const resetLoader = () => {
        isLoading.value = false
        isInitialized.value = false
    }

    /**
     * 检查是否需要显示加载动画
     */
    const shouldShowLoader = computed(() => {
        return isLoading.value || !isInitialized.value
    })

    return {
        isLoading: readonly(isLoading),
        isInitialized: readonly(isInitialized),
        shouldShowLoader,
        startLoading,
        resetLoader
    }
}

