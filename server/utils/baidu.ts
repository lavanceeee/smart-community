// server/utils/baidu.ts

export const getBaiduToken = async () => {
    const API_KEY = process.env.BAIDU_API_KEY;
    const SECRET_KEY = process.env.BAIDU_SECRET_KEY;

    const authUrl = `https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=${API_KEY}&client_secret=${SECRET_KEY}`;

    try {
        const data: any = await $fetch(authUrl, { method: 'POST' });
        return data.access_token;
    } catch (error) {
        console.error('获取百度Token失败:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Baidu Auth Failed',
        });
    }
};