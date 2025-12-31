export const useAuth = () => {
  const loading = ref(false);
  const error = ref(null);

  const registerAction = async (formData: any) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await registerUser(formData);
      return res;
    } catch (e: any) {
      error.value = e.message;
      throw e;
    } finally {
      loading.value = false;
    }
  };

  //登录逻辑
  const loginAction = async (credentials: any) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await loginUser(credentials) as any;
      const token = res?.data?.token;
      const userInfo = res?.data?.userInfo || {};

      if (!token) {
        throw new Error("Missing token in login response");
      }

      const userStore = useUserStore();
      userStore.setLoginState(token, userInfo);
      return res;
    } catch (e: any) {
      error.value = e.message;
      throw e;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    registerAction,
    loginAction,
  };
};
