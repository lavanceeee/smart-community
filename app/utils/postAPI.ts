/**
 * 
 * 获取帖子评论
 * GET
 * /api/forum/comment/post/{postId}
 * 参数：
 * postId
 * pageNum
 * pageSize
 * 
 * 返回
{
    "code": 200,
    "message": "操作成功",
    "data": {
        "records": [
            {
                "commentId": 0,
                "postId": 0,
                "userId": 0,
                "userName": "",
                "userAvatar": "",
                "parentId": 0,
                "replyToUserId": 0,
                "replyToUserName": "",
                "content": "",
                "likeCount": 0,
                "isLiked": true,
                "createTime": "",
                "replies": [
                    {
                        "commentId": 0,
                        "postId": 0,
                        "userId": 0,
                        "userName": "",
                        "userAvatar": "",
                        "parentId": 0,
                        "replyToUserId": 0,
                        "replyToUserName": "",
                        "content": "",
                        "likeCount": 0,
                        "isLiked": true,
                        "createTime": "",
                        "replies": [
                            {}
                        ]
                    }
                ]
            }
        ],
        "total": 0,
        "size": 0,
        "current": 0,
        "orders": [
            {
                "column": "",
                "asc": true
            }
        ],
        "optimizeCountSql": {},
        "searchCount": {},
        "optimizeJoinOfCountSql": true,
        "maxLimit": 0,
        "countId": "",
        "pages": 0
    },
    "timestamp": 1640995200000
}
 */

export const getPostComments = (postId: number, pageNum: number, pageSize: number) => {
    return $fetch(`/api/forum/comment/post/${postId}`, {
        method: 'GET',
        params: {
            pageNum,
            pageSize
        }
    })
}

/**
 * 获取我的帖子列表
 * GET /api/forum/post/my
 * 参数：
 * - pageNum: 页码
 * - pageSize: 每页大小
 */
export const getMyPostsApi = (params: { pageNum?: number; pageSize?: number }) => {
    return $api('/api/forum/post/my', {
        method: 'GET',
        params
    });
};

/**
 * 删除帖子
 * DELETE /api/forum/post/delete/{postId}
 */
export const deletePostApi = (postId: number | string) => {
    return $api(`/api/forum/post/delete/${postId}`, {
        method: 'DELETE'
    });
};
