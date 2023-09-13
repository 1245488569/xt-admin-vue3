<script setup lang="ts">
import { ElTreeSelect } from 'element-plus'
import cloneDeep from 'lodash/cloneDeep'
import type { RouteRecordRaw } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import useMenus from '@/hooks/useMenus'
import { i18n } from '@/locales'
import useLocalI18n from '@/hooks/useLocalI18n'

interface IProps {
  size?: number
}

defineOptions({
  name: 'MenuSearch',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const { watchSwitchLang } = useLocalI18n()
const router = useRouter()
const { allSubMenu } = useMenus()
const targetRef = ref<HTMLDivElement>()
const headerSearchSelectRef = ref<InstanceType<typeof ElTreeSelect>>()
const isShow = ref(false)
const search = ref('')
const searchOptions = ref<RouteRecordRaw[]>([])

function dealSearchData(routes: RouteRecordRaw[]) {
  const res = [] as any[]
  routes.forEach((route) => {
    const tmpRoute = cloneDeep(route)
    if (tmpRoute.children?.length) {
      tmpRoute.children = dealSearchData(tmpRoute.children)
      tmpRoute.children.length && res.push({
        label: i18n.global.te(tmpRoute.meta?.title) ? i18n.global.t(tmpRoute.meta?.title) : tmpRoute.meta?.title,
        value: tmpRoute.path,
        children: tmpRoute.children,
      })
    }
    else {
      if (!tmpRoute.meta?.hideInSearch) {
        res.push({
          label: i18n.global.te(tmpRoute.meta?.title) ? i18n.global.t(tmpRoute.meta?.title) : tmpRoute.meta?.title,
          value: tmpRoute.path,
          children: tmpRoute.children,
        })
      }
    }
  })
  return res
}

searchOptions.value = dealSearchData(allSubMenu)

watchSwitchLang(() => {
  searchOptions.value = dealSearchData(allSubMenu)
})

function onClose() {
  headerSearchSelectRef.value?.blur()
  search.value = ''
  isShow.value = false
}

function onShowClick() {
  isShow.value = !isShow.value
  if (isShow.value)
    headerSearchSelectRef.value?.focus()

  else
    onClose()
}

function onSelectChange() {
  router.push(search.value)
  onClose()
}

onClickOutside(targetRef, () => {
  if (isShow.value)
    onClose()
})
</script>

<template>
  <div ref="targetRef" class="flex items-center header-search" :class="{ show: isShow }">
    <el-icon :size="size" @click="onShowClick">
      <svg-icon class="cursor-pointer" name="ri:search-line" />
    </el-icon>

    <ElTreeSelect ref="headerSearchSelectRef" v-model="search" class="header-search-select" :data="searchOptions" default-expand-all filterable clearable @change="onSelectChange" />
  </div>
</template>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    :deep(.el-input__inner) {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }

    :deep(.el-input__wrapper) {
      box-shadow: none !important;
    }

    :deep(.el-input__suffix) {
      display: none;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 0;
    }
  }
}
</style>
