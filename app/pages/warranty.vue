<template>
  <div class="repair-container">
    <!-- 报修表单卡片 -->
    <div class="repair-card">
      <h2 class="repair-title">东软智慧社区 - 居民报修服务</h2>

      <!-- 物业联系电话（仅显示） -->
      <div class="property-contact">
        <span class="contact-label">物业紧急联系电话：</span>
        <span class="contact-phone">{{ propertyPhone }}</span>
      </div>

      <!-- 报修表单 -->
      <form @submit.prevent="handleSubmitRepair" class="repair-form">
        <!-- 社区门牌号输入 -->
        <div class="form-item">
          <label class="form-label">社区门牌号：</label>
          <input
            type="text"
            v-model="repairForm.houseNumber"
            placeholder="请输入详细门牌号（如：1栋2单元301室）"
            class="form-input"
          />
          <p class="error-tip" v-show="tips.houseNumberTip">{{ tips.houseNumberTip }}</p>
        </div>

        <!-- 用户手机号码输入 -->
        <div class="form-item">
          <label class="form-label">联系手机号码：</label>
          <input
            type="tel"
            v-model="repairForm.userPhone"
            placeholder="请输入您的11位联系电话"
            class="form-input"
          />
          <p class="error-tip" v-show="tips.userPhoneTip">{{ tips.userPhoneTip }}</p>
        </div>

        <!-- 报修设施状况输入 -->
        <div class="form-item">
          <label class="form-label">报修设施状况：</label>
          <textarea
            v-model="repairForm.facilityStatus"
            placeholder="请详细描述报修设施的问题（如：厨房水龙头漏水、客厅电灯不亮等）"
            class="form-textarea"
            rows="4"
          ></textarea>
          <p class="error-tip" v-show="tips.facilityStatusTip">{{ tips.facilityStatusTip }}</p>
        </div>

        <!-- 报修时间选择 -->
        <div class="form-item time-select-item">
          <label class="form-label">预约报修时间：</label>
          
          <!-- 日期选择（今天/明天/后天） -->
          <div class="time-group">
            <span class="time-subtitle">选择日期：</span>
            <div class="time-options date-options">
              <label class="time-option">
                <input
                  type="radio"
                  v-model="repairForm.repairDate"
                  value="today"
                />
                今天
              </label>
              <label class="time-option">
                <input
                  type="radio"
                  v-model="repairForm.repairDate"
                  value="tomorrow"
                />
                明天
              </label>
              <label class="time-option">
                <input
                  type="radio"
                  v-model="repairForm.repairDate"
                  value="dayAfterTomorrow"
                />
                后天
              </label>
            </div>
          </div>

          <!-- 时段选择（上午/下午/晚上） -->
          <div class="time-group">
            <span class="time-subtitle">选择时段：</span>
            <div class="time-options period-options">
              <label class="time-option">
                <input
                  type="radio"
                  v-model="repairForm.repairPeriod"
                  value="morning"
                />
                上午
              </label>
              <label class="time-option">
                <input
                  type="radio"
                  v-model="repairForm.repairPeriod"
                  value="afternoon"
                />
                下午
              </label>
              <label class="time-option">
                <input
                  type="radio"
                  v-model="repairForm.repairPeriod"
                  value="evening"
                />
                晚上
              </label>
            </div>
          </div>

          <!-- 时间选择错误提示 -->
          <p class="error-tip" v-show="tips.timeTip">{{ tips.timeTip }}</p>
        </div>

        <!-- 提交按钮 -->
        <button type="submit" class="repair-btn">提交报修申请</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // 物业联系电话（固定显示，可后续从配置文件读取）
      propertyPhone: '1234567890',
      // 报修表单数据模型
      repairForm: {
        houseNumber: '', // 社区门牌号
        userPhone: '', // 用户联系手机号码
        facilityStatus: '', // 报修设施状况
        repairDate: '', // 报修日期：today/tomorrow/dayAfterTomorrow
        repairPeriod: '' // 报修时段：morning/afternoon/evening
      },
      // 表单验证提示信息
      tips: {
        houseNumberTip: '',
        userPhoneTip: '',
        facilityStatusTip: '',
        timeTip: ''
      }
    };
  },
  methods: {
    // 表单验证核心方法
    validateForm() {
      let isPass = true;
      const { houseNumber, userPhone, facilityStatus, repairDate, repairPeriod } = this.repairForm;
      const phoneReg = /^1[3-9]\d{9}$/; // 手机号正则验证

      // 重置所有提示
      Object.keys(this.tips).forEach(key => {
        this.tips[key] = '';
      });

      // 验证社区门牌号
      if (!houseNumber.trim()) {
        this.tips.houseNumberTip = '社区门牌号不能为空，请输入详细地址';
        isPass = false;
      }

      // 验证用户手机号码
      if (!userPhone) {
        this.tips.userPhoneTip = '联系手机号码不能为空';
        isPass = false;
      } else if (!phoneReg.test(userPhone)) {
        this.tips.userPhoneTip = '请输入有效的11位手机号码';
        isPass = false;
      }

      // 验证报修设施状况
      if (!facilityStatus.trim()) {
        this.tips.facilityStatusTip = '报修设施状况不能为空，请详细描述问题';
        isPass = false;
      } else if (facilityStatus.trim().length < 5) {
        this.tips.facilityStatusTip = '报修描述过于简略，请补充关键信息（至少5个字）';
        isPass = false;
      }

      // 验证报修时间（日期+时段均需选择）
      if (!repairDate || !repairPeriod) {
        this.tips.timeTip = '请完整选择报修日期和时段';
        isPass = false;
      }

      return isPass;
    },

    // 处理报修提交
    handleSubmitRepair() {
      // 先执行表单验证
      const isValid = this.validateForm();

      if (isValid) {
        // 格式化提交数据（方便阅读和后续对接后端）
        const dateTextMap = {
          today: '今天',
          tomorrow: '明天',
          dayAfterTomorrow: '后天'
        };
        const periodTextMap = {
          morning: '上午',
          afternoon: '下午',
          evening: '晚上'
        };
        const submitData = {
          ...this.repairForm,
          repairDateText: dateTextMap[this.repairForm.repairDate],
          repairPeriodText: periodTextMap[this.repairForm.repairPeriod]
        };

        // 验证通过，打印提交数据（后续可对接后端接口）
        console.log('报修申请提交成功：', submitData);
        alert(`
          东软智慧社区报修申请提交成功！
          门牌号：${submitData.houseNumber}
          联系电话：${submitData.userPhone}
          报修时间：${submitData.repairDateText} ${submitData.repairPeriodText}
          物业将尽快与您联系，感谢您的配合！
        `);

        // 重置表单
        this.repairForm = {
          houseNumber: '',
          userPhone: '',
          facilityStatus: '',
          repairDate: '',
          repairPeriod: ''
        };
      }
    }
  }
};
</script>

