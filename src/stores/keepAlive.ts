export const useKeepAliveStore = defineStore('keepAlive', () => {
  const list = ref<string[]>([])

  function add(name: string) {
    !list.value.includes(name) && list.value.push(name)
  }

  function remove(name: string) {
    list.value = list.value.filter(item => item !== name)
  }

  return { list, add, remove }
})
