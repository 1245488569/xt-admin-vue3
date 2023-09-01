import type { RouteMeta } from 'vue-router'
import router from '@/router'

export interface ITabbarItem {
  fullPath: string
  meta: RouteMeta
  name: string
}

export type ITabbarRemoveType = 'self' | 'otherOnce' | 'right' | 'left' | 'otherAll'

export const useTabbarStore = defineStore('tabbar', () => {
  const list = ref<ITabbarItem[]>([])

  function add(tab: ITabbarItem) {
    if (tab.meta.mergeTabbarPath) {
      // TODO: mergeTabbarPath
      // ...
    }
    else {
      const isFind = list.value.some(item => item.fullPath === tab.fullPath)
      if (!isFind) {
        // TODO: mergeTabbarPath是否在tabbar中
        // ...
        list.value.push(tab)
      }
    }
  }

  function remove(type: ITabbarRemoveType, clickIndex: number, activeIndex: number) {
    // TODO: 有缓存需要清除缓存
    // ...

    switch (type) {
      case 'self':
        if (clickIndex < list.value.length - 1)
          router.push(list.value[clickIndex + 1].fullPath)
        else
          router.push(list.value[clickIndex - 1].fullPath)
        list.value.splice(clickIndex, 1)
        break
      case 'otherOnce':
        list.value.splice(clickIndex, 1)
        break
      case 'left':
        if (activeIndex < clickIndex)
          router.push(list.value[clickIndex].fullPath)
        list.value.splice(0, clickIndex)
        break
      case 'right':
        if (activeIndex > clickIndex)
          router.push(list.value[clickIndex].fullPath)
        list.value.splice(clickIndex + 1, list.value.length - (clickIndex + 1))
        break
      case 'otherAll':
        if (activeIndex !== clickIndex)
          router.push(list.value[clickIndex].fullPath)
        list.value = list.value.filter(item => item.fullPath === list.value[clickIndex].fullPath)
        break
    }
  }

  return { list, add, remove }
})
