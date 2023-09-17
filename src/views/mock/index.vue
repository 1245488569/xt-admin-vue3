<script setup lang="ts">
import { permissionApi } from '@/api/test'

const permissions = ref<any[]>([])
function getPermission() {
  permissionApi().then((res) => {
    permissions.value = res.result.permissions
  })
}
</script>

<template>
  <page-main>
    <el-alert title="1. mock.js支持各种数据的随机生成" type="success" effect="dark" :closable="false" />
    <div class="mt-2">
      <el-alert title="2. 可以使用mock.js模拟后端接口数据，通过随机数据,模拟各种场景" type="success" effect="dark" :closable="false" />
    </div>
  </page-main>

  <page-main>
    <el-button @click="getPermission">
      获取当前用户权限
    </el-button>

    <div v-if="permissions.length" class="mt-2">
      <template v-for="item in permissions" :key="item">
        <div>
          {{ item }}
        </div>
      </template>
    </div>
  </page-main>
</template>
