<script setup lang="ts">
import BScroll from '@better-scroll/core'
import ContextMenu from './ContextMenu/index.vue'
import { useAppConfigStore } from '@/stores/app'

const scrollRef = ref()
const scrollItemRef = ref()
const bs = ref()
onMounted(() => {
  bs.value = new BScroll(scrollRef.value, {
    scrollX: true,
    probeType: 0,
  })
})
onUnmounted(() => {
  bs.value.destroy()
})

const useAppConfig = useAppConfigStore()
const tabbarBgColor = computed(() => useAppConfig.getTheme.tabbarBgColor)
const tabbarItemBgColor = computed(() => useAppConfig.getTheme.tabbarItemBgColor)
const tabbarItemActiveBgColor = computed(() => useAppConfig.getTheme.tabbarItemActiveBgColor)
const tabbarItemHoverBgColor = computed(() => useAppConfig.getTheme.tabbarItemHoverBgColor)
const tabbarItemTextColor = computed(() => useAppConfig.getTheme.tabbarItemTextColor)
const tabbarItemActiveTextColor = computed(() => useAppConfig.getTheme.tabbarItemActiveTextColor)
const tabbarItemHoverTextColor = computed(() => useAppConfig.getTheme.tabbarItemHoverTextColor)

const demolist = ref<any[]>([])

const route = useRoute()
const router = useRouter()
watch(() => route, (val) => {
  if (!val.meta || !val.meta.title)
    return

  const { path, fullPath, meta, matched } = val
  if (demolist.value.find(v => v.fullPath === fullPath))
    return

  demolist.value.push({
    fullPath,
    meta,
    name: matched.find(v => v.path === path)?.components?.default.name || '',
  })

  nextTick(() => {
    bs.value.refresh()

    const scrollIndex = demolist.value.findIndex(v => v.fullPath === fullPath)
    console.log(scrollItemRef.value.children[scrollIndex])
    if (scrollIndex !== -1 && scrollItemRef.value?.children)
      bs.value.scrollToElement(scrollItemRef.value.children[scrollIndex], 500, true)
  })
}, {
  immediate: true,
  deep: true,
})

const visible = ref(false)
const menuStyle = reactive({
  left: '0',
  top: '0',
})
function openMenu(e: MouseEvent) {
  const { x, y } = e
  menuStyle.left = `${x}px`
  menuStyle.top = `${y}px`
  visible.value = true
}

function closeMenu() {
  visible.value = false
}

watch(visible, (val) => {
  if (val)
    document.body.addEventListener('click', closeMenu)

  else
    document.body.removeEventListener('click', closeMenu)
})
</script>

<template>
  <div ref="scrollRef" class="h-[var(--xt-tabbar-height)] text-xs flex items-center w-full whitespace-nowrap overflow-hidden tabbar-content">
    <div ref="scrollItemRef" class="px-2 flex h-full py-1">
      <template v-for="(tag, tagI) in demolist" :key="tagI">
        <div class="tabbar-item mr-2 px-2 flex items-center h-full rounded-md cursor-pointer duration-300" :class="tag.fullPath === route.fullPath ? 'active' : ''" @click="router.push(tag.fullPath)" @contextmenu.prevent="openMenu">
          <span class="w-20 truncate">{{ tag.meta.title }}</span>
          <el-icon v-show="demolist.length > 1" class="ml-2">
            <svg-icon name="ep:close" />
          </el-icon>
        </div>
      </template>
    </div>

    <teleport to="body">
      <ContextMenu v-show="visible" :style="menuStyle" />
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
.tabbar-content {
  background: v-bind(tabbarBgColor);

  .tabbar-item {
    background: v-bind(tabbarItemBgColor);
    color: v-bind(tabbarItemTextColor);

    &:hover {
      background: v-bind(tabbarItemHoverBgColor);
      color: v-bind(tabbarItemHoverTextColor);
    }

    &.active {
      background: v-bind(tabbarItemActiveBgColor);
      color: v-bind(tabbarItemActiveTextColor);
      border-bottom: 2px solid v-bind(tabbarItemActiveTextColor);
    }
  }
}

.dark .tabbar-content {
  background: var(--xt-tabbar-bg-color);

  .tabbar-item {
    background: var(--xt-tabbar-item-bg-color);
    color: var(--xt-tabbar-item-text-color);

    &:hover {
      background: var(--xt-tabbar-item-hover-bg-color);
      color: var(--xt-tabbar-item-hover-text-color);
    }

    &.active {
      background: var(--xt-tabbar-item-active-bg-color);
      color: var(--xt-tabbar-item-active-text-color);
      border-bottom: 2px solid var(--xt-tabbar-item-active-text-color);
    }
  }
}
</style>
