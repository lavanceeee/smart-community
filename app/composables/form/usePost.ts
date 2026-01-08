import type { ForumPost } from './useForum';
import { getPostComments, getMyPostsApi, deletePostApi } from '~/utils/postAPI';

export const usePost = () => {
    const creating = useState('forum-post-creating', () => false);

    // Create Post
    const createPost = async (params: { sectionId: number | string; title: string; content: string; images?: string }) => {
        creating.value = true;
        try {
            const res = await createForumPostApi(params) as any;
            if (res.code === 200) {
                return res.data; // usually returns postId
            } else {
                throw new Error(res.message || '发布帖子失败');
            }
        } catch (e: any) {
            throw e;
        } finally {
            creating.value = false;
        }
    };

    // Get Post Detail
    const getPostDetail = async (postId: string | number) => {
        try {
            const res = await getForumPostDetailApi(postId) as any;
            if (res.code === 200) {
                return res.data;
            } else {
                throw new Error(res.message || '获取帖子详情失败');
            }
        } catch (e: any) {
            throw e;
        }
    };

    // Toggle Like
    const toggleLike = async (post: ForumPost) => {
        // Optimistic update
        const originalLiked = post.isLiked;
        const originalCount = post.likeCount;

        // Optimistically toggle
        post.isLiked = !originalLiked;
        post.likeCount = post.isLiked ? post.likeCount + 1 : Math.max(0, post.likeCount - 1);

        console.log('Toggling Like:', { postId: post.postId, newLiked: post.isLiked });

        try {
            let res;
            if (originalLiked) {
                console.log('Sending Cancel Like Request...');
                res = await cancelLikeForumPostApi(post.postId) as any;
            } else {
                console.log('Sending Like Request...');
                res = await likeForumPostApi(post.postId) as any;
            }

            console.log('Like Response:', res);

            if (res.code !== 200) {
                throw new Error(res.message || `Code ${res.code}`);
            }
        } catch (e: any) {
            console.error('Toggle Like Error:', e);
            ElMessage.error(e.message || '操作失败');
            // Revert
            post.isLiked = originalLiked;
            post.likeCount = originalCount;
        }
    };

    // Toggle Collect
    const toggleCollect = async (post: ForumPost) => {
        // Optimistic update
        const originalCollected = post.isCollected;

        post.isCollected = !originalCollected;
        // Note: ForumPost might need collectionCount if we track it, but usually collect is personal. 
        // Assuming API doesn't return count update for collect usually, but let's check interface.
        // Interface doesn't have collectCount.

        try {
            let res;
            if (originalCollected) {
                res = await cancelCollectForumPostApi(post.postId) as any;
            } else {
                res = await collectForumPostApi(post.postId) as any;
            }

            if (res.code !== 200) {
                // Revert
                post.isCollected = originalCollected;
                ElMessage.error(res.message || '操作失败');
            } else {
                ElMessage.success(post.isCollected ? '收藏成功' : '已取消收藏');
            }
        } catch (e) {
            // Revert
            post.isCollected = originalCollected;
            console.error('Toggle Collect Error:', e);
        }
    };

    // My Collected Posts State
    const collectedPosts = useState<ForumPost[]>('forum-my-collected', () => []);
    const collectedPage = useState<number>('forum-my-collected-page', () => 1);
    const collectedHasMore = useState<boolean>('forum-my-collected-has-more', () => true);
    const collectedLoading = useState<boolean>('forum-my-collected-loading', () => false);

    const fetchMyCollectedPosts = async (page = 1, size = 5, append = false) => {
        collectedLoading.value = true;
        try {
            const params = {
                pageNo: page,
                pageSize: size
            };
            const res = await getMyCollectedForumPostApi(params) as any;
            if (res.code === 200) {
                const newPosts = res.data.records || [];
                if (append) {
                    collectedPosts.value = [...collectedPosts.value, ...newPosts];
                } else {
                    collectedPosts.value = newPosts;
                }
                collectedPage.value = res.data.current;
                collectedHasMore.value = collectedPosts.value.length < res.data.total;
            }
        } catch (e) {
            console.error('Fetch Collected Posts Error:', e);
        } finally {
            collectedLoading.value = false;
        }
    };

    // Comments State
    const commentsList = useState<any[]>('forum-post-comments', () => []);
    const commentsPage = useState<number>('forum-post-comments-page', () => 1);
    const commentsHasMore = useState<boolean>('forum-post-comments-has-more', () => true);
    const commentsLoading = useState<boolean>('forum-post-comments-loading', () => false);
    const commentsTotal = useState<number>('forum-post-comments-total', () => 0);

    const fetchComments = async (postId: number | string, page = 1, size = 10, append = false) => {
        if (!postId) return;
        commentsLoading.value = true;
        try {
            const res = await getPostComments(Number(postId), page, size) as any;
            if (res.code === 200) {
                const newComments = res.data.records || [];
                commentsTotal.value = res.data.total;

                if (append) {
                    commentsList.value = [...commentsList.value, ...newComments];
                } else {
                    commentsList.value = newComments;
                }

                commentsPage.value = res.data.current;
                // If loaded count >= total, no more
                commentsHasMore.value = commentsList.value.length < res.data.total;
            }
        } catch (e) {
            console.error('Fetch Comments Error:', e);
        } finally {
            commentsLoading.value = false;
        }
    };

    // My Posts State
    const myPosts = useState<ForumPost[]>('forum-my-posts', () => []);
    const myPostsPage = useState<number>('forum-my-posts-page', () => 1);
    const myPostsTotal = useState<number>('forum-my-posts-total', () => 0);
    const myPostsHasMore = useState<boolean>('forum-my-posts-has-more', () => true);
    const myPostsLoading = useState<boolean>('forum-my-posts-loading', () => false);

    // Fetch My Posts
    const fetchMyPosts = async (page = 1, size = 10, append = false) => {
        myPostsLoading.value = true;
        try {
            const params = {
                pageNum: page,
                pageSize: size
            };
            const res = await getMyPostsApi(params) as any;
            if (res.code === 200) {
                const newPosts = res.data.records || [];
                if (append) {
                    myPosts.value = [...myPosts.value, ...newPosts];
                } else {
                    myPosts.value = newPosts;
                }
                myPostsTotal.value = res.data.total;
                myPostsPage.value = res.data.current;
                myPostsHasMore.value = myPosts.value.length < res.data.total;
            }
        } catch (e) {
            console.error('Fetch My Posts Error:', e);
            ElMessage.error('获取我的帖子失败');
        } finally {
            myPostsLoading.value = false;
        }
    };

    // Delete Post
    const deletePost = async (postId: number | string) => {
        try {
            const res = await deletePostApi(postId) as any;
            if (res.code === 200) {
                ElMessage.success('删除成功');
                // Remove from list
                myPosts.value = myPosts.value.filter(p => p.postId !== postId);
                myPostsTotal.value--;
                return true;
            } else {
                ElMessage.error(res.message || '删除失败');
                return false;
            }
        } catch (e: any) {
            ElMessage.error('删除失败');
            return false;
        }
    };

    return {
        creating,
        createPost,
        toggleLike,
        toggleCollect,
        collectedPosts,
        collectedPage,
        collectedHasMore,
        collectedLoading,
        fetchMyCollectedPosts,
        getPostDetail,
        commentsList,
        commentsPage,
        commentsHasMore,
        commentsLoading,
        commentsTotal,
        fetchComments,
        myPosts,
        myPostsPage,
        myPostsTotal,
        myPostsHasMore,
        myPostsLoading,
        fetchMyPosts,
        deletePost
    };
};
