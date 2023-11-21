import { useAppConfigStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'

function hasPermission(permission: string) {
  const useAppConfig = useAppConfigStore()
  const useUser = useUserStore()

  if (useAppConfig.getEnablePermission)
    return useUser.permissions.includes(permission)

  else
    return true
}

export default function useAuth() {
  function auth(value: string | string[]) {
    if (!value)
      return true

    let auth: boolean
    if (typeof value === 'string')
      auth = hasPermission(value)

    else
      auth = value.some(item => hasPermission(item))

    return auth
  }

  function authAll(value: string[]) {
    return value.length ? value.every(item => hasPermission(item)) : true
  }

  return {
    auth,
    authAll,
  }
}
