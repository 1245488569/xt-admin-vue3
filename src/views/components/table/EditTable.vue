<script setup lang="ts">
import { TableOptions } from '@/components/XtTable/types/types'
import XtTable from '@/components/XtTable/index.vue'
import { tableListApi } from '@/api/test'
const tableData = ref<any[]>([])
const options: TableOptions[] = [
  {
    prop: 'index',
    label: '序号',
    width: '70px',
    tableColumnOtherAttrs: {
      type: 'index'
    }
  },
  {
    prop: 'date',
    label: '日期',
    align: 'center',
    headerSlot: 'dateHeader',
    slot: 'date',
    editable: true,
    tableColumnOtherAttrs: {
      className: 'date-custom'
    }
  },
  {
    prop: 'name',
    label: '姓名',
    width: '180',
    align: 'center'
  },
  {
    prop: 'address',
    label: '地址',
    align: 'center'
  },
  {
    prop: 'action',
    label: '操作',
    action: true,
    align: 'center',
    width: '170px',
    tableColumnOtherAttrs: {
      fixed: 'right'
    }
  }
]

// 初始化数据
const current = ref(1)
const pageSize = ref(10)
const total = ref(0)
const getData = () => {
  tableListApi({
    current: current.value - 1,
    pageSize: pageSize.value
  }).then((res: any) => {
    console.log(res)
    tableData.value = res.result.rows
    total.value = res.result.total
  })
}
onMounted(() => {
  getData()
})

watch([current, pageSize], () => {
  getData()
})

const xtTableRef = ref<InstanceType<typeof XtTable> | null>(null)
const edit = (row: any) => {
  console.log(row)
  editRowSign.value = 'edit'
}

// 获取多选数据
const getMultipleSelection = () => {
  // xtTableRef.value?.multipleSelection 不要这样使用 否则打包会报错
  console.log(xtTableRef.value?.['multipleSelection'])
}

// 编辑行标识
const editRowSign = ref<string>('')
// 确定修改当前行
const sureEditRow = (row: any) => {
  console.log(row)
}
// 确定修改当前单元格
const editCellConfirm = ({ row, $index }: { row: any; $index: number }) => {
  console.log(row)
  console.log($index)
}
</script>

<template>
  <page-main>
    <div class="mb-3 text-2xl">普通表格</div>
    <div class="flex mb-3">
      <el-button type="primary" @click="getMultipleSelection"
        >获取多选数据</el-button
      >
    </div>

    <xt-table
      ref="xtTableRef"
      v-model:edit-row-sign="editRowSign"
      v-model:current-page="current"
      v-model:page-size="pageSize"
      class="xttable"
      stripe
      :options="options"
      :data="tableData"
      show-multiple
      is-edit-row
      :total="total"
      @edit-cell-confirm="editCellConfirm"
    >
      <template #dateHeader="{ column, $index }">
        <div>{{ $index }}-{{ column.label }}</div>
      </template>
      <template #date="{ row }">
        <div class="flex mr-3 items-center">
          <el-icon :size="20">
            <svg-icon name="ep:alarm-clock"></svg-icon>
          </el-icon>
          <span class="ml-3">{{ row.date }}</span>
        </div>
      </template>
      <!-- 可自定义单元格编辑图标 -->
      <!-- <template #editCell="{ row }">
        <el-icon :size="16" color="#F56C6C">
          <svg-icon name="ep:check"></svg-icon>
        </el-icon>
        {{ row.date }}
      </template> -->
      <template #editRow="{ row }">
        <el-button size="small" type="primary" @click="sureEditRow(row)"
          >确认</el-button
        >
        <el-button size="small" type="danger">取消</el-button>
      </template>
      <template #action="{ row }">
        <el-button size="small" type="primary" @click="edit(row)"
          >编辑</el-button
        >
        <el-button size="small" type="danger">删除</el-button>
      </template>
    </xt-table>
  </page-main>
</template>

<style lang="scss" scoped>
.xttable :deep(.date-custom) .cell {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
