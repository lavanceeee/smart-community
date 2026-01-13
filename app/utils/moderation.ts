//内容审查
export async function checkText(text: string) {
    try {
        const res = await $fetch('/api/moderation', {
            method: 'POST',
            body: {
                text: text
            }
        }) as any;

        console.log(res);
        console.log(typeof (res));

        const result = JSON.parse(res);

        if (result.conclusionType != 1) {
            ElMessage.error('内容可能包含不合理内容，请重新输入！');
            return false;
        }
        return true;
    } catch (e: any) {
        ElMessage.error(e.message || '内容审查失败');
        return false;
    }
}