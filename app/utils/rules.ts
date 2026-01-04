
// 手机号码正则表达式验证规则
export const phoneRule = [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    {
        pattern: /^1[3-9]\d{9}$/,
        message: '请输入正确的手机号码格式',
        trigger: 'blur'
    }
]
