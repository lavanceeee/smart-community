export default defineNuxtPlugin(async () => {
    const userStore = useUserStore()
    
    // 如果用户已登录但没有角色信息，尝试重新获取
    if (userStore.isLoggedIn && !userStore.userRole) {
        console.log('检测到用户已登录但缺少角色信息，正在重新获取...')
        
        try {
            const { getCurrentUser } = await import('~/utils/api')
            const usersPermission = await getCurrentUser() as any
            
            console.log('重新获取用户权限信息:', usersPermission)
            
            if (usersPermission.code === 200) {
                const roles = usersPermission.data.roles
                const permission = usersPermission.data.permissions
                
                console.log('重新获取的用户角色:', roles)
                console.log('重新获取的用户权限:', permission)
                
                userStore.setRoles(roles)
                userStore.setPermissions(permission)
                
                console.log('角色信息已更新')
            } else {
                console.error('重新获取用户权限失败:', usersPermission)
            }
        } catch (error) {
            console.error('重新获取用户权限出错:', error)
        }
    } else {
        console.log('用户登录状态:', userStore.isLoggedIn)
        console.log('用户角色:', userStore.userRole)
    }
})

