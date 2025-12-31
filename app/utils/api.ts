const $api = $fetch.create({
    baseURL: 'http://localhost:8080',
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