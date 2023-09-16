<script setup lang="ts">
const tableData = [
  {
    id: 1,
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 4,
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const router = useRouter()
function goDeatil(item: any) {
  router.push({
    name: 'UserDetail',
    query: {
      id: item.id,
    },
  })
}
</script>

<template>
  <page-main>
    <div class="mb-2">
      用户列表: 点击detail按钮，注意查看上方tab和面包屑的变化  （和商品列表做对比，你就能体验出不同）
    </div>

    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations" width="200">
        <template #default="{ row }">
          <el-button type="primary" size="small" @click="goDeatil(row)">
            Detail
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </page-main>
</template>
