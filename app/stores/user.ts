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

interface UserRole {
  roleId: number;
  roleName: string;
  roleCode: string;
  description: string;
  status: number;
}

interface UserPermission {
  permissionId: number;
  permissionName: string;
  permissionCode: string;
  description: string;
  status: number;
}

export const useUserStore = defineStore('user', () => {
  const token = ref<string | null>(null);
  const userInfo = ref<UserInfo | null>(null);
  const userRole = ref<UserRole | null>(null);
  const userPermissions = ref<UserPermission[] | null>(null);

  const isLoggedIn = computed(() => !!token.value)
  const displayName = computed(() => userInfo.value?.userName)

  function setLoginState(newToken: string, newUser: UserInfo) {
    token.value = newToken
    userInfo.value = newUser
  }

  function setRole(newRole: UserRole) {
    userRole.value = newRole;
  }

  function setPermissions(newPermissions: UserPermission[]) {
    userPermissions.value = newPermissions;
  }

  function logout() {
    token.value = null
    userInfo.value = null

    userRole.value = null;
    userPermissions.value = null;
    // Clean up local storage persistence if needed, though setting to null usually suffices with persist plugin
  }

  return {
    token,
    userInfo,
    isLoggedIn,
    displayName,
    setLoginState,
    setRole,
    setPermissions,
    logout,
    userRole,
    userPermissions
  }
}, {
  persist: true,

}
)