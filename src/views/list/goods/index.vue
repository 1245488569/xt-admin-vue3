<script setup lang="ts">
const tableData = [
  {
    id: 1,
    name: '苹果',
  },
  {
    id: 2,
    name: '栗子',
  },
  {
    id: 3,
    name: '橘子',
  },
  {
    id: 4,
    name: '香蕉',
  },
]

const router = useRouter()
function goDeatil(item: any) {
  console.log(item)
  router.push({
    name: 'GoodsDetail',
    query: {
      id: item.id,
    },
  })
}
</script>

<template>
  <page-main>
    <div class="mb-2">
      商品列表: 点击detail按钮，注意查看上方tab和面包屑的变化（和用户列表做对比，你就能体验出不同）
    </div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="name" label="Name" width="180" />
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
