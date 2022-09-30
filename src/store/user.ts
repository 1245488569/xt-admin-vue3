import { defineStore } from 'pinia'
import { piniaStore } from '@/store'
import { LocalStorageService } from '@/util/storage'
import { STORAGE_PREFIX, USER } from '@/enums/cacheEnum'
import {
  backendRoutesApi,
  loginApi,
  logoutApi,
  permissionApi
} from '@/api/test'
import { useTabbarStore } from './tabbar'
import { useKeepAliveStore } from './keepAlive'
import { usePermissionsStore } from './permission'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: LocalStorageService.get(USER)?.token || '',
    userInfo: LocalStorageService.get(USER)?.userInfo || null,
    permissions: [] as string[]
  }),

  getters: {
    getToken(): string {
      return this.token
    }
  },

  actions: {
    login() {
      return new Promise((resolve, reject) => {
        loginApi()
          .then(res => {
            this.userInfo = res.result
            this.token = res.result.token
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 获取权限
    getPermissions(): Promise<string[]> {
      return new Promise(resolve => {
        permissionApi().then(res => {
          this.permissions = res.result.permissions
          resolve(res.result.permissions)
        })
      })
    },
    // 获取后端路由及按钮权限（需要类型请自己定义）
    getBackendRoutes(): Promise<any[]> {
      return new Promise(resolve => {
        backendRoutesApi().then(res => {
          this.permissions = res.result.permissions
          resolve(res.result.backendRoutes)
        })
      })
    },
    logout() {
      return new Promise(resolve => {
        logoutApi().then(() => {
          const useTabbar = useTabbarStore()
          const useKeepAlive = useKeepAliveStore()
          const usePermissions = usePermissionsStore()
          this.token = ''
          this.userInfo = null
          this.permissions = []
          useTabbar.init()
          useKeepAlive.init()
          usePermissions.init()
          resolve(true)
        })
      })
    }
  },

  // 利用pinia-plugin-persist进行持久化存储
  persist: {
    enabled: true,
    strategies: [
      {
        key: `${STORAGE_PREFIX}${USER}`,
        storage: localStorage,
        paths: ['token', 'userInfo']
      }
    ]
  }
})

export function useUserOutsideStore() {
  return useUserStore(piniaStore)
}
