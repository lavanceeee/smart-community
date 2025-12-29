const $api = $fetch.create({
    baseURL: 'http://localhost:8080',
})

export const registerUser = (data: any) => {
    return $api('api/register', {
        method: 'POST',
        body: data
    })
}

export const loginUser = (body:any) => {
    return $api('api/login', {
        method: "POST",
        body
    })
}