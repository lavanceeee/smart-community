export const $api = $fetch.create({
    onRequest({ request, options }) {
        const config = useRuntimeConfig()
        console.log('Check Config:', {
            apiBase: config.public.apiBase,
        })
        // 优先使用运行时配置，如果没有则回退
        const baseUrl = config.public.apiBase

        if (baseUrl) {
            options.baseURL = baseUrl
        }

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