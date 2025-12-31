interface UserInfo {
  userId: string;
  phone: string;
  emial: string;
  avatar: string;
  gender: string;
  age: number;
  userType: number;
  status: number;
  userName: string;
}

export const useUserStore = defineStore('user', ()=> {
  const token = ref<string | null>(null);
  const userInfo = ref<UserInfo | null>(null);

  const isLoggedIn = computed(() => !!token.value)
  const displayName = computed(() => userInfo.value?.userName)

  function setLoginState(newToken: string, newUser: UserInfo) {
    token.value = newToken
    userInfo.value = newUser
  }

  return {
    token,
    userInfo,
    isLoggedIn,
    displayName,
    setLoginState,
  }
})