<script setup lang="ts" name="Tabbar">
  import { RemoveType, useTabbarStore } from '@/store/tabbar'
  import { generateTitle } from '@/util/i18n'
  import { RouteLocationNormalizedLoaded } from 'vue-router'
  import ContextMenu from './ContextMenu/index.vue'
  import BScroll from '@better-scroll/core'

  const scrollRef = ref()
  const scrollItemRef = ref()
  const bs = ref()
  onMounted(() => {
    bs.value = new BScroll(scrollRef.value, {
      scrollX: true, // 横向滚动需要添加的条件
      probeType: 0
    })
  })
  onUnmounted(() => {
    bs.value.destroy()
  })
  const useTabbar = useTabbarStore()
  const route = useRoute()
  const router = useRouter()
  function isTabs(route: RouteLocationNormalizedLoaded) {
    if (route.meta && route.meta.title) {
      return true
    } else {
      return false
    }
  }

  const stopWatchRoute = watch(() => route, (val) => {
    if (!isTabs(val)) return
    const { fullPath, meta, path, name, matched } = val
    useTabbar.add({
      fullPath,
      path,
      name: matched.find(v => v.name === name)?.components.default.name || '',
      meta
    })
    nextTick(() => {
      bs.value.refresh()
      const scrollIndex = useTabbar.getTabbarList.findIndex(v=> v.fullPath === val.fullPath)
      if (scrollIndex !== -1 && scrollItemRef.value?.children) {
        bs.value.scrollToElement(scrollItemRef.value.children[scrollIndex], 500, true)
      }
    })
  }, {
    immediate: true,
    deep: true
  })
  onUnmounted(() => {
    stopWatchRoute()
  })

  const activeTag = computed(() => {
    return route.fullPath
  })

  const closeTab = ((fullPath: string, type: RemoveType) => {
    if (type === 'once' && fullPath === activeTag.value) {
      useTabbar.remove(fullPath, 'self', activeTag.value)
    } else if (type === 'once' && fullPath !== activeTag.value) {
      useTabbar.remove(fullPath, 'otherOnce', activeTag.value)
    }
  })

  // --------- contextMenu 相关 ---------
  const selectTagFullPath = ref('')
  const visible = ref(false)
  const menuStyle = reactive({
    left: '0px',
    top: '0px'
  })
  const openMenu = (e: any, fullPath: string) => {
    const { x, y } = e
    menuStyle.left = x + 'px'
    menuStyle.top = y + 'px'
    selectTagFullPath.value = fullPath
    visible.value = true
  }
  const closeMenu = () => {
    visible.value = false
  }
  watch(visible, val => {
    if (val) {
      document.body.addEventListener('click', closeMenu)
    } else {
      document.body.removeEventListener('click', closeMenu)
    }
  })
</script>

<template>
  <div class="flex h-[var(--xt-tabbar-height)] text-xs z-999 tabbar-content items-center" ref="scrollRef">
    <div class="px-5 inline-block" ref="scrollItemRef">
      <template v-for="tag in useTabbar.getTabbarList" :key="tag.fullPath">
        <div
          class="rounded-md cursor-pointer bg-gray-300 mr-2 p-2 inline-block hover:bg-gray-400"
          :class="{ '!bg-white': tag.fullPath === activeTag }"
          @click="router.push(tag.fullPath)"
          @contextmenu.prevent="openMenu($event, tag.fullPath)"
        >
          <div class="flex items-center">
            <span class="text-center w-15 truncate" :title="generateTitle(tag.meta.title!)">{{ generateTitle(tag.meta.title!) }}</span>
            <el-icon class="ml-2" @click.stop="closeTab(tag.fullPath, 'once')" v-show="useTabbar.getTabbarList.length > 1">
              <svg-icon name="ep:close"></svg-icon>
            </el-icon>
          </div>
        </div>
      </template>
    </div>
    <teleport to="body">
      <context-menu v-show="visible" :style="menuStyle" :full-path="selectTagFullPath" :active-full-path="activeTag" />
    </teleport>

  </div>

</template>

<style lang="scss" scoped>
  .tabbar-content {
    background-color: $xt-tabbar-bg;
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
