<script setup lang="ts" name="ThemeSelect">
import SelectColor from './components/SelectColor.vue'

defineProps({
  size: {
    type: Number,
    default: 20
  }
})
const selectColorVisible = ref(false)
const handleSetTheme = () => {
  selectColorVisible.value = true
}
</script>

<template>
  <el-dropdown v-bind="$attrs" trigger="hover" @command="handleSetTheme">
    <el-icon :size="size">
      <svg-icon class="cursor-pointer text-dark-50" name="ri:palette-line" />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('theme.themeChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <SelectColor v-model="selectColorVisible" />
</template>
