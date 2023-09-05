import type { Ipermissions } from './types/permission'
import { loginApi, permissionApi } from '@/api/test'
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

  return { token, userInfo, getToken, login, getPermissions }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${USER}`,
    paths: ['token', 'userInfo'],
    storage: localStorage,
  },
})
