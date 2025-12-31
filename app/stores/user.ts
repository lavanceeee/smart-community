interface UserInfo {
  id: string;
  username: string;
  avatar: string;
  nickname: string;
}



export const useUserStore = defineStore('user', ()=> {
  const token = ref<string | null>(null);
  const userInfo = ref<UserInfo | null>(null);

  const isLoggedIn = computed(() => !!token.value)
  const displayName = computed(() => userInfo.value?.nickname || userInfo.value?.username || '未登录')

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