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

      if (res?.data.code != 200) {
        throw new Error(res?.data.message);
      }

      const token = res?.data?.data?.token;

      const userInfo = {
        userId: res?.data?.data?.userId,
        phone: res?.data?.data?.phone,
        emial: res?.data?.data?.emial,
        avatar: res?.data?.data?.avatar,
        gender: res?.data?.data?.gender,
        age: res?.data?.data?.age,
        userType: res?.data?.data?.userType,
        status: res?.data?.data?.status,
        userName: res?.data?.data?.userName,
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
