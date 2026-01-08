export interface Comment {
    commentId: number;
    postId: number;
    userId: number;
    userName: string;
    userAvatar: string;
    parentId: number;
    replyToUserId: number;
    replyToUserName: string;
    content: string;
    likeCount: number;
    isLiked: boolean;
    createTime: string;
    replies: Comment[];
}

export interface CreateCommentParams {
    postId: number | string;
    parentId?: number;
    replyToUserId?: number;
    content: string;
}

// 1. 点赞评论
export const likeCommentApi = (commentId: number) => {
    return $api(`api/forum/comment/${commentId}/like`, {
        method: 'POST'
    });
};

// 2. 取消点赞评论
export const cancelLikeCommentApi = (commentId: number) => {
    return $api(`api/forum/comment/${commentId}/like`, {
        method: 'DELETE'
    });
};

// 3. 发表评论
export const createCommentApi = (params: CreateCommentParams) => {
    return $api('api/forum/comment/create', {
        method: 'POST',
        body: params
    });
};

// 4. 获取帖子评论
export const getPostCommentsApi = (postId: number | string, pageNum: number = 1, pageSize: number = 10) => {
    return $api(`api/forum/comment/post/${postId}`, {
        method: 'GET',
        params: {
            pageNum,
            pageSize
        }
    });
};

// 5. 删除评论
export const deleteCommentApi = (commentId: number) => {
    return $api(`api/forum/comment/${commentId}`, {
        method: 'DELETE'
    });
};
