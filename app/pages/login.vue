<template>
  <div class="min-h-screen bg-[#f0f2f5] flex flex-col font-sans">
    <header
      class="w-full max-w-[1200px] mx-auto py-6 px-4 flex justify-between items-center"
    >
      <div class="text-[#ff5000] text-3xl font-extrabold tracking-tighter">
        Neuedu<span class="text-2xl ml-2">智慧社区</span>
      </div>
      <div class="flex gap-4 text-xs text-slate-500 cursor-pointer">
        <span class="hover:text-[#ff5000]">网站无障碍</span>
        <span class="hover:text-[#ff5000]">"登录页面"改进建议</span>
      </div>
    </header>

    <main class="flex-1 flex justify-center items-center pb-20">
      <div
        class="bg-white w-[950px] h-[500px] rounded-[20px] shadow-2xl shadow-slate-200/50 flex p-10 relative"
      >
        <div
          class="flex-1 flex flex-col items-center justify-center border-r border-slate-100 pr-10"
        >
          <h2 class="text-lg font-bold text-slate-700 mb-8">手机扫码登录</h2>

          <div
            class="w-40 h-40 border border-slate-200 rounded-lg p-2 bg-white relative group cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            <div
              class="w-full h-full bg-slate-800 flex items-center justify-center text-white text-xs"
            >
              QR CODE
            </div>
          </div>

          <p
            class="mt-6 text-sm text-slate-500 hover:text-[#ff5000] cursor-pointer"
          >
            打开 <span class="text-[#ff5000]">淘宝APP</span> — 点击左上角扫一扫
          </p>
        </div>

        <div class="flex-1 pl-10 flex flex-col justify-center">
          <div class="flex items-center gap-6 mb-8 text-lg">
            <button
              class="font-bold text-slate-800 border-b-2 border-transparent hover:text-[#ff5000]"
            >
              密码登录
            </button>
            <button class="text-slate-500 hover:text-[#ff5000]">
              短信登录
            </button>
          </div>

          <form class="space-y-5" @submit.prevent="handleLogin">
            <div class="relative group">
              <div
                class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="用户手机号"
                v-model="form.phone"
                class="w-full bg-[#e8f0fe] text-slate-700 h-12 pl-10 pr-4 rounded-md outline-none focus:ring-1 focus:ring-[#ff5000] placeholder:text-slate-400 text-sm transition-all"
              />
            </div>

            <div class="relative">
              <div
                class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="password"
                v-model="form.password"
                placeholder="登录密码"
                class="w-full bg-[#e8f0fe] text-slate-700 h-12 pl-10 pr-4 rounded-md outline-none focus:ring-1 focus:ring-[#ff5000] placeholder:text-slate-400 text-sm transition-all"
              />
            </div>

            <el-button
              native-type="submit"
              type="primary"
              :loading="loading"
              class="!w-full !bg-[#ff5000] !hover:bg-[#ff4000] text-white !font-bold !h-11 !rounded-md text-base !shadow-lg !shadow-orange-200 !transition-colors"
            >
              {{ loading ? "登录中，请稍后..." : "登录" }}
            </el-button>

            <div class="flex justify-between text-xs text-slate-500 mt-2">
              <div class="flex gap-2">
                <a href="#" class="hover:text-[#ff5000]">支付宝登录</a>
                <span class="text-slate-300">|</span>
                <a href="#" class="hover:text-[#ff5000]">微博登录</a>
              </div>
              <div class="flex gap-4">
                <a href="#" class="hover:text-[#ff5000]">忘记密码</a>
                <nuxt-link to="register" class="hover:text-[#ff5000]"
                  >免费注册</nuxt-link
                >
              </div>
            </div>

            <div class="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                class="mt-1 w-4 h-4 rounded border-gray-300 text-[#ff5000] focus:ring-[#ff5000]"
                v-model="form.agreed"
                />
              <p class="text-xs text-slate-400 leading-tight">
                已阅读并同意以下协议
                <a href="#" class="text-slate-500 hover:text-[#ff5000]"
                  >淘宝平台服务协议</a
                >、<a href="#" class="text-slate-500 hover:text-[#ff5000]"
                  >隐私权政策</a
                >、<a href="#" class="text-slate-500 hover:text-[#ff5000]"
                  >法律声明</a
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  phone: "",
  password: "",
  agreed: false,
});

const { loginAction, loading } = useAuth();

const handleLogin = async () => {
  if (!form.agreed) {
    ElMessage.error("请先同意服务条款");
    return;
  }

  if (!form.phone || !form.password) {
    ElMessage.error("填写字段不完整");
    return;
  }

  try {
    await loginAction(form);

    await navigateTo("/");
  } catch (err: any) {
    ElNotification({
      title: "登录失败",
      message: err,
      type: "error",
    });
  }
};
</script>
