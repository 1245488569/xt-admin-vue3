<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { tableListApi } from '@/api/test'
import type { IPageChangeData } from '@/types/common'

const tableConf = reactive({
  columns: [
    {
      label: '日期',
      prop: 'date',
      align: 'center',
      sortable: false,
      slot: 'date',
      headerSlot: 'dateHeader',
    },
    {
      label: '姓名',
      prop: 'name',
      align: 'center',
      sortable: false,
      // width: '180',
      click: (row: any) => {
        console.log(row)
        ElMessage.success('点击了姓名')
      },
    },
    {
      label: '地址',
      prop: 'address',
      align: 'center',
      sortable: false,
      // width: '180',
    },
  ],
  rowButtons: [
    {
      name: '查看',
      click: (row: any) => {
        console.log(row)
      },
      attr: {
        type: 'primary',
      },
    },
    {
      name: '添加',
      click: (row: any) => {
        console.log(row)
      },
      putInCombineBox: true,
    },
  ],
})

const tableData = ref<any[]>([])

const page = reactive({
  total: 0,
  pageSize: 10,
  pageNumber: 1,
})

function getData() {
  tableListApi({
    current: page.pageNumber - 1,
    pageSize: page.pageSize,
  }).then((res: any) => {
    console.log(res)
    tableData.value = res.result.rows
    page.total = res.result.total
  })
}
onMounted(() => {
  getData()
})

function pageChange(data: IPageChangeData) {
  page.pageSize = data.pageSize
  page.pageNumber = data.pageNumber
  getData()
}
</script>

<template>
  <page-main>
    <div class="mb-3 text-2xl">
      表格封装-以配置项驱动的表格
    </div>
    <div>
      具体配置请在项目中查看
    </div>
  </page-main>
  <page-main>
    <xt-table :data="tableData" :custom-config="tableConf" :page-object="page" @page-change="pageChange">
      <template #top-left>
        <div>
          <el-button type="primary">
            我是自定义内容
          </el-button>
        </div>
      </template>
      <template #dateHeader="{ column, index }">
        <div class="flex items-center justify-center">
          <el-icon :size="15">
            <svg-icon name="ep:alarm-clock" />
          </el-icon>
          {{ index }}-{{ column.label }}
          自定义表头
        </div>
      </template>
      <template #date="{ row }">
        <div class="flex items-center justify-center">
          <el-icon :size="20">
            <svg-icon name="ep:alarm-clock" />
          </el-icon>

          <span class="ml-3">{{ row.date }}-自定义内容</span>
        </div>
      </template>
    </xt-table>
  </page-main>
</template>
