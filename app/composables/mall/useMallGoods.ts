import { getMallGoodsListApi, getMallProductDetailApi, collectProductApi, cancelCollectProductApi, getProductImagesApi, addToCartApi, getCartListApi, removeCartApi, updateCartQuantityApi } from '@/utils/api'

export const useMallGoods = () => {
    const goodsList = ref<any[]>([])
    const subsidyList = ref<any[]>([])
    const cartList = ref<any[]>([])
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

    //加入购物车
    const fetchAddToCart = async (data: any) => {
        loading.value = true;
        try {
            const res = await addToCartApi(data) as any
            if (res.code == 200) {
                ElMessage.success('已加入购物车');
                return true;
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

    //获取购物车列表
    const fetchCartList = async () => {
        loading.value = true
        try {
            // Mock Data for testing
            await new Promise(resolve => setTimeout(resolve, 600)); // Simulate network delay

            cartList.value = [
                {
                    cartId: 101,
                    productId: 1001,
                    productName: "有机红富士苹果 (5斤装)",
                    price: 29.9,
                    coverImg: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=80",
                    storeId: 1,
                    storeName: "鲜果园旗舰店",
                    quantity: 1,
                    stock: 100
                },
                {
                    cartId: 102,
                    productId: 1002,
                    productName: "新鲜土鸡蛋 (30枚)",
                    price: 35.5,
                    coverImg: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400&q=80",
                    storeId: 1,
                    storeName: "鲜果园旗舰店",
                    quantity: 2,
                    stock: 50
                },
                {
                    cartId: 103,
                    productId: 2005,
                    productName: "家用多功能清洁剂",
                    price: 15.9,
                    coverImg: "https://images.unsplash.com/photo-1585421514738-0179870f806d?w=400&q=80",
                    storeId: 2,
                    storeName: "社区生活超市",
                    quantity: 1,
                    stock: 200
                },
                {
                    cartId: 104,
                    productId: 2008,
                    productName: "维达抽纸 (12包/提)",
                    price: 26.8,
                    coverImg: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&q=80",
                    storeId: 2,
                    storeName: "社区生活超市",
                    quantity: 5,
                    stock: 200
                },
                {
                    cartId: 105,
                    productId: 3001,
                    productName: "可口可乐 330ml*6",
                    price: 12.5,
                    coverImg: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
                    storeId: 3,
                    storeName: "便利小栈",
                    quantity: 3,
                    stock: 999
                }
            ];

            // Real API Call (Commented out)
            /*
            const res = await getCartListApi() as any
            if (res.code == 200) {
                cartList.value = res.data || []
            }
            */
        } catch (e) {
            console.error(e);
            ElMessage.error('获取购物车失败');
        } finally {
            loading.value = false;
        }
    }

    //移除购物车商品
    const fetchRemoveCart = async (cartItemId: string | number) => {
        loading.value = true
        try {
            const res = await removeCartApi(cartItemId) as any
            if (res.code == 200) {
                ElMessage.success('移除成功');
                // Refresh list
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

    //更新购物车商品数量
    const fetchUpdateCartQuantity = async (cartItemId: string | number, quantity: number) => {
        try {
            const res = await updateCartQuantityApi(cartItemId, quantity) as any
            if (res.code == 200) {
                // Success
                return true;
            } else {
                ElMessage.error(res.message);
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
        fetchUpdateCartQuantity
    }
}
