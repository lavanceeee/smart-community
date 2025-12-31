const $api = $fetch.create({
    baseURL: 'http://localhost:8080',
    onRequest({ options }) {
        const userStore = useUserStore()
        if (userStore.isLoggedIn && userStore.token) {
            options.headers = options.headers || {};
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${userStore.token}`
            } as any

            console.log(options.headers);
        } else {
            if (import.meta.client) {
                ElMessage.error("token为空")
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