<script setup lang="ts">
import useLayoutTools from '@/hooks/useLayoutTools'
import { type ITabbarRemoveType, useTabbarStore } from '@/stores/tabbar'
import useLocalI18n from '@/hooks/useLocalI18n'

const props = withDefaults(defineProps<IProps>(), {

})
const { generateTitle } = useLocalI18n()
interface IProps {
  clickIndex: number
}

const route = useRoute()
const useTabbar = useTabbarStore()
const activeIndex = computed(() => useTabbar.list.findIndex(v => v.fullPath === route.fullPath))

const disabledReload = computed(() => props.clickIndex !== activeIndex.value)
const disabledDelOnce = computed(() => useTabbar.list.length <= 1)
const disabledDelLeft = computed(() => props.clickIndex === 0)
const disabledDelRight = computed(() => props.clickIndex === useTabbar.list.length - 1)
const disabledDelOtherAll = computed(() => useTabbar.list.length <= 1)

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
  if (type === 'left' && disabledDelLeft.value)
    return
  if (type === 'right' && disabledDelRight.value)
    return
  if (type === 'otherAll' && disabledDelOtherAll.value)
    return
  useTabbar.remove(type, props.clickIndex, activeIndex.value)
}
</script>

<template>
  <ul class="context-menu-container">
    <li :class="{ disabled: disabledReload }" @click="reload">
      {{ generateTitle('tabbar.refresh') }}
    </li>
    <li :class="{ disabled: disabledDelOnce }" @click="closeTab()">
      {{ generateTitle('tabbar.delete') }}
    </li>
    <li :class="{ disabled: disabledDelLeft }" @click="closeTab('left')">
      {{ generateTitle('tabbar.deleteLeft') }}
    </li>
    <li :class="{ disabled: disabledDelRight }" @click="closeTab('right')">
      {{ generateTitle('tabbar.deleteRight') }}
    </li>
    <li :class="{ disabled: disabledDelOtherAll }" @click="closeTab('otherAll')">
      {{ generateTitle('tabbar.deleteOther') }}
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
