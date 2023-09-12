<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useAppConfigStore } from '@/stores/app'

interface IProps {
  size?: number
}

defineOptions({
  name: 'LangSelect',
})

withDefaults(defineProps<IProps>(), {
  size: 20,
})

const useAppConfig = useAppConfigStore()

const toolbarTextColor = computed(() => useAppConfig.getTheme.toolbarTextColor)

const language = computed(() => useAppConfig.getLanguage)

const i18n = useI18n()
function handleSetLanguage(lang: Language) {
  i18n.locale.value = lang
  useAppConfig.appConfig.defaultLanguage = lang
}
</script>

<template>
  <el-dropdown trigger="hover" @command="handleSetLanguage">
    <el-icon :size="size">
      <svg-icon name="ri:translate" class="cursor-pointer" />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh-cn'" command="zh-cn">
          简体中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'zh-tw'" command="zh-tw">
          繁體中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
  .el-dropdown {
    color: v-bind(toolbarTextColor);
  }

  .dark .el-dropdown {
    color: var(--xt-toolbar-text-color);
  }
</style>
