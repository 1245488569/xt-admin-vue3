import type { RouteMeta } from 'vue-router'
import { useKeepAliveStore } from './keepAlive'
import router from '@/router'

export interface ITabbarItem {
  fullPath: string
  meta: RouteMeta
  componentName: string
}

export type ITabbarRemoveType = 'self' | 'otherOnce' | 'right' | 'left' | 'otherAll'

export const useTabbarStore = defineStore('tabbar', () => {
  const list = ref<ITabbarItem[]>([])

  function init() {
    list.value = []
  }

  function add(tab: ITabbarItem) {
    if (tab.meta.mergeTabbarPath) {
      const mergeTabIndex = list.value.findIndex(item => item.fullPath === tab.meta.mergeTabbarPath)
      if (mergeTabIndex !== -1) {
        list.value.splice(mergeTabIndex, 1, tab)
      }
      else {
        for (const item of list.value) {
          if (item.meta.mergeTabbarPath && item.meta.mergeTabbarPath === tab.meta.mergeTabbarPath)
            return
        }
        list.value.push(tab)
      }
    }
    else {
      const isFind = list.value.some(item => item.fullPath === tab.fullPath)
      if (!isFind) {
        const isMergeIndex = list.value.findIndex(item => tab.fullPath === item.meta.mergeTabbarPath)
        if (isMergeIndex !== -1)
          list.value.splice(isMergeIndex, 1, tab)

        else
          list.value.push(tab)
      }
    }
  }

  function remove(type: ITabbarRemoveType, clickIndex: number, activeIndex: number) {
    const useKeepAlive = useKeepAliveStore()
    switch (type) {
      case 'self':
        if (list.value[clickIndex].meta.cache)
          useKeepAlive.remove(list.value[clickIndex].componentName)
        if (clickIndex < list.value.length - 1)
          router.push(list.value[clickIndex + 1].fullPath)
        else
          router.push(list.value[clickIndex - 1].fullPath)
        list.value.splice(clickIndex, 1)
        break
      case 'otherOnce':
        if (list.value[clickIndex].meta.cache)
          useKeepAlive.remove(list.value[clickIndex].componentName)
        list.value.splice(clickIndex, 1)
        break
      case 'left': {
        if (activeIndex < clickIndex)
          router.push(list.value[clickIndex].fullPath)
        const leftRemoveArr = list.value.splice(0, clickIndex)
        leftRemoveArr.forEach((item) => {
          if (item.meta.cache)
            useKeepAlive.remove(item.componentName)
        })
        break
      }
      case 'right': {
        if (activeIndex > clickIndex)
          router.push(list.value[clickIndex].fullPath)
        const rightRemoveArr = list.value.splice(clickIndex + 1, list.value.length - (clickIndex + 1))
        rightRemoveArr.forEach((item) => {
          if (item.meta.cache)
            useKeepAlive.remove(item.componentName)
        })
        break
      }
      case 'otherAll': {
        if (activeIndex !== clickIndex)
          router.push(list.value[clickIndex].fullPath)
        const otherAllRemoveArr = list.value.filter(item => item.fullPath !== list.value[clickIndex].fullPath)
        otherAllRemoveArr.forEach((item) => {
          if (item.meta.cache)
            useKeepAlive.remove(item.componentName)
        })
        list.value = list.value.filter(item => item.fullPath === list.value[clickIndex].fullPath)
        break
      }
    }
  }

  return { list, init, add, remove }
})
