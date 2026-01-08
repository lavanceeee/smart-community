/**
 * 好友管理 Composable
 * 提供好友列表、好友申请、添加/删除好友等功能
 */

export interface Friend {
    friendId: number
    friendUserId: number
    friendUserName: string
    friendAvatar: string
    remark: string
    status: number  // 0-待确认 1-已同意 2-已拒绝
    createTime: string
}

export interface FriendListResponse {
    records: Friend[]
    total: number
    size: number
    current: number
    pages: number
}

export interface UserSearchResult {
    userId: number
    userName: string
    phone: string
    avatar: string
    gender: number  // 0-未知 1-男 2-女
    age: number
    friendStatus: number  // 0-非好友，1-待审核，2-已是好友
}

export const useFriends = () => {
    const loading = ref(false)
    const searchLoading = ref(false)
    const friendList = ref<Friend[]>([])
    const friendRequests = ref<Friend[]>([])
    const searchResults = ref<UserSearchResult[]>([])
    const total = ref(0)
    const requestsTotal = ref(0)
    const searchTotal = ref(0)

    /**
     * 获取好友列表
     */
    const getFriendList = async (params: { pageNum?: number; pageSize?: number } = {}) => {
        loading.value = true
        try {
            const res = await getFriendListApi({
                pageNum: params.pageNum || 1,
                pageSize: params.pageSize || 20
            }) as any

            if (res.code === 200) {
                friendList.value = res.data.records || []
                total.value = res.data.total || 0
                return res.data
            } else {
                throw new Error(res.message || '获取好友列表失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '获取好友列表失败')
            throw error
        } finally {
            loading.value = false
        }
    }

    /**
     * 获取好友申请列表
     */
    const getFriendRequests = async (params: { pageNum?: number; pageSize?: number } = {}) => {
        loading.value = true
        try {
            const res = await getFriendRequestsApi({
                pageNum: params.pageNum || 1,
                pageSize: params.pageSize || 20
            }) as any

            if (res.code === 200) {
                friendRequests.value = res.data.records || []
                requestsTotal.value = res.data.total || 0
                return res.data
            } else {
                throw new Error(res.message || '获取好友申请失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '获取好友申请失败')
            throw error
        } finally {
            loading.value = false
        }
    }

    /**
     * 发送好友申请
     */
    const sendFriendRequest = async (friendUserId: number, remark?: string) => {
        loading.value = true
        try {
            const res = await sendFriendRequestApi({
                friendUserId,
                remark: remark || ''
            }) as any

            if (res.code === 200) {
                ElMessage.success('好友申请已发送')
                return res.data
            } else {
                throw new Error(res.message || '发送好友申请失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '发送好友申请失败')
            throw error
        } finally {
            loading.value = false
        }
    }

    /**
     * 接受好友申请
     */
    const acceptFriendRequest = async (friendId: number) => {
        loading.value = true
        try {
            const res = await acceptFriendRequestApi(friendId) as any

            if (res.code === 200) {
                ElMessage.success('已接受好友申请')
                // 从申请列表中移除
                friendRequests.value = friendRequests.value.filter(f => f.friendId !== friendId)
                requestsTotal.value = Math.max(0, requestsTotal.value - 1)
                // 刷新好友列表
                await getFriendList()
                return res.data
            } else {
                throw new Error(res.message || '接受好友申请失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '接受好友申请失败')
            throw error
        } finally {
            loading.value = false
        }
    }

    /**
     * 拒绝好友申请
     */
    const rejectFriendRequest = async (friendId: number) => {
        loading.value = true
        try {
            const res = await rejectFriendRequestApi(friendId) as any

            if (res.code === 200) {
                ElMessage.success('已拒绝好友申请')
                // 从申请列表中移除
                friendRequests.value = friendRequests.value.filter(f => f.friendId !== friendId)
                requestsTotal.value = Math.max(0, requestsTotal.value - 1)
                return res.data
            } else {
                throw new Error(res.message || '拒绝好友申请失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '拒绝好友申请失败')
            throw error
        } finally {
            loading.value = false
        }
    }

    /**
     * 删除好友
     */
    const deleteFriend = async (friendUserId: number) => {
        loading.value = true
        try {
            const res = await deleteFriendApi(friendUserId) as any

            if (res.code === 200) {
                ElMessage.success('已删除好友')
                // 从好友列表中移除
                friendList.value = friendList.value.filter(f => f.friendUserId !== friendUserId)
                total.value = Math.max(0, total.value - 1)
                return res.data
            } else {
                throw new Error(res.message || '删除好友失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '删除好友失败')
            throw error
        } finally {
            loading.value = false
        }
    }

    /**
     * 搜索用户（用于添加好友）
     */
    const searchUsers = async (keyword: string, params: { pageNum?: number; pageSize?: number } = {}) => {
        if (!keyword.trim()) {
            searchResults.value = []
            searchTotal.value = 0
            return { records: [], total: 0 }
        }

        searchLoading.value = true
        try {
            const res = await searchUsersApi({
                keyword: keyword.trim(),
                pageNum: params.pageNum || 1,
                pageSize: params.pageSize || 20
            }) as any

            if (res.code === 200) {
                searchResults.value = res.data.records || []
                searchTotal.value = res.data.total || 0
                return res.data
            } else {
                throw new Error(res.message || '搜索用户失败')
            }
        } catch (error: any) {
            ElMessage.error(error.message || '搜索用户失败')
            searchResults.value = []
            searchTotal.value = 0
            throw error
        } finally {
            searchLoading.value = false
        }
    }

    /**
     * 搜索好友（本地过滤）
     */
    const searchFriends = (keyword: string) => {
        if (!keyword.trim()) {
            return friendList.value
        }
        
        const lowerKeyword = keyword.toLowerCase()
        return friendList.value.filter(friend => 
            friend.friendUserName.toLowerCase().includes(lowerKeyword) ||
            friend.remark?.toLowerCase().includes(lowerKeyword)
        )
    }

    return {
        loading: readonly(loading),
        searchLoading: readonly(searchLoading),
        friendList: readonly(friendList),
        friendRequests: readonly(friendRequests),
        searchResults: readonly(searchResults),
        total: readonly(total),
        requestsTotal: readonly(requestsTotal),
        searchTotal: readonly(searchTotal),
        getFriendList,
        getFriendRequests,
        sendFriendRequest,
        acceptFriendRequest,
        rejectFriendRequest,
        deleteFriend,
        searchUsers,
        searchFriends
    }
}

