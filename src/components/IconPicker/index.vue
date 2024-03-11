<script setup lang="ts">
import data from './data/data.json'

defineOptions({
  name: 'IconPicker',
})

const model = defineModel<string>({
  default: '',
})

// ------------------数据初始化------------------
const activeName = ref(model.value.split(':')[0] || data[0].prefix)

const pagination = ref({
  page: 1,
  pageSize: 49,
})
const iconList = computed(() => {
  return data.filter(item => item.prefix === activeName.value)[0].icons
})

const currentIconList = computed(() => {
  return iconList.value.slice(
    (pagination.value.page - 1) * pagination.value.pageSize,
    (pagination.value.page - 1) * pagination.value.pageSize
    + pagination.value.pageSize,
  )
})

// ------------------选择图标相关------------------
const dialogVisible = ref(false)

function chooseIcon(val: string) {
  model.value = val
  dialogVisible.value = false
}

function removeIcon() {
  model.value = ''
  dialogVisible.value = false
}
</script>

<template>
  <div>
    <el-icon
      class="icon-picker"
      :class="{ empty: model === '' }"
      :size="24"
      @click="dialogVisible = true"
    >
      <svg-icon :name="model !== '' ? model : 'ep:plus'" />
    </el-icon>

    <xt-dialog v-model="dialogVisible" width="800px" title="选择图标" :show-cancel="false" :show-confirm="false">
      <div>
        <el-tabs v-model="activeName" tab-position="left">
          <el-tab-pane
            v-for="item in data"
            :key="item.prefix"
            :label="item.name"
            :name="item.prefix"
          >
            <div class="flex flex-wrap">
              <div
                class="cursor-pointer border border-red-300 p-4"
                title="删除已选图标"
                @click="removeIcon"
              >
                <el-icon :size="24">
                  <svg-icon name="ep:delete" />
                </el-icon>
              </div>
              <div
                v-for="icon in currentIconList"
                :key="icon"
                class="cursor-pointer border p-4"
                @click="chooseIcon(`${activeName}:${icon}`)"
              >
                <el-icon :size="24">
                  <svg-icon :name="`${activeName}:${icon}`" />
                </el-icon>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="mt-4 flex justify-end px-10">
          <el-pagination
            v-model:current-page="pagination.page"
            layout="prev, pager, next"
            :page-size="pagination.pageSize"
            :total="iconList.length"
            :pager-count="5"
            background
          />
        </div>
      </div>
    </xt-dialog>
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
