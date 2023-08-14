import type { RouteRecordRaw } from 'vue-router'

export interface IPrivateRoutes {
  title: string
  icon: string
  parentIndex?: number
  children: RouteRecordRaw[]
}
