<script setup lang="ts" name="MenuSearch">
import { onClickOutside } from '@vueuse/core'
import Fuse from 'fuse.js'
import { generateRoutes } from './FuseData'
import { watchSwitchLang } from '@/util/i18n'
import useMenus from '@/hooks/useMenus'

defineProps({
  size: {
    type: Number,
    default: 20
  }
})
const target = ref(null)
const isShow = ref(false)
const headerSearchSelectRef = ref()
const search = ref('')
const searchOptions = ref<any[]>([])

const router = useRouter()
const { allSidebarMenu } = useMenus()
const searchPool = computed(() => {
  return generateRoutes(allSidebarMenu)
})

/**
 * 搜索库相关
 */
let fuse: any
const initFuse = searchPool => {
  fuse = new Fuse(searchPool, {
    fieldNormWeight: 1,
    // 是否按优先级进行排序
    shouldSort: true,
    // 匹配算法放弃的时机， 阈值 0.0 需要完美匹配（字母和位置），阈值 1.0 将匹配任何内容。
    threshold: 0.4,
    // 匹配长度超过这个值的才会被认为是匹配的
    minMatchCharLength: 1,
    // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
    // name：搜索的键
    // weight：对应的权重
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}
initFuse(searchPool.value)
watch(isShow, val => {
  if (val) {
    onClickOutside(target, onClose)
  }
})
watchSwitchLang(() => {
  initFuse(searchPool.value)
})
const onShowClick = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value.focus()
}
const querySearch = query => {
  if (query !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}
const onSelectChange = val => {
  router.push(val.path)
  onClose()
}
const onClose = () => {
  headerSearchSelectRef.value.blur()
  isShow.value = false
  searchOptions.value = []
}
</script>

<template>
  <div
    ref="target"
    :class="{ show: isShow }"
    class="flex header-search items-center"
  >
    <el-icon :size="size">
      <svg-icon
        class="cursor-pointer text-dark-50"
        name="ri:search-line"
        @click.stop="onShowClick"
      />
    </el-icon>
    <el-select
      ref="headerSearchSelectRef"
      v-model="search"
      class="header-search-select"
      filterable
      default-first-option
      remote
      placeholder="Search"
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option
        v-for="(option, index) in searchOptions"
        :key="index"
        :label="option.item.title.join(' > ')"
        :value="option.item"
      ></el-option>
    </el-select>
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
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
