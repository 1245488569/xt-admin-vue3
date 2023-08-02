<script setup lang="ts">
import changeLayoutMode from '@/layouts/components/tools/ChangeLayoutMode/index.vue'
import sidebarCollapse from '@/layouts/components/tools/SidebarCollapse/index.vue'
import changeColorScheme from '@/layouts/components/tools/ChangeColorScheme/index.vue'
import themeSelect from '@/layouts/components/tools/ThemeSelect/index.vue'

const dialogVisible = ref(false)

const active = ref(false)
function end() {
  active.value = true
}
</script>

<template>
  <div>
    <change-layout-mode />
    <sidebar-collapse />
    <change-color-scheme />
    <theme-select />
    <el-button type="primary" @click="dialogVisible = true">
      打开
    </el-button>
    <NoticeSlide :list="['11', '123', '3333333']" />
    <div>
      数字变化:
      <NumberScroll class="font-bold text-xl" :to="500" />
      <NumberScroll class="font-bold text-xl" :class="active ? 'text-red' : ''" :to="300" :on-end="end" />
    </div>
    <xt-dialog v-model="dialogVisible" title="aaa" :show-confirm="false" @cancel="dialogVisible = false">
      111
    </xt-dialog>
    <div v-for="i in 100" :key="i">
      {{ i }}
    </div>
  </div>
</template>
