<script setup lang="ts" name="LangSelect">
import { useI18n } from 'vue-i18n'
import { useAppConfigStore } from '@/store/app'

defineProps({
  size: {
    type: Number,
    default: 20
  }
})

const useAppConfig = useAppConfigStore()
const language = computed(() => useAppConfig.getLanguage)

const i18n = useI18n()
const handleSetLanguage = (lang: Language) => {
  i18n.locale.value = lang
  useAppConfig.changeLanguage(lang)
}
</script>

<template>
  <el-dropdown
    trigger="hover"
    class="international"
    @command="handleSetLanguage"
  >
    <el-icon :size="size">
      <svg-icon name="ri:translate" class="cursor-pointer text-dark-50" />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh-ch'" command="zh-ch">
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
