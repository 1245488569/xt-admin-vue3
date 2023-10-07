<script setup lang="ts">
import type { IPageInfo } from '@/types/common'

interface IProps {
  pageObject: IPageInfo
}

const props = withDefaults(defineProps<IProps>(), {

})

const emits = defineEmits<{
  (e: 'updatePage', data: {
    pageNumber: number
    pageSize: number
  }): void
}>()

const pageInfo = ref<IPageInfo>({
  pageNumber: 1,
  pageSize: 10,
  total: 0,
  hideOnSinglePage: false,
  background: true,
  small: true,
  disabled: false,
  pageSizes: [10, 20, 50, 60, 100],
  layout: 'total, sizes, prev, pager, next, jumper',
})

watch(() => props.pageObject, (val) => {
  Object.assign(pageInfo.value, val)
}, {
  immediate: true,
  deep: true,
})
// 这种写法 特定情况下 会导致页面刷新时，会触发两次
// watch(() => pageInfo.value.pageNumber, (val) => {
//   emits('updatePage', {
//     pageNumber: val as number,
//     pageSize: pageInfo.value.pageSize as number,
//   })
// })

// watch(() => pageInfo.value.pageSize, (val) => {
//   emits('updatePage', {
//     pageNumber: pageInfo.value.pageNumber as number,
//     pageSize: val as number,
//   })
// })

function handleSizeChange(val: number) {
  pageInfo.value.pageSize = val
  emits('updatePage', {
    pageNumber: pageInfo.value.pageNumber as number,
    pageSize: val as number,
  })
}

function handleCurrentChange(val: number) {
  pageInfo.value.pageNumber = val
  emits('updatePage', {
    pageNumber: val as number,
    pageSize: pageInfo.value.pageSize as number,
  })
}
</script>

<template>
  <el-pagination
    v-model:current-page="pageInfo.pageNumber"
    v-model:page-size="pageInfo.pageSize"
    :page-sizes="pageInfo.pageSizes"
    :small="pageInfo.small"
    :disabled="pageInfo.disabled"
    :background="pageInfo.background"
    :layout="pageInfo.layout"
    :total="pageInfo.total"
    prev-text="上一页"
    next-text="下一页"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>
