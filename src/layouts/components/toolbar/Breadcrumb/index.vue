<script setup lang="ts">
import type { RouteLocationMatched } from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumbDta = ref<RouteLocationMatched[]>([])

const stopWatchRoute = watch(() => route, (val) => {
  breadcrumbDta.value = val.matched.filter(item => item.meta && item.meta.title && !item.meta.hideInBreadcrumb)
}, {
  immediate: true,
  deep: true,
})

onUnmounted(() => {
  stopWatchRoute()
})

function onLinkClick(item: RouteLocationMatched) {
  // TODO: 做了权限后，这里需要判断是否有权限
  router.push(item.path)
}
</script>

<template>
  <el-breadcrumb class="text-sm inline-block" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbDta" :key="index">
        <span v-if="index === breadcrumbDta.length - 1">{{ item.meta.title }}</span>
        <a v-else @click="onLinkClick(item)"> {{ item.meta.title }}</a>
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
