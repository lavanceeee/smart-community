interface UserInfo {
  userId: string;
  phone: string;
  email: string;
  avatar: string;
  gender: string;
  age: number;
  userType: number;
  status: number;
  userName: string;
}

export const useUserStore = defineStore('user', () => {
  const token = ref<string | null>(null);
  const userInfo = ref<UserInfo | null>(null);

  const isLoggedIn = computed(() => !!token.value)
  const displayName = computed(() => userInfo.value?.userName)

  function setLoginState(newToken: string, newUser: UserInfo) {
    token.value = newToken
    userInfo.value = newUser
  }

  function logout() {
    token.value = null
    userInfo.value = null
    // Clean up local storage persistence if needed, though setting to null usually suffices with persist plugin
  }

  return {
    token,
    userInfo,
    isLoggedIn,
    displayName,
    setLoginState,
    logout,
  }
}, {
  persist: true,

}
)