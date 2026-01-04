<template>
    <div class="min-h-screen bg-[#f5f7fa] dark:bg-slate-900 pb-12">
        <!-- Header -->
        <TopBar @create="openCreateModal" />

        <div class="max-w-[1000px] mx-auto px-4">
            <!-- Loading Skeleton -->
            <div v-if="loading" class="grid gap-4">
                <div v-for="i in 4" :key="i" class="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm animate-pulse">
                    <div class="flex justify-between mb-4">
                        <div class="h-5 bg-slate-100 dark:bg-slate-700 rounded w-1/4"></div>
                        <div class="h-5 bg-slate-100 dark:bg-slate-700 rounded w-16"></div>
                    </div>
                    <div class="space-y-2">
                        <div class="h-4 bg-slate-100 dark:bg-slate-700 rounded w-2/3"></div>
                        <div class="h-4 bg-slate-100 dark:bg-slate-700 rounded w-1/2"></div>
                    </div>
                </div>
            </div>

            <!-- List Content -->
            <div v-else class="space-y-4">
                <div v-for="item in visitorList" :key="item.registerId"
                    class="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700 group">

                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center gap-3">
                            <div
                                class="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Icon name="lucide:user" size="20" />
                            </div>
                            <div>
                                <h3
                                    class="font-medium text-slate-800 dark:text-slate-100 text-lg flex items-center gap-2">
                                    {{ item.visitorName }}
                                    <span
                                        class="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500">
                                        {{ item.visitorPhone }}
                                    </span>
                                </h3>
                                <p class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">来访目的：{{ item.visitPurpose
                                    }}</p>
                            </div>
                        </div>

                        <!-- Status Badge -->
                        <div class="px-3 py-1 rounded-full text-xs font-medium border"
                            :class="statusClass(item.status)">
                            {{ item.statusDesc }}
                        </div>
                    </div>

                    <div
                        class="border-t border-slate-100 dark:border-slate-700 pt-4 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-300">
                        <div class="flex items-center gap-2">
                            <Icon name="lucide:clock" size="14" class="text-slate-400" />
                            <span>放行时间：{{ item.allowTime || '-' }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Icon name="lucide:calendar-clock" size="14" class="text-slate-400" />
                            <span>有效日期：{{ item.validDate || '-' }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Icon name="lucide:edit-3" size="14" class="text-slate-400" />
                            <span>申请时间：{{ item.createTime || '-' }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <Icon name="lucide:check-circle" size="14" class="text-slate-400" />
                            <span>审核时间：{{ item.auditTime || '-' }}</span>
                        </div>
                    </div>

                    <!-- Rejection Reason if any -->
                    <div v-if="item.status === 2 && item.rejectReason"
                        class="mt-4 bg-red-50 dark:bg-red-900/10 p-3 rounded-md text-xs text-red-600 dark:text-red-400 flex items-start gap-2">
                        <Icon name="lucide:alert-circle" size="14" class="mt-0.5 shrink-0" />
                        <span>拒绝原因：{{ item.rejectReason }}</span>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && visitorList.length === 0" class="py-20 text-center">
                <div
                    class="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300 dark:text-slate-500">
                    <Icon name="lucide:clipboard-list" size="40" />
                </div>
                <p class="text-slate-400">暂无访客记录</p>
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex justify-center pb-12">
                <el-pagination v-if="total > 0" background layout="prev, pager, next" :total="total"
                    :page-size="pagination.pageSize" :current-page="pagination.pageNum"
                    @current-change="handlePageChange" class="custom-pagination" />
            </div>
        </div>

        <!-- Create Modal -->
        <el-dialog v-model="modalVisible" title="新建访客登记" width="500px" :close-on-click-modal="false"
            class="custom-dialog">
            <el-form label-position="top" :model="form" :rules="rules" ref="formRef">
                <el-form-item label="访客姓名" prop="visitorName">
                    <el-input v-model="form.visitorName" placeholder="请输入访客姓名" />
                </el-form-item>
                <el-form-item label="访客电话" prop="visitorPhone">
                    <el-input v-model="form.visitorPhone" placeholder="请输入访客电话" />
                </el-form-item>
                <el-form-item label="来访目的" prop="visitPurpose">
                    <el-input v-model="form.visitPurpose" type="textarea" placeholder="请输入来访目的" />
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="放行时间" prop="allowTime">
                            <input v-model="form.allowTime" type="datetime-local"
                                class="w-full h-[32px] px-3 border border-[#dcdfe6] rounded bg-white dark:bg-slate-900 dark:border-slate-700 focus:border-[#ff5000] outline-none transition-colors text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="有效期至" prop="validDate">
                            <input v-model="form.validDate" type="datetime-local"
                                class="w-full h-[32px] px-3 border border-[#dcdfe6] rounded bg-white dark:bg-slate-900 dark:border-slate-700 focus:border-[#ff5000] outline-none transition-colors text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400" />
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="modalVisible = false">取消</el-button>
                    <el-button type="primary" :loading="createLoading" @click="handleSubmit">提交登记</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import TopBar from '~/components/Visitors/TopBar.vue'
const { visitorList, total, loading, pagination, fetchVisitorList, handlePageChange, createVisitor } = useVisitorList()

useHead({
    title: '访客登记列表 - 智慧社区'
})

// Modal & Form
const modalVisible = ref(false)
const createLoading = ref(false)
const formRef = ref()

const form = reactive({
    visitorName: '',
    visitorPhone: '',
    visitPurpose: '',
    allowTime: '',
    validDate: ''
})

const rules = {
    visitorName: [{ required: true, message: '请输入访客姓名', trigger: 'blur' }],
    visitorPhone: [{ required: true, message: '请输入访客电话', trigger: 'blur' }],
    visitPurpose: [{ required: true, message: '请输入来访目的', trigger: 'blur' }],
    allowTime: [{ required: true, message: '请选择放行时间', trigger: 'change' }],
    validDate: [{ required: true, message: '请选择有效期', trigger: 'change' }]
}

onMounted(() => {
    console.log('Visitor page mounted')
    fetchVisitorList()
})

const openCreateModal = () => {
    // Reset form
    form.visitorName = ''
    form.visitorPhone = ''
    form.visitPurpose = ''
    form.allowTime = ''
    form.validDate = ''

    modalVisible.value = true
}

const handleSubmit = async () => {
    if (!formRef.value) return

    await formRef.value.validate(async (valid: boolean) => {
        if (valid) {
            createLoading.value = true

            // Format datetime-local string (YYYY-MM-DDTHH:mm) to backend format (YYYY-MM-DD HH:mm:ss)
            const submitData = {
                ...form,
                allowTime: form.allowTime ? form.allowTime.replace('T', ' ') + ':00' : '',
                validDate: form.validDate ? form.validDate.replace('T', ' ') + ':00' : ''
            }

            const success = await createVisitor(submitData)
            createLoading.value = false

            if (success) {
                modalVisible.value = false
            }
        }
    })
}

const statusClass = (status: number) => {
    switch (status) {
        case 0: // 待审核
            return 'bg-orange-50 border-orange-100 text-orange-600 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-400'
        case 1: // 已通过
            return 'bg-green-50 border-green-100 text-green-600 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400'
        case 2: // 已拒绝
            return 'bg-red-50 border-red-100 text-red-600 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
        default:
            return 'bg-slate-50 border-slate-100 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'
    }
}
</script>

<style scoped>
:deep(.custom-pagination .el-pager li.is-active) {
    background-color: #ff5000 !important;
}

:deep(.custom-pagination .el-pager li:hover) {
    color: #ff5000 !important;
}

/* Customize Element Plus Dialog to match theme partially if needed */
:deep(.el-button--primary) {
    background-color: #ff5000;
    border-color: #ff5000;
}

:deep(.el-button--primary:hover) {
    background-color: #ff3d00;
    border-color: #ff3d00;
}
</style>