<style scoped>
/* 全局容器样式 */
.repair-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
}

/* 报修卡片样式 */
.repair-card {
  width: 100%;
  max-width: 500px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 30px 40px;
  box-sizing: border-box;
}

/* 报修标题样式 */
.repair-title {
  text-align: center;
  color: #1f2937;
  margin: 0 0 20px 0;
  font-size: 22px;
  font-weight: 600;
}

/* 物业联系电话样式 */
.property-contact {
  text-align: center;
  padding: 15px;
  background-color: #f8fafc;
  border-radius: 8px;
  margin-bottom: 30px;
  font-size: 15px;
}

.contact-label {
  color: #374151;
  font-weight: 500;
}

.contact-phone {
  color: #ef4444;
  font-weight: 600;
  margin-left: 8px;
}

/* 表单整体样式 */
.repair-form {
  width: 100%;
}

/* 表单项样式 */
.form-item {
  margin-bottom: 20px;
  width: 100%;
}

/* 表单标签样式 */
.form-label {
  display: block;
  color: #374151;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
}

/* 表单输入框样式 */
.form-input {
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.1);
}

/* 文本域样式 */
.form-textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  resize: none; /* 禁止拉伸文本域 */
  line-height: 1.5;
}

.form-textarea:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.1);
}

/* 错误提示样式 */
.error-tip {
  margin: 6px 0 0 0;
  color: #ef4444;
  font-size: 12px;
  line-height: 1.4;
}

/* 时间选择项特殊样式 */
.time-select-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.time-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.time-subtitle {
  color: #4b5563;
  font-size: 13px;
  font-weight: 500;
}

.time-options {
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 4px 0;
}

.time-option {
  display: flex;
  align-items: center;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
}

.time-option input {
  margin-right: 6px;
  cursor: pointer;
}

/* 提交按钮样式 */
.repair-btn {
  width: 100%;
  height: 48px;
  background-color: #f5a329;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.repair-btn:hover {
  background-color: #ff8102;
}

/* 响应式适配（小屏幕手机） */
@media (max-width: 480px) {
  .repair-card {
    padding: 20px 25px;
  }

  .time-options {
    gap: 16px;
  }
}
</style>