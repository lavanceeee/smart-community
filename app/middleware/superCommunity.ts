/**
 * 后台管理路由守卫中间件
 * 验证用户是否有权限访问后台管理系统
 */

export default defineNuxtRouteMiddleware((to, from) => {
    // 只在客户端执行
    if (import.meta.server) {
        return
    }

    const userStore = useUserStore()

    // 检查用户是否已登录
    if (!userStore.isLoggedIn) {
        ElMessage.error('请先登录')
        return navigateTo('/login')
    }

    // 检查用户角色权限
    // roleId === 4 表示普通用户，没有后台管理权限
    const userRole = userStore.userRole
    
    if (!userRole) {
        ElMessage.error('无法获取用户角色信息')
        return navigateTo('/')
    }

    if (userRole.roleId === 4) {
        ElMessage.error('您没有权限访问后台管理系统')
        return navigateTo('/')
    }

    // 验证通过，允许访问
    // 可以在这里添加更多细粒度的权限检查
    const permissions = userStore.userPermissions

    // 如果需要特定权限才能访问某些页面，可以在这里检查
    if (to.path.includes('/message/announcement') && permissions) {
        const hasPermission = permissions.some(p => 
            p.permissionCode === 'announcement:view' || 
            userRole.roleCode === 'ROLE_SUPER_ADMIN'
        )
        
        if (!hasPermission) {
            ElMessage.error('您没有权限访问公告管理')
            return navigateTo('/superCommunity')
        }
    }

    // 其他权限验证可以类似地添加...
})

