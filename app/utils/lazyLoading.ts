/**
 * 通用懒加载 Hook
 * 使用 IntersectionObserver 监听元素是否进入可视区域
 */
export const useIntersectionObserver = (
    callback: () => void,
    options: IntersectionObserverInit = { threshold: 0.1 }
) => {
    const observer = ref<IntersectionObserver | null>(null);
    const targetRef = ref<HTMLElement | null>(null);

    onMounted(() => {
        if (!process.client) return;

        observer.value = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry && entry.isIntersecting) {
                callback();
            }
        }, options);

        if (targetRef.value) {
            observer.value.observe(targetRef.value);
        }
    });

    onUnmounted(() => {
        if (observer.value) {
            observer.value.disconnect();
        }
    });

    // 返回 ref，需绑定到 DOM 元素上
    return { targetRef };
};
