import { defineStore } from 'pinia'
import { piniaStore } from '@/store'
// import { STORAGE_PREFIX, TABBAR } from '@/enums/cacheEnum'
import { TABBAR } from '@/enums/cacheEnum'
import { LocalStorageService } from '@/util/storage'
import { RouteMeta } from 'vue-router'
import router from '@/router'
import { useKeepAliveStore } from './keepAlive'

export interface ITabbarItem {
  fullPath: string
  path: string
  name: string
  meta: RouteMeta
}

export type RemoveType =
  | 'once'
  | 'self'
  | 'otherOnce'
  | 'right'
  | 'left'
  | 'otherAll'

export const useTabbarStore = defineStore('tabbar', {
  state: () => ({
    list: LocalStorageService.get(TABBAR)?.list || []
  }),

  getters: {
    getTabbarList(): ITabbarItem[] {
      return this.list
    }
  },

  actions: {
    init() {
      this.list = []
    },
    add(tab: ITabbarItem) {
      if (tab.meta.mergeTabbarPath) {
        this.merge(tab)
        return
      }
      const isFind = this.list.find(item => item.fullPath === tab.fullPath)
      if (!isFind) {
        const isMergeIndex = this.list.findIndex(
          item => item.meta.mergeTabbarPath === tab.fullPath
        )
        if (isMergeIndex !== -1) {
          this.list.splice(isMergeIndex, 1, tab)
        } else {
          this.list.push(tab)
        }
      }
    },
    merge(tab: ITabbarItem) {
      const mergeTabIndex = this.list.findIndex(
        item => item.fullPath === tab.meta.mergeTabbarPath
      )
      if (mergeTabIndex !== -1) {
        this.list.splice(mergeTabIndex, 1, tab)
      } else {
        this.list.push(tab)
      }
    },
    /**
     * 删除 tab
     * type: once->删除单个 self->删自己 otherOnce->删单个其他 right->删除右侧 left->删除左侧 other->删除其他
     * fullPath 点击的tab的fullPath
     * activeFullPath 当前高亮的tab的fullPath
     */
    remove(fullPath: string, type: RemoveType, activeFullPath: string) {
      const useKeepAlive = useKeepAliveStore()
      const index = this.list.findIndex(item => item.fullPath === fullPath)
      const activeIndex = this.list.findIndex(
        item => item.fullPath === activeFullPath
      )
      switch (type) {
        case 'self':
          if (this.list[index].meta?.cache) {
            useKeepAlive.remove(this.list[index].name)
          }
          if (index < this.list.length - 1) {
            router.push(this.list[index + 1].fullPath)
          } else {
            router.push(this.list[index - 1].fullPath)
          }
          this.list.splice(index, 1)
          break
        case 'otherOnce':
          if (this.list[index].meta?.cache) {
            useKeepAlive.remove(this.list[index].name)
          }
          this.list.splice(index, 1)
          break
        case 'left':
          if (index !== activeIndex && activeIndex < index) {
            router.push(fullPath)
          }
          const leftRemoveArr = this.list.splice(0, index)
          leftRemoveArr.forEach(item => {
            if (item.meta?.cache) {
              useKeepAlive.remove(item.name)
            }
          })
          break
        case 'right':
          if (index !== activeIndex && activeIndex > index) {
            router.push(fullPath)
          }
          const rightRemoveArr = this.list.splice(
            index + 1,
            this.list.length - index + 1
          )
          rightRemoveArr.forEach(item => {
            if (item.meta?.cache) {
              useKeepAlive.remove(item.name)
            }
          })
          break
        case 'otherAll':
          if (index !== activeIndex) {
            router.push(fullPath)
          }
          const otherAllRemoveArr = this.list.filter(
            item => item.fullPath !== fullPath
          )
          otherAllRemoveArr.forEach(item => {
            if (item.meta?.cache) {
              useKeepAlive.remove(item.name)
            }
          })
          this.list = this.list.filter(item => item.fullPath === fullPath)
          break
      }
    }
  }
  // persist: {
  //   enabled: true,
  //   strategies: [
  //     { key: `${STORAGE_PREFIX}${TABBAR}`, storage: localStorage, paths: ['list'] }
  //   ],
  // }
})

export function useTabbarOutsideStore() {
  return useTabbarStore(piniaStore)
}
