import {
    getPostCommentsApi,
    createCommentApi,
    likeCommentApi,
    cancelLikeCommentApi,
    deleteCommentApi,
    type Comment,
    type CreateCommentParams
} from '~/utils/Post/comments';

export const useComments = () => {
    const commentsList = ref<Comment[]>([]);
    const commentsLoading = ref(false);
    const commentsTotal = ref(0);
    const commentsPage = ref(1);
    const commentsHasMore = ref(true);
    const submitting = ref(false);

    // Fetch comments for a post
    const fetchComments = async (postId: number | string, page = 1, size = 10, append = false) => {
        if (!postId) return;
        commentsLoading.value = true;
        try {
            const res = await getPostCommentsApi(postId, page, size) as any;
            if (res.code === 200) {
                const newComments = res.data.records || [];
                commentsTotal.value = res.data.total;

                if (append) {
                    commentsList.value = [...commentsList.value, ...newComments];
                } else {
                    commentsList.value = newComments;
                }

                commentsPage.value = res.data.current;
                commentsHasMore.value = commentsList.value.length < res.data.total;
            }
        } catch (e) {
            console.error('Fetch Comments Error:', e);
            ElMessage.error('获取评论失败');
        } finally {
            commentsLoading.value = false;
        }
    };

    // Publish a comment
    const publishComment = async (params: CreateCommentParams) => {
        submitting.value = true;
        try {
            const res = await createCommentApi(params) as any;
            if (res.code === 200) {
                ElMessage.success('评论发表成功');
                return true;
            } else {
                ElMessage.error(res.message || '评论失败');
                return false;
            }
        } catch (e: any) {
            ElMessage.error(e.message || '网络错误');
            return false;
        } finally {
            submitting.value = false;
        }
    };

    // Toggle Like on a comment
    const toggleCommentLike = async (comment: Comment) => {
        const originalLiked = comment.isLiked;
        // Optimistic update
        comment.isLiked = !originalLiked;
        comment.likeCount = comment.isLiked ? comment.likeCount + 1 : Math.max(0, comment.likeCount - 1);

        try {
            const api = originalLiked ? cancelLikeCommentApi : likeCommentApi;
            const res = await api(comment.commentId) as any;
            if (res.code !== 200) {
                throw new Error(res.message);
            }
        } catch (e) {
            // Revert
            comment.isLiked = originalLiked;
            comment.likeCount = originalLiked ? comment.likeCount + 1 : Math.max(0, comment.likeCount - 1);
            ElMessage.error('操作失败');
        }
    };

    // Delete a comment
    const removeComment = async (commentId: number) => {
        try {
            const res = await deleteCommentApi(commentId) as any;
            if (res.code === 200) {
                ElMessage.success('删除成功');
                // Remove from list locally
                const removeRecursively = (list: Comment[]) => {
                    const idx = list.findIndex(c => c.commentId === commentId);
                    if (idx !== -1) {
                        list.splice(idx, 1);
                        return true;
                    }
                    for (const c of list) {
                        if (c.replies && removeRecursively(c.replies)) return true;
                    }
                    return false;
                };
                removeRecursively(commentsList.value);
                commentsTotal.value--;
            } else {
                ElMessage.error(res.message || '删除失败');
            }
        } catch (e) {
            ElMessage.error('删除失败');
        }
    };

    return {
        commentsList,
        commentsLoading,
        commentsTotal,
        commentsPage,
        commentsHasMore,
        submitting,
        fetchComments,
        publishComment,
        toggleCommentLike,
        removeComment
    };
};
