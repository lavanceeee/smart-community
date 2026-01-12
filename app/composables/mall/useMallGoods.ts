import { getMallGoodsListApi, getMallProductDetailApi, collectProductApi, cancelCollectProductApi, getProductImagesApi, addToCartApi, getCartListApi, removeCartApi, updateCartQuantityApi } from '@/utils/api'
import { getCategoryListApi } from '@/utils/API/goods'

export const useMallGoods = () => {
    // State
    const goodsList = ref<any[]>([])
    const subsidyList = ref<any[]>([])
    const cartList = ref<any[]>([])
    const categoryList = ref<any[]>([])

    const loading = ref(false)
    const currentPage = ref(1)
    const total = ref(0)
    const pageSize = 25

    // --- Actions ---

    // Fetch Categories
    const fetchCategories = async () => {
        try {
            const res = await getCategoryListApi() as any
            console.log('Category API Response:', res) // Debug log

            // Handle different response structures
            // Structure A: { code: 200, data: { list: [...] } }
            // Structure B: { list: [...], total: ... } (Direct return)
            let rawList = []
            if (res.data && res.data.list) {
                rawList = res.data.list
            } else if (res.list) {
                rawList = res.list
            } else if (Array.isArray(res)) {
                rawList = res
            }

            if (rawList.length > 0) {
                // User requirement: Display ALL categories flat, no grouping, no parent/child logic.
                // Sort by sortOrder just to keep it orderly if provided
                categoryList.value = rawList.sort((a: any, b: any) => a.sortOrder - b.sortOrder)
            } else {
                console.warn('No category list found in response')
            }
        } catch (error) {
            console.error('Fetch categories error:', error)
        }
    }

    // Fetch Goods List
    const fetchGoodsList = async (page?: number, isLoadMore = false, size?: number) => {
        if (loading.value) return
        loading.value = true

        const targetPage = page || (isLoadMore ? currentPage.value + 1 : 1)
        const targetSize = size || pageSize

        try {
            const res = await getMallGoodsListApi({
                pageNum: targetPage,
                pageSize: targetSize
            }) as any

            const data = res.data || res

            if (data.list) {
                const newItems = data.list || []

                total.value = data.total || 0
                currentPage.value = targetPage

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

    // Fetch Detail
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

    // Collect Product
    const fetchCollect = async (ProductId: string | number) => {
        loading.value = true;
        try {
            const res = await collectProductApi(ProductId) as any
            if (res.code == 200) {
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

    // Cancel Collect
    const fetchCancelCollect = async (ProductId: string | number) => {
        loading.value = true;
        try {
            const res = await cancelCollectProductApi(ProductId) as any
            if (res.code == 200) {
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

    // Fetch Images
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

    // Add To Cart
    const fetchAddToCart = async (data: any) => {
        loading.value = true;
        try {
            const res = await addToCartApi(data) as any
            if (res.code == 200) {
                ElMessage.success('已加入购物车');
                return res.data || true; // Return data if available, else true
            }
            else {
                ElMessage.error(res.message);
                return false;
            }
        } catch (e) {
            console.error(e);
            ElMessage.error('加入购物车失败');
            return false;
        } finally {
            loading.value = false;
        }
    }

    // Fetch Cart List
    const fetchCartList = async () => {
        loading.value = true
        try {
            const res = await getCartListApi() as any
            if (res.code == 200) {
                cartList.value = res.data || []
            } else {
                ElMessage.error(res.message || '获取购物车失败');
            }
        } catch (e) {
            console.error(e);
            ElMessage.error('获取购物车失败');
        } finally {
            loading.value = false;
        }
    }

    // Remove Cart Item
    const fetchRemoveCart = async (cartItemId: string | number) => {
        loading.value = true
        try {
            const res = await removeCartApi(cartItemId) as any
            if (res.code == 200) {
                ElMessage.success('移除成功');
                await fetchCartList();
                return true;
            } else {
                ElMessage.error(res.message);
                return false;
            }
        } catch (e) {
            console.error(e);
            ElMessage.error('移除失败');
            return false;
        } finally {
            loading.value = false;
        }
    }

    // Update Cart Quantity
    const fetchUpdateCartQuantity = async (cartItem: any, quantity: number) => {
        try {
            const res = await updateCartQuantityApi({
                cartId: cartItem.cartId,
                productId: cartItem.productId,
                quantity: quantity,
                operation: 'update'
            }) as any

            if (res.code == 200) {
                return true;
            } else {
                ElMessage.error(res.message || '更新数量失败');
                return false;
            }
        } catch (e) {
            console.error(e);
            ElMessage.error('更新数量失败');
            return false;
        }
    }

    return {
        goodsList,
        subsidyList,
        cartList,
        categoryList,
        loading,
        fetchGoodsList,
        loadMore,
        hasMore,
        fetchDetail,
        fetchCollect,
        fetchCancelCollect,
        fetchProductImages,
        fetchAddToCart,
        fetchCartList,
        fetchRemoveCart,
        fetchUpdateCartQuantity,
        fetchCategories
    }
}
