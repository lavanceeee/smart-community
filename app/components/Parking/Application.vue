<template>
    <el-dialog v-model="visible" title="申请车位登记" width="500px" :close-on-click-modal="false" class="custom-dialog">
        <el-form label-position="top" :model="form" :rules="rules" ref="formRef">
            <el-form-item label="车位编号">
                <el-input v-model="form.spaceNo" disabled placeholder="车位编号" />
            </el-form-item>
            <el-form-item label="车牌号码" prop="carNumber">
                <el-input v-model="form.carNumber" placeholder="请输入车牌号码" />
            </el-form-item>
            <el-form-item label="申请人姓名" prop="userName">
                <el-input v-model="form.userName" placeholder="请输入申请人姓名" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="visible = false">取消</el-button>
                <el-button type="primary" :loading="loading" @click="handleSubmit">提交申请</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">

const userStore = useUserStore()

const { createParkingApplication, isFetching: loading } = useParking()

const emit = defineEmits(['success'])
const visible = ref(false)
const formRef = ref()

const form = reactive({
    spaceNo: '',
    carNumber: '',
    userName: userStore.userInfo?.userName || ''
})

const rules = {
    carNumber: [{ required: true, message: '请输入车牌号码', trigger: 'blur' }],
    userName: [{ required: true, message: '请输入申请人姓名', trigger: 'blur' }]
}

const open = (spaceNo: string) => {
    form.spaceNo = spaceNo
    form.carNumber = ''
    form.userName = userStore.userInfo?.userName || ''
    visible.value = true
}

const handleSubmit = async () => {
    if (!formRef.value) return

    await formRef.value.validate(async (valid: boolean) => {
        if (valid) {
            const success = await createParkingApplication(form)
            if (success) {
                visible.value = false
                emit('success')
            }
        }
    })
}

defineExpose({ open })
</script>

<style scoped>
:deep(.el-button--primary) {
    background-color: #ff5000;
    border-color: #ff5000;
}

:deep(.el-button--primary:hover) {
    background-color: #ff3d00;
    border-color: #ff3d00;
}
</style>