import router from '@/router'

export default function useLayoutTools() {
  function reload() {
    router.push({
      name: 'reload',
    })
  }

  return {
    reload,
  }
}
