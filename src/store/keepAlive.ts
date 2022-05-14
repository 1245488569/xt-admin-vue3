import { defineStore } from 'pinia'
import { piniaStore } from '@/store'

export const useKeepAliveStore = defineStore('keepAlive', {
  state: () => ({
    list: ['EmptyRoute'] as string[]
  }),

  getters: {
    getAliveList(): string[] {
      return this.list
    }
  },

  actions: {
    init() {
      this.list = ['EmptyRoute']
    },
    add(name: string) {
      !this.list.includes(name) && this.list.push(name)
    },
    remove(name: string) {
      this.list = this.list.filter(item => item !== name)
    },
  }
})

export function useKeepAliveOutsideStore() {
  return useKeepAliveStore(piniaStore)
}
