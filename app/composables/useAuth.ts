export const useAuth = () => {
  const loading = ref(false);
  const error = ref(null);
  const token = useCookie("auth_token", { maxAge: 60 * 60 * 24 * 7 });

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

    try {
      const res = await loginUser(credentials);

      if (res.data?.token) {
        token.value = res.data.token;
      }
    } catch (e: any) {
      throw e;
    } finally {
      loading.value = false;
    }
  };



  

  return {
    loading,
    error,
    registerAction,
    loginAction
  };
};
