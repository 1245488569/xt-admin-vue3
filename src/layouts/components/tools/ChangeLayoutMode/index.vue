<script setup lang="ts">
import { useAppConfigStore } from '@/stores/app'

defineOptions({
  name: 'ChangeLayoutMode',
})

const useAppConfig = useAppConfigStore()
const layoutMode = ref(useAppConfig.getLayoutMode)

const layoutModeOptions = reactive([
  {
    label: '只有顶部导航',
    value: 'onlyTopNav',
  },
  {
    label: '只有侧边栏导航',
    value: 'onlySubSideNav',
  },
  {
    label: '侧边主导航+侧边次栏导航',
    value: 'mainSubSideNav',
  },
  {
    label: '顶部主导航+侧边次栏导航',
    value: 'topSubSideNav',
  },
])

function chageLayoutMode(value: LayoutMode) {
  useAppConfig.appConfig.app.layoutMode = value
}
</script>

<template>
  <div>
    <el-select v-model="layoutMode" @change="chageLayoutMode">
      <el-option v-for="item in layoutModeOptions" :key="item.value" :value="item.value" :label="item.label" />
    </el-select>
  </div>
</template>
