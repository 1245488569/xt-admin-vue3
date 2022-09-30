<script lang="ts" setup name="Breadcrumb">
import { generateTitle } from '@/util/i18n'

const route = useRoute()

const breadcrumbData: any = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(
    item => item.meta && item.meta.title && !item.meta.hideInBreadcrumb
  )
}

watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)

const router = useRouter()
const onLinkClick = item => {
  // 开启权限后 点击有重定向参数的路由 但重定向的路由无权限时 跳转他下面的第一个路由
  if (item.redirect) {
    let redirectPathOrName = ''
    if (typeof item.redirect === 'string') {
      redirectPathOrName = item.redirect
    } else {
      redirectPathOrName = item.redirect.name
    }
    const name =
      item.children.find(
        v => v.name === redirectPathOrName || v.path === redirectPathOrName
      )?.name || ''
    // name存在 说明重定向的路由有权限
    if (name) {
      router.push({
        name
      })
    } else {
      router.push({
        name: item.children[0].name
      })
    }
  } else {
    console.warn('请设置redirect参数')
  }
}
</script>

<template>
  <el-breadcrumb class="text-sm inline-block" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbData.length - 1">{{
          generateTitle(item.meta.title)
        }}</span>
        <!-- 可点击项 -->
        <a v-else @click.prevent="onLinkClick(item)">{{
          generateTitle(item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
// 面包屑动画
.breadcrumb-enter-active {
  transition: all 0.3s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(25px) skewX(-40deg);
}
</style>
