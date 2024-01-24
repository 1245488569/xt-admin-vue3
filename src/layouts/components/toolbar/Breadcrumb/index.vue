<script setup lang="ts">
import type { RouteLocationMatched } from 'vue-router'
import useLocalI18n from '@/hooks/useLocalI18n'

const { generateTitle } = useLocalI18n()
const route = useRoute()
const router = useRouter()

const breadcrumbData = ref<RouteLocationMatched[]>([])

const clickBreadcrumbItem = ref<RouteLocationMatched | null>(null)

breadcrumbData.value = route.matched.filter(item => item.meta && item.meta.title && !item.meta.hideInBreadcrumb)

const stop = router.beforeEach((to, from, next) => {
  if (to.name === 'NotFound') {
    if (clickBreadcrumbItem.value?.children?.length) {
      const item = clickBreadcrumbItem.value.children.find(item => !item.meta?.hideInMenu)
      if (item) {
        if (item.name) {
          next({ name: item.name })
        }
        else {
          console.warn('请在路由中设置唯一的name字段')
          next({ name: 'NotFound', replace: true })
        }
      }
      else {
        next({ name: 'NotFound', replace: true })
      }
    }
  }
  else {
    breadcrumbData.value = to.matched.filter(item => item.meta && item.meta.title && !item.meta.hideInBreadcrumb)
    next()
  }
})

onUnmounted(() => {
  stop()
})

function onLinkClick(item: RouteLocationMatched) {
  clickBreadcrumbItem.value = item
  router.push(item.path)
}
</script>

<template>
  <el-breadcrumb class="inline-block text-sm" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="index">
        <span v-if="index === breadcrumbData.length - 1">{{ generateTitle(item.meta.title || '') }}</span>
        <a v-else @click="onLinkClick(item)"> {{ generateTitle(item.meta.title || '') }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.breadcrumb-enter-active {
  transition: opacity 0.3s, transform 0.3s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(100%) skewX(-40deg);
}
</style>
