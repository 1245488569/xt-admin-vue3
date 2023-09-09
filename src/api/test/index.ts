import { get } from '@/request'

export function loginApi() {
  return get('/login')
}

export function permissionApi() {
  return get('/user/permission')
}

export function backendRoutesApi() {
  return get('/user/backend')
}
