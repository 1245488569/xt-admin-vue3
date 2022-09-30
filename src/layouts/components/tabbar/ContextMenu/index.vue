<script setup lang="ts" name="ContextMenu">
import router from '@/router'
import { RemoveType, useTabbarStore } from '@/store/tabbar'

const props = defineProps({
  // 右键点击tab的fullPath
  fullPath: {
    type: String,
    default: ''
  },
  // 当前选中的tab的fullPath
  activeFullPath: {
    type: String,
    default: ''
  }
})

const reload = () => {
  if (disabledReload.value) return
  router.push({
    name: 'reload'
  })
}

const useTabbar = useTabbarStore()
const route = useRoute()

// 按钮disabled判断
const disabledReload = computed(() => {
  return props.fullPath !== route.fullPath
})
const disabledDelSelf = computed(() => {
  return useTabbar.getTabbarList.length <= 1
})
const disabledDelLeft = computed(() => {
  const index = useTabbar.getTabbarList.findIndex(
    item => item.fullPath === props.fullPath
  )
  return index === 0
})
const disabledDelRight = computed(() => {
  const index = useTabbar.getTabbarList.findIndex(
    item => item.fullPath === props.fullPath
  )
  return index === useTabbar.getTabbarList.length - 1
})
const disabledDelOtherAll = computed(() => {
  return useTabbar.getTabbarList.length <= 1
})
// 删除事件
const closeTab = (type: RemoveType) => {
  if (type === 'once') {
    if (props.fullPath !== props.activeFullPath) {
      type = 'otherOnce'
    } else {
      type = 'self'
    }
  }
  if (type === 'self' && disabledDelSelf.value) return
  if (type === 'left' && disabledDelLeft.value) return
  if (type === 'right' && disabledDelRight.value) return
  if (type === 'otherAll' && disabledDelOtherAll.value) return
  useTabbar.remove(props.fullPath, type, props.activeFullPath)
}
</script>

<template>
  <ul class="context-menu-container">
    <li :class="{ disabled: disabledReload }" @click="reload">
      {{ $t('tabbar.refresh') }}
    </li>
    <li :class="{ disabled: disabledDelSelf }" @click="closeTab('once')">
      {{ $t('tabbar.delete') }}
    </li>
    <li :class="{ disabled: disabledDelLeft }" @click="closeTab('left')">
      {{ $t('tabbar.deleteLeft') }}
    </li>
    <li :class="{ disabled: disabledDelRight }" @click="closeTab('right')">
      {{ $t('tabbar.deleteRight') }}
    </li>
    <li
      :class="{ disabled: disabledDelOtherAll }"
      @click="closeTab('otherAll')"
    >
      {{ $t('tabbar.deleteOther') }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.context-menu-container {
  @apply bg-white rounded-md font-normal shadow text-xs text-black py-1 z-3000 fixed;

  li {
    @apply cursor-pointer m-0 py-2 px-6 hover:bg-gray-300;

    &.disabled {
      @apply bg-white cursor-not-allowed text-gray-400;
    }
  }
}
</style>
