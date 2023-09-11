import type { Ipermissions } from './types/permission'
import { useTabbarStore } from './tabbar'
import { usePermissionStore } from './permission'
import { useKeepAliveStore } from './keepAlive'
import { STORAGE_PREFIX, USER } from '@/config/cache'
import { backendRoutesApi, loginApi, logoutApi, permissionApi } from '@/api/test'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref(null)
  const permissions = ref<Ipermissions>([])

  const getToken = computed(() => token.value)

  function init() {
    token.value = ''
    userInfo.value = null
    permissions.value = []
    useTabbarStore().init()
    usePermissionStore().init()
    useKeepAliveStore().init()
  }

  // 登录
  function login() {
    return loginApi().then((res) => {
      token.value = res.result.token
      userInfo.value = res.result
    })
  }

  // 退出登录
  function logout() {
    return logoutApi().then(() => {
      init()
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

  return { token, userInfo, getToken, permissions, login, logout, getPermissions, getBackendRoutes }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${USER}`,
    paths: ['token', 'userInfo'],
    storage: localStorage,
  },
})
