import xtRequest from '@/service/index'
import { IResponseDataType } from '@/service/types'
import { IBackendResult, ILoginResult, IPermissionsResult } from './type'

export function testApi() {
  return xtRequest.get<IResponseDataType>({
    url: 'test'
  })
}

export function loginApi() {
  return xtRequest.get<IResponseDataType<ILoginResult>>({
    url: 'login'
  })
}

export function permissionApi() {
  return xtRequest.get<IResponseDataType<IPermissionsResult>>({
    url: 'user/permission'
  })
}

export function backendRoutesApi() {
  return xtRequest.get<IResponseDataType<IBackendResult>>({
    url: 'user/backend'
  })
}

export function logoutApi() {
  return xtRequest.get<IResponseDataType>({
    url: 'logout'
  })
}

export function tableListApi(data) {
  return xtRequest.post<IResponseDataType>({
    url: 'list',
    data
  })
}
