<template>
    <div class="p-6 space-y-6">
        <!-- 页面头部 -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-slate-800 dark:text-white">论坛管理</h1>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">管理社区论坛帖子</p>
            </div>
        </div>

        <!-- 搜索筛选区域 -->
        <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
            <el-form :model="queryForm" inline>
                <el-form-item label="关键词">
                    <el-input
                        v-model="queryForm.keyword"
                        placeholder="搜索标题或内容"
                        clearable
                        style="width: 200px;"
                    />
                </el-form-item>
                <el-form-item label="板块">
                    <el-select
                        v-model="queryForm.sectionId"
                        placeholder="全部板块"
                        clearable
                        style="width: 150px;"
                    >
                        <!-- 这里可以根据实际板块数据动态生成 -->
                        <el-option label="全部板块" :value="undefined" />
                    </el-select>
                </el-form-item>
                <el-form-item label="精华">
                    <el-select
                        v-model="queryForm.isEssence"
                        placeholder="全部"
                        clearable
                        style="width: 120px;"
                    >
                        <el-option label="全部" :value="undefined" />
                        <el-option label="精华" :value="1" />
                        <el-option label="普通" :value="0" />
                    </el-select>
                </el-form-item>
                <el-form-item label="排序">
                    <el-select
                        v-model="queryForm.sortBy"
                        placeholder="排序方式"
                        style="width: 120px;"
                    >
                        <el-option label="最新" value="latest" />
                        <el-option label="最热" value="hot" />
                        <el-option label="精华" value="essence" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSearch">
                        <Icon name="lucide:search" size="16" class="mr-1" />
                        搜索
                    </el-button>
                    <el-button @click="handleReset">
                        <Icon name="lucide:rotate-ccw" size="16" class="mr-1" />
                        重置
                    </el-button>
                </el-form-item>
            </el-form>
        </div>

        <!-- 帖子列表 -->
        <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
            <el-table
                :data="postList"
                v-loading="loading"
                style="width: 100%"
            >
                <el-table-column prop="postId" label="ID" width="80" />
                <el-table-column prop="title" label="标题" min-width="250" show-overflow-tooltip>
                    <template #default="{ row }">
                        <div class="flex items-center gap-2">
                            <el-tag v-if="row.isTop === 1" type="danger" size="small">置顶</el-tag>
                            <el-tag v-if="row.isEssence === 1" type="warning" size="small">精华</el-tag>
                            <span>{{ row.title }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="sectionName" label="板块" width="120" />
                <el-table-column prop="userName" label="发帖人" width="120">
                    <template #default="{ row }">
                        <div class="flex items-center gap-2">
                            <el-avatar :src="row.userAvatar" :size="24" />
                            <span>{{ row.userName }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="数据统计" width="200">
                    <template #default="{ row }">
                        <div class="text-xs space-y-1">
                            <div>浏览: {{ row.viewCount }} | 点赞: {{ row.likeCount }}</div>
                            <div>评论: {{ row.commentCount }}</div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="createTime" label="发布时间" width="180" />
                <el-table-column label="操作" width="280" fixed="right">
                    <template #default="{ row }">
                        <el-button
                            type="primary"
                            size="small"
                            @click="handleViewDetail(row)"
                        >
                            <Icon name="lucide:eye" size="14" class="mr-1" />
                            查看
                        </el-button>
                        <el-button
                            type="warning"
                            size="small"
                            @click="handleEdit(row)"
                        >
                            <Icon name="lucide:edit" size="14" class="mr-1" />
                            编辑
                        </el-button>
                        <el-button
                            type="danger"
                            size="small"
                            @click="handleDelete(row)"
                        >
                            <Icon name="lucide:trash-2" size="14" class="mr-1" />
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <div class="p-4 flex justify-end border-t border-slate-200 dark:border-slate-700">
                <el-pagination
                    v-model:current-page="pagination.current"
                    v-model:page-size="pagination.size"
                    :page-sizes="[10, 20, 50, 100]"
                    :total="pagination.total"
                    layout="total, sizes, prev, pager, next, jumper"
                    @size-change="fetchPostList"
                    @current-change="fetchPostList"
                />
            </div>
        </div>

        <!-- 帖子详情弹窗 -->
        <el-dialog
            v-model="detailDialogVisible"
            title="帖子详情"
            width="800px"
            :close-on-click-modal="false"
        >
            <div v-if="currentPost" v-loading="detailLoading" class="space-y-6">
                <!-- 基础信息 -->
                <div>
                    <h3 class="text-xl font-bold mb-2 text-slate-800 dark:text-white">{{ currentPost.title }}</h3>
                    <div class="flex items-center gap-4 text-sm text-slate-500">
                        <div class="flex items-center gap-2">
                            <el-avatar :src="currentPost.userAvatar" :size="32" />
                            <span>{{ currentPost.userName }}</span>
                        </div>
                        <span>{{ currentPost.sectionName }}</span>
                        <span>{{ currentPost.createTime }}</span>
                        <el-tag v-if="currentPost.isTop === 1" type="danger" size="small">置顶</el-tag>
                        <el-tag v-if="currentPost.isEssence === 1" type="warning" size="small">精华</el-tag>
                    </div>
                </div>

                <!-- 帖子内容 -->
                <div class="prose dark:prose-invert max-w-none">
                    <div class="whitespace-pre-wrap">{{ currentPost.content }}</div>
                </div>

                <!-- 图片 -->
                <div v-if="currentPost.images" class="grid grid-cols-3 gap-4">
                    <el-image
                        v-for="(img, index) in currentPost.images.split(',')"
                        :key="index"
                        :src="img"
                        fit="cover"
                        class="w-full h-48 rounded-lg"
                        :preview-src-list="currentPost.images.split(',')"
                        :initial-index="index"
                    />
                </div>

                <!-- 统计数据 -->
                <div class="grid grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div class="text-center">
                        <div class="text-2xl font-bold text-blue-600">{{ currentPost.viewCount }}</div>
                        <div class="text-sm text-slate-500">浏览</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-red-600">{{ currentPost.likeCount }}</div>
                        <div class="text-sm text-slate-500">点赞</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-green-600">{{ currentPost.commentCount }}</div>
                        <div class="text-sm text-slate-500">评论</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold text-orange-600">{{ currentPost.collectCount }}</div>
                        <div class="text-sm text-slate-500">收藏</div>
                    </div>
                </div>
            </div>
        </el-dialog>

        <!-- 编辑帖子弹窗 -->
        <el-dialog
            v-model="editDialogVisible"
            title="编辑帖子"
            width="700px"
            :close-on-click-modal="false"
        >
            <el-form :model="editForm" :rules="editRules" ref="editFormRef" label-width="100px">
                <el-form-item label="帖子标题" prop="title">
                    <el-input v-model="editForm.title" placeholder="请输入帖子标题" />
                </el-form-item>
                <el-form-item label="帖子内容" prop="content">
                    <el-input
                        v-model="editForm.content"
                        type="textarea"
                        :rows="10"
                        placeholder="请输入帖子内容"
                    />
                </el-form-item>
                <el-form-item label="图片URL" prop="images">
                    <el-input
                        v-model="editForm.images"
                        type="textarea"
                        :rows="3"
                        placeholder="多个图片URL用逗号分隔"
                    />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="editDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleSubmitEdit" :loading="submitting">
                    保存
                </el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox, type FormInstance, type FormRules } from 'element-plus'
import { getForumPostListApi, getForumPostDetailApi, deleteForumPostApi, updateForumPostApi } from '~/utils/api'

definePageMeta({
    layout: 'super-community',
    middleware: ['super-community']
})

interface Post {
    postId: number
    sectionId: number
    sectionName: string
    userId: number
    userName: string
    userAvatar: string
    title: string
    contentSummary?: string
    firstImage?: string
    viewCount: number
    likeCount: number
    commentCount: number
    isTop: number
    isEssence: number
    isLiked?: boolean
    isCollected?: boolean
    createTime: string
}

interface PostDetail extends Post {
    content: string
    images?: string
    collectCount: number
    updateTime: string
}

const config = useRuntimeConfig()
const userStore = useUserStore()

const loading = ref(false)
const detailLoading = ref(false)
const submitting = ref(false)
const postList = ref<Post[]>([])
const currentPost = ref<PostDetail | null>(null)
const detailDialogVisible = ref(false)
const editDialogVisible = ref(false)
const editFormRef = ref<FormInstance>()

const queryForm = reactive({
    pageNo: 1,
    pageSize: 10,
    sectionId: undefined as number | undefined,
    keyword: '',
    isEssence: undefined as number | undefined,
    sortBy: 'latest'
})

const pagination = reactive({
    current: 1,
    size: 10,
    total: 0
})

const editForm = reactive({
    postId: 0,
    title: '',
    content: '',
    images: ''
})

const editRules: FormRules = {
    title: [{ required: true, message: '请输入帖子标题', trigger: 'blur' }],
    content: [{ required: true, message: '请输入帖子内容', trigger: 'blur' }]
}

// 获取帖子列表
const fetchPostList = async () => {
    loading.value = true
    try {
        queryForm.pageNo = pagination.current
        queryForm.pageSize = pagination.size

        const response = await getForumPostListApi({
            ...queryForm,
            sectionId: queryForm.sectionId || undefined,
            isEssence: queryForm.isEssence !== undefined ? queryForm.isEssence : undefined
        })

        if (response.code === 200 && response.data) {
            postList.value = response.data.records || []
            pagination.total = response.data.total || 0
        } else {
            ElMessage.error(response.message || '获取帖子列表失败')
        }
    } catch (error) {
        console.error('获取帖子列表失败:', error)
        ElMessage.error('获取帖子列表失败')
    } finally {
        loading.value = false
    }
}

// 查看详情
const handleViewDetail = async (post: Post) => {
    currentPost.value = null
    detailDialogVisible.value = true
    detailLoading.value = true

    try {
        const response = await getForumPostDetailApi(post.postId)
        if (response.code === 200 && response.data) {
            currentPost.value = response.data
        } else {
            ElMessage.error(response.message || '获取帖子详情失败')
            detailDialogVisible.value = false
        }
    } catch (error) {
        console.error('获取帖子详情失败:', error)
        ElMessage.error('获取帖子详情失败')
        detailDialogVisible.value = false
    } finally {
        detailLoading.value = false
    }
}

// 编辑帖子
const handleEdit = async (post: Post) => {
    // 先获取详情
    try {
        const response = await getForumPostDetailApi(post.postId)
        if (response.code === 200 && response.data) {
            editForm.postId = response.data.postId
            editForm.title = response.data.title
            editForm.content = response.data.content
            editForm.images = response.data.images || ''
            editDialogVisible.value = true
        } else {
            ElMessage.error(response.message || '获取帖子详情失败')
        }
    } catch (error) {
        console.error('获取帖子详情失败:', error)
        ElMessage.error('获取帖子详情失败')
    }
}

// 提交编辑
const handleSubmitEdit = async () => {
    if (!editFormRef.value) return

    await editFormRef.value.validate(async (valid) => {
        if (!valid) return

        submitting.value = true
        try {
            const response = await updateForumPostApi(editForm.postId, {
                title: editForm.title,
                content: editForm.content,
                images: editForm.images
            })

            if (response.code === 200) {
                ElMessage.success('更新成功')
                editDialogVisible.value = false
                fetchPostList()
            } else {
                ElMessage.error(response.message || '更新失败')
            }
        } catch (error) {
            console.error('更新失败:', error)
            ElMessage.error('更新失败')
        } finally {
            submitting.value = false
        }
    })
}

// 删除帖子
const handleDelete = async (post: Post) => {
    try {
        await ElMessageBox.confirm(
            `确定要删除帖子"${post.title}"吗？此操作不可恢复！`,
            '警告',
            {
                confirmButtonText: '确定删除',
                cancelButtonText: '取消',
                type: 'error'
            }
        )

        const response = await deleteForumPostApi(post.postId)
        if (response.code === 200) {
            ElMessage.success('删除成功')
            fetchPostList()
        } else {
            ElMessage.error(response.message || '删除失败')
        }
    } catch (error: any) {
        if (error !== 'cancel') {
            console.error('删除失败:', error)
            ElMessage.error('删除失败')
        }
    }
}

// 搜索
const handleSearch = () => {
    pagination.current = 1
    fetchPostList()
}

// 重置
const handleReset = () => {
    Object.assign(queryForm, {
        sectionId: undefined,
        keyword: '',
        isEssence: undefined,
        sortBy: 'latest'
    })
    pagination.current = 1
    fetchPostList()
}

onMounted(() => {
    fetchPostList()
})
</script>

<style scoped>
:deep(.el-table) {
    @apply text-slate-700 dark:text-slate-300;
}

:deep(.el-table th) {
    @apply bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300;
}

:deep(.el-table tr) {
    @apply bg-white dark:bg-slate-800;
}

:deep(.el-table tr:hover > td) {
    @apply bg-slate-50 dark:bg-slate-700;
}

:deep(.el-pagination) {
    @apply text-slate-700 dark:text-slate-300;
}

.prose {
    @apply text-slate-700 dark:text-slate-300;
}
</style>

