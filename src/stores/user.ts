import type { Ipermissions } from './types/permission'
import { backendRoutesApi, loginApi, permissionApi } from '@/api/test'
import { STORAGE_PREFIX, USER } from '@/config/cache'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref(null)
  const permissions = ref<Ipermissions>([])

  const getToken = computed(() => token.value)

  // 登录
  function login() {
    return loginApi().then((res) => {
      token.value = res.result.token
      userInfo.value = res.result
    })
  }

  // 获取权限
  function getPermissions() {
    return permissionApi().then((res) => {
      permissions.value = res.result.permissions
      return permissions.value
    })
  }

  // 后端路由
  function getBackendRoutes() {
    return backendRoutesApi().then((res) => {
      permissions.value = res.result.permissions
      return res.result.backendRoutes
    })
  }

  return { token, userInfo, getToken, login, getPermissions, getBackendRoutes }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${USER}`,
    paths: ['token', 'userInfo'],
    storage: localStorage,
  },
})
