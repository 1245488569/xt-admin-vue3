<script setup lang="ts">
const data = ref<string>('我是被复制的内容')
</script>

<template>
  <page-main>
    <el-card>
      <template #header>
        <div>
          <span>复制指令✨✨✨</span>
        </div>
      </template>
      <div>
        <el-input v-model="data" placeholder="请输入内容" style="width: 500px">
          <template #append>
            <el-button v-copy="data">
              复制
            </el-button>
          </template>
        </el-input>
      </div>
    </el-card>
  </page-main>
</template>
