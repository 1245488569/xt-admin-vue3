import { loginApi } from '@/api/test'
import { STORAGE_PREFIX, USER } from '@/config/cache'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const userInfo = ref(null)

  // 登录
  function login() {
    return loginApi().then((res) => {
      token.value = res.result.token
      userInfo.value = res.result
    })
  }
  return { token, userInfo, login }
}, {
  persist: {
    key: `${STORAGE_PREFIX}${USER}`,
    paths: ['token', 'userInfo'],
    storage: localStorage,
  },
})