const $api = $fetch.create({
    baseURL: 'http://localhost:8080',
    onRequest({ options }) {
        const userStore = useUserStore()

        if (userStore.isLoggedIn && userStore.token) {
            const headers = new Headers(options.headers)
            headers.set('Authorization', `Bearer ${userStore.token}`)
            options.headers = headers
        } else {
            ElMessage.error("token为空")
        }
    }
})

export const registerUser = (data: any) => {
    return $api('api/user/register', {
        method: 'POST',
        body: data
    })
}

export const loginUser = (body:any) => {
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