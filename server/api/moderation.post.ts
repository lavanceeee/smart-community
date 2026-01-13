// server/api/moderation.post.ts

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { text } = body;

    if (!text) {
        throw createError({ statusCode: 400, statusMessage: 'Text is required' });
    }

    // 1. 调用刚才定义的工具函数获取 Token
    const accessToken = await getBaiduToken();

    // 2. 调用内容审查
    try {
        const censorUrl = `https://aip.baidubce.com/rest/2.0/solution/v1/text_censor/v2/user_defined?access_token=${accessToken}`;

        const response: any = await $fetch(censorUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ text })
        });

        return response;
    } catch (error) {
        console.log(error);
        throw createError({ statusCode: 500, statusMessage: 'Audit Failed' });
    }
});