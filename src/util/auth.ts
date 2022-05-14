import { useAppConfigStore } from '@/store/app'
import { useUserStore } from '@/store/user'

function hasPermission(permission: string) {
  const useAppConfig = useAppConfigStore()
  const useUser = useUserStore()
  if (useAppConfig.getEnablePermission) {
    return useUser.permissions.some(v => v === permission)
  } else {
    return true
  }
}

export function auth(value: string | string[]) {
  let auth: boolean
  if (typeof value === 'string') {
    auth = hasPermission(value)
  } else {
    auth = value.some(item => {
      return hasPermission(item)
    })
  }
  return auth
}

export function authAll(value: string[]) {
  const auth = value.every(item => hasPermission(item))
  return auth
}
