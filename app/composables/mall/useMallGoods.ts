
export const useMallGoods = () => {
    const goodsList = ref<any[]>([])
    const subsidyList = ref<any[]>([])
    const loading = ref(false)
    const currentPage = ref(1)
    const total = ref(0)
    const pageSize = 25

    const fetchGoodsList = async (page = 1, isLoadMore = false) => {
        if (loading.value) return
        loading.value = true
        try {
            const res = await getMallGoodsListApi({
                pageNum: page,
                pageSize: pageSize
            }) as any

            const data = res.data || res

            if (data.list) {
                const newItems = data.list || []

                total.value = data.total || 0
                currentPage.value = page

                if (isLoadMore) {
                    goodsList.value.push(...newItems)
                } else {
                    goodsList.value = newItems

                    // Refresh subsidy list only on initial load
                    if (newItems.length > 0) {
                        const shuffled = [...newItems].sort(() => 0.5 - Math.random())
                        subsidyList.value = shuffled.slice(0, 3)
                    }
                }
            }
        } catch (error) {
            console.error('失败了', error)
        } finally {
            loading.value = false
        }
    }

    const loadMore = () => {
        if (goodsList.value.length < total.value) {
            fetchGoodsList(currentPage.value + 1, true)
        }
    }

    const hasMore = computed(() => goodsList.value.length < total.value)

    //查询具体商品
    const fetchDetail = async (productId: string | number) => {
        loading.value = true
        try {
            const res = await getMallProductDetailApi(productId) as any

            if (res.code === 200) {
                return res.data;
            }
        } catch (e) {
            console.error(e);
        } finally {
            loading.value = false
        }
    }

    //商品收藏
    const fetchCollect = async (ProductId: string | number) => {
        loading.value = true;
        try {
            const res = await collectProductApi(ProductId) as any
            if (res.code == 200) {
                // ElMessage.success('操作成功'); // Don't show generic message here, handle in component for specific text
                return true;
            }
            else {
                ElMessage.error(res.message);
            }
        } catch (e) {
            console.error(e);
            ElMessage.error('收藏失败');
        } finally {
            loading.value = false;
        }
    }

    //取消收藏
    const fetchCancelCollect = async (ProductId: string | number) => {
        loading.value = true;
        try {
            const res = await cancelCollectProductApi(ProductId) as any
            if (res.code == 200) {
                // ElMessage.success('操作成功'); // Don't show generic message here, handle in component for specific text
                return true;
            }
            else {
                ElMessage.error(res.message);
            }
        } catch (e) {
            console.error(e);
            ElMessage.error('取消收藏失败');
        } finally {
            loading.value = false;
        }
    }

    //获取商品图片
    const fetchProductImages = async (ProductId: string | number) => {
        loading.value = true;
        try {
            const res = await getProductImagesApi(ProductId) as any
            if (res.code == 200) {
                return res.data;
            }
            else {
                ElMessage.error(res.message);
            }
        } catch (e) {
            console.error(e);
            ElMessage.error('获取商品图片失败');
        } finally {
            loading.value = false;
        }
    }

    return {
        goodsList,
        subsidyList,
        loading,
        fetchGoodsList,
        loadMore,
        hasMore,
        fetchDetail,
        fetchCollect,
        fetchCancelCollect,
        fetchProductImages
    }
}
