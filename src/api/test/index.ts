import { get } from '@/request'

export function loginApi() {
  return get('/login')
}
