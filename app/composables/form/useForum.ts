export interface ForumSection {
    sectionId: number;
    sectionName: string;
    sectionDesc: string;
    iconUrl: string | null;
    sortOrder: number;
    postCount: number;
    status: number;
    createTime: string;
}

export interface ForumPost {
    postId: number;
    sectionId: number;
    sectionName: string;
    userId: number;
    userName: string;
    userAvatar: string;
    title: string;
    contentSummary: string;
    firstImage: string | null;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    isTop: number;
    isEssence: number;
    createTime: string;
    isLiked: boolean;
    isCollected: boolean;
}

export const useForum = () => {
    const loading = useState('forum-loading', () => false);
    const sections = useState<ForumSection[]>('forum-sections', () => []);
    const postList = useState<ForumPost[]>('forum-posts', () => []);
    const postTotal = useState<number>('forum-posts-total', () => 0);
    const postPage = useState<number>('forum-posts-page', () => 1);
    const hasMorePosts = useState<boolean>('forum-posts-has-more', () => true);
    const error = useState<string | null>('forum-error', () => null);

    const fetchSections = async () => {
        // ... (keep existing fetchSections logic if not changing, but since I am replacing the whole function block, I will include it)
        loading.value = true;
        error.value = null;
        try {
            const res = await getForumSectionListApi() as any;
            if (res.code === 200) {
                sections.value = res.data;
            } else {
                throw new Error(res.message || '获取版块列表失败');
            }
        } catch (e: any) {
            error.value = e.message;
            console.error('Forum Sections Error:', e);
        } finally {
            loading.value = false;
        }
    };

    const fetchPostList = async (sectionId: number | string, page = 1, size = 10, append = false, sortBy = 'latest') => {
        loading.value = true;
        try {
            const params = {
                pageNo: page,
                pageSize: size,
                sectionId: sectionId,
                orderBy1: "",
                isAsc1: true,
                orderBy2: "",
                isAsc2: true,
                keyword: "",
                isEssence: 0, // Keep 0, assuming sortBy handles logic or backend handles it
                sortBy: sortBy
            };
            const res = await getForumPostListApi(params) as any;
            if (res.code === 200) {
                const newPosts = res.data.records || [];
                if (append) {
                    postList.value = [...postList.value, ...newPosts];
                } else {
                    postList.value = newPosts;
                }
                postTotal.value = res.data.total;
                postPage.value = res.data.current;
                hasMorePosts.value = postList.value.length < postTotal.value;
            } else {
                throw new Error(res.message || '获取帖子失败');
            }
        } catch (e: any) {
            error.value = e.message;
            console.error('Fetch Posts Error:', e);
        } finally {
            loading.value = false;
        }
    }

    return {
        loading,
        sections,
        postList,
        postTotal,
        hasMorePosts,
        error,
        fetchSections,
        fetchPostList
    };
};
