export interface ILoginResult {
  name: string
  age: number,
  token: string
}

export interface IPermissionsResult {
  permissions: string []
}

export interface IBackendResult {
  backendRoutes: any[]
  permissions: string []
}
