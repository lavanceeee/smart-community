const $api = $fetch.create({
    baseURL: 'http://localhost:8080',
    onRequest({ request, options }) {
        const userStore = useUserStore()

        // 不需要 Token 的接口白名单
        const publicEndpoints = [
            'api/user/login',
            'api/user/register',
            'api/user/send-verify-code',
            'api/user/password/reset'
        ];

        // 如果请求地址包含白名单中的路径，直接跳过 Token 注入
        const isPublic = publicEndpoints.some(endpoint => request.toString().includes(endpoint));

        if (isPublic) {
            return;
        }

        if (userStore.isLoggedIn && userStore.token) {
            options.headers = new Headers(options.headers);
            options.headers.set('Authorization', `Bearer ${userStore.token}`)
        } else {
            // 只有访问非白名单接口且没有 token 时才提示或处理
            if (import.meta.client) {
                // 可以选择在这里提示，或者干脆不提示让后端返回 401
                ElMessage.error("请先登录")
            }
        }
    }
})

export const registerUser = (data: any) => {
    return $api('api/user/register', {
        method: 'POST',
        body: data
    })
}

export const loginUser = (body: any, loginMethod: string) => {

    if (loginMethod === 'phone') {
        return $api('api/user/login', {
            method: "POST",
            body
        })
    }
    else {
        return $api('api/user/login-by-email', {
            method: "POST",
            body
        })
    }

}

//api/user/avatar/upload
export const uploadAvatarApi = (body: any) => {
    return $api('api/user/avatar/upload', {
        method: "POST",
        body
    })
}

export const updateUserInfoApi = (body: any) => {
    return $api('api/user/profile', {
        method: "PUT",
        body
    })
}

//忘记密码重置邮箱Api
export const sendResetPasswordEmailApi = (email: string) => {
    return $api('/api/user/send-verify-code', {
        method: "POST",
        body: { email } //JSON
    })
}

//重置密码
export const resetPasswordApi = (body: any) => {
    return $api('api/user/forgot-password', {
        method: "POST",
        body
    })
}

// 修改密码
export const changePasswordApi = (body: any) => {
    return $api('api/user/change-password', {
        method: "POST",
        body
    })
}

//退出登录 /api/user/logout
export const logoutUser = () => {
    return $api('api/user/logout', {
        method: 'POST'
    })
}

// 获取社区公告列表
export const getCommunityNewsApi = (params: any) => {
    return $api('/api/announcement/list', {
        method: 'GET',
        params
    })
}

// 获取公告详情
export const getAnnouncementDetailApi = (announceId: string | number) => {
    return $api(`/api/announcement/${announceId}`, {
        method: 'GET'
    })
}

// 获取访客登记列表
export const getVisitorListApi = (params: any) => {
    return $api('/api/visitor/list', {
        method: 'GET',
        params
    })
}

// 创建访客登记
export const createVisitorApi = (data: any) => {
    return $api('/api/visitor/register', {
        method: 'POST',
        body: data
    })
}

// 取消访客登记
export const cancelVisitorApi = (registerId: number | string) => {
    return $api(`/api/visitor/${registerId}`, {
        method: 'DELETE' // Spec usually implies DELETE for cancellation/deletion, checking spec logic.
        // Spec says "请求数据类型application/x-www-form-urlencoded" but path param is used.
        // Typically REST cancellation is DELETE.
        // Wait, "取消待审核的访客登记". If I look at the request types, it doesn't specify method but RESTful usually uses DELETE for resource removal/invalidation. 
        // User said "请求方式" not explicitly but path is `/api/visitor/{registerId}`. 
        // Let's assume DELETE or PUT/POST?  Usually DELETE for "cancel/delete".
        // Let me check if I can infer from context. Assuming DELETE based on standard REST for "cancel/remove".
        // Wait, actually, let me double check the user request provided text again.
        // It says "/api/visitor/{registerId}".
        // It does not explicitly state METHOD in the text provided.
        // However, standard is DELETE. I'll use DELETE.
    })
}