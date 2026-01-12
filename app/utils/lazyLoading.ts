// 实例化
//new IntersectionObserver(callback, options)

// 开始监听
//observer.value.observe(domElement)

// 停止监听
//observer.value.disconnect()



/**
 * 通用懒加载 Hook
 * 使用 IntersectionObserver 监听元素是否进入可视区域
 */

//options：IntersectionObserverInit Object
export const useIntersectionObserver = (
    callback: () => void,
    options: IntersectionObserverInit = { threshold: 0.1 }
) => {
    const observer = ref<IntersectionObserver | null>(null);
    const targetRef = ref<HTMLElement | null>(null);

    onMounted(() => {
        if (!process.client) return;

        //示例化一个保安
        observer.value = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry && entry.isIntersecting) {
                callback();
            }
        }, options);

        //元素进入视野
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
