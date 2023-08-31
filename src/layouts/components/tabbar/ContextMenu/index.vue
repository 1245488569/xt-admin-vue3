<script setup lang="ts">
import useLayoutTools from '@/hooks/useLayoutTools'
import { type ITabbarRemoveType, useTabbarStore } from '@/stores/tabbar'

interface IProps {
  clickIndex: number
}

const props = withDefaults(defineProps<IProps>(), {

})

const route = useRoute()
const useTabbar = useTabbarStore()
const activeIndex = computed(() => useTabbar.list.findIndex(v => v.fullPath === route.fullPath))

const disabledReload = computed(() => props.clickIndex !== activeIndex.value)
const disabledDelOnce = computed(() => useTabbar.list.length <= 1)

function reload() {
  if (disabledReload.value)
    return
  useLayoutTools().reload()
}

function closeTab(type?: ITabbarRemoveType) {
  if (!type) {
    if (props.clickIndex === activeIndex.value)
      type = 'self'

    else
      type = 'otherOnce'
  }

  if (type === 'self' && disabledDelOnce.value)
    return
  useTabbar.remove(type, props.clickIndex, activeIndex.value)
}
</script>

<template>
  <ul class="context-menu-container">
    <li :class="{ disabled: disabledReload }" @click="reload">
      刷新
    </li>
    <li :class="{ disabled: disabledDelOnce }" @click="closeTab()">
      关闭
    </li>
    <li>
      关闭左侧
    </li>
    <li>
      关闭右侧
    </li>
    <li>
      关闭其他
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.context-menu-container {
  @apply bg-white rounded-md font-normal shadow text-xs text-black py-1 z-3000 fixed;

  li {
    @apply cursor-pointer m-0 py-2 px-6 whitespace-nowrap hover:bg-gray-300;

    &.disabled {
      @apply bg-white cursor-not-allowed text-gray-400;
    }
  }
}
</style>
