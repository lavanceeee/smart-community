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

export const loginUser = (body: any) => {
    return $api('api/user/login', {
        method: "POST",
        body
    })
}

//api/user/avatar/upload
export const uploadAvatarApi = (body: any) => {
    return $api('api/user/avatar/upload', {
        method: "POST",
        body
    })
}

export const updateUserInfoApi = (body: any) => {
    return $api('api/user/update', {
        method: "POST",
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

//充值密码
export const resetPasswordApi = (body: any) => {
    return $api('api/user/forgot-password', {
        method: "POST",
        body
    })
}