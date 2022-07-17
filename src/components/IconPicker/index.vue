<script setup lang="ts" name="IconPicker">
  import data from './data/data.json'
  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    }
  })
  const myValue = ref('')
  watch(() => props.modelValue, value => {
    myValue.value = value
  }, {
    immediate: true
  })

  // ------------------数据初始化------------------
  const pagination = ref({
    page: 1,
    pageSize: 49
  })
  const iconList = computed(() => {
    return data.filter(item => item.prefix === activeName.value)[0].icons
  })

  const currentIconList = computed(() => {
    return iconList.value.slice(
      (pagination.value.page - 1) * pagination.value.pageSize,
      (pagination.value.page - 1) * pagination.value.pageSize + pagination.value.pageSize
    )
  })

  // ------------------选择图标相关------------------
  const dialogVisible = ref(false)
  const activeName = ref(myValue.value.split(':')[0] || data[0].prefix)

  const emits = defineEmits(['update:modelValue'])
  const chooseIcon = (val: string) => {
    myValue.value = val
    emits('update:modelValue', val)
    dialogVisible.value = false
  }

  const removeIcon = () => {
    myValue.value = ''
    emits('update:modelValue', '')
    dialogVisible.value = false
  }

</script>

<template>
  <div>
    <el-icon class="icon-picker" :class="{ 'empty': myValue === '' }" @click="dialogVisible = true">
      <svg-icon :name="myValue !== '' ? myValue : 'ep:plus'" />
    </el-icon>

    <el-dialog v-model="dialogVisible" width="800px" title="选择图标">
      <div>
        <el-tabs v-model="activeName" tab-position="left">
          <el-tab-pane v-for="item in data" :key="item.prefix" :label="item.info.name" :name="item.prefix">
            <div class="flex flex-wrap">
              <div class="border cursor-pointer border-red-300 p-4" title="删除已选图标" @click="removeIcon">
                <el-icon :size="24">
                  <svg-icon name="ep:delete" />
                </el-icon>
              </div>
              <div v-for="icon in currentIconList" :key="icon" class="border cursor-pointer p-4" @click="chooseIcon(`${activeName}:${icon}`)">
                <el-icon :size="24">
                  <svg-icon :name="`${activeName}:${icon}`"></svg-icon>
                </el-icon>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="flex mt-4 px-10 justify-end">
          <el-pagination v-model:current-page="pagination.page" layout="prev, pager, next" :page-size="pagination.pageSize" :total="iconList.length" :pager-count="5" background />
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.icon-picker {
  width: 40px;
  height: 40px;
  line-height: 36px;
  text-align: center;
  color: var(--el-text-color-regular);
  border: 1px solid var(--el-border-color);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 24px;
  vertical-align: middle;

  &:hover {
    border: 1px solid var(--el-border-color-darker);
  }

  &.empty {
    color: var(--el-text-color-placeholder);
    border: 1px dashed var(--el-border-color);

    &:hover {
      color: var(--el-text-color-regular);
      border: 1px solid var(--el-border-color-darker);
    }
  }
}
</style>
