import { RouteRecordRaw } from 'vue-router'

export interface IPrivateRoute {
  title: string
  icon: string
  parentIndex?: number
  children: RouteRecordRaw[]
}
