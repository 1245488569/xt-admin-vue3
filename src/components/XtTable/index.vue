<script setup lang="ts">
import type { IPageChangeData, IPageObject, IXtTableCustomConfig } from '@/types/common'

interface IProps {
  data: any[]
  customConfig?: IXtTableCustomConfig
  pageObject?: IPageObject
  paginationAlign?: 'left' | 'center' | 'right'
}

defineOptions({
  name: 'XtTable',
})

const props = withDefaults(defineProps<IProps>(), {
  customConfig: () => ({}),
  pageObject: () => ({}),
  paginationAlign: 'right',
})

const emits = defineEmits<{
  (e: 'pageChange', page: IPageChangeData): void
  (e: 'singleSelect', row: any): void
  (e: 'multipleSelect', selection: any[]): void
}>()

const config = reactive({
  showDataGridTop: true,
  showDataGridTopRight: true,
  showDataGridTopLeft: true,
  showDataGridBottom: true,
  showPagination: true,

  showSingleSelection: false,
  showIndex: true,
  showMultipleSelection: false,
  showOperation: true,

  indexAlignFixed: 'left',
  operationAlignFixed: 'right',
  operationAlign: 'center',
  align: 'center',
  selectionWidth: 40,
  indexWidth: 60,
  operationWidth: 200,
  columns: [] as any[],
  rowButtons: [] as any[],
  selectable: () => true,
  combineBtnLink: false,
})

onMounted(() => {
  Object.assign(config, props.customConfig)
  setFilter()
})
// 可见列表
const visiblePropList = ref<any[]>([])
// 列筛选字段
const filterColumn = ref<any[]>([])

// 设置列显示默认值
function setFilter() {
  filterColumn.value = config.columns.filter(item => !item.deleted)
  filterColumn.value.forEach((item) => {
    item.show !== false && visiblePropList.value.push(item.prop)
  })
}

const dataGridRef = ref<any>(null)

const tableRadio = ref<number>(-1)

function handleCurrentChange(currentRow: any) {
  if (config.showSingleSelection)
    tableRadio.value = currentRow.index

  emits('singleSelect', currentRow)
}

const authOperate = computed(() => {
  if (config.rowButtons && config.rowButtons.length)
    return config.rowButtons.filter(item => !item.putInCombineBox)

  return []
})
const combineBoxAuthOperate = computed(() => {
  if (config.rowButtons && config.rowButtons.length)
    return config.rowButtons.filter(item => item.putInCombineBox)

  return []
})

let combineBoxDropdownRefArr = [] as any[]
function combineBoxDropdownRef(el: any) {
  combineBoxDropdownRefArr.push(el)
}

onBeforeUpdate(() => {
  combineBoxDropdownRefArr = []
})

function handleCombineBoxCommand(btn: any, row: any, rowIndex: number) {
  if (combineBoxAuthOperate.value.length) {
    let isDisabled = false
    if (typeof btn.isDisabled === 'function') {
      const tempDisabled = btn.isDisabled(row)
      isDisabled = tempDisabled || false
    }
    if (isDisabled) {
      combineBoxDropdownRefArr[rowIndex].show()
      return
    }
    btn.click(row, rowIndex)
  }
}

function handleSelectionChange(selection: any[]) {
  emits('multipleSelect', selection)
}

// 表格分页的排列方式
const justifyContent = computed(() => {
  let string = ''
  switch (props.paginationAlign) {
    case 'left':
      string = 'flex-start'
      break
    case 'center':
      string = 'center'
      break
    default:
      string = 'flex-end'
      break
  }
  return string
})

function pageChange(page: IPageChangeData) {
  emits('pageChange', JSON.parse(JSON.stringify(page)))
}

function clearSelection() {
  dataGridRef.value?.clearSelection()
}
function toggleRowSelection(row: any, selected: boolean) {
  dataGridRef.value?.toggleRowSelection(row, selected)
}
function toggleAllSelection() {
  dataGridRef.value?.toggleAllSelection()
}
function toggleRowExpansion(row: any, expanded: boolean) {
  dataGridRef.value?.toggleRowExpansion(row, expanded)
}
function setCurrentRow(row: any) {
  dataGridRef.value?.setCurrentRow(row)
}
function clearSort() {
  dataGridRef.value?.clearSort()
}
function clearFilter(columnKey: any) {
  dataGridRef.value?.clearFilter(columnKey)
}
function doLayout() {
  dataGridRef.value?.doLayout()
}
function sort(prop: any, order: any) {
  dataGridRef.value?.sort(prop, order)
}

defineExpose({
  clearSelection,
  toggleRowSelection,
  toggleAllSelection,
  toggleRowExpansion,
  setCurrentRow,
  clearSort,
  clearFilter,
  doLayout,
  sort,
})
</script>

<template>
  <div class="data-grid">
    <div v-if="config.showDataGridTop" class="px-2 data-grid-top">
      <slot name="top">
        <div v-if="config.showDataGridTopLeft" class="top-action-bar">
          <slot name="top-left" />
        </div>
        <div v-if="config.showDataGridTopRight" class="top-setting">
          <slot name="top-right">
            <el-popover placement="bottom-end" trigger="click">
              <template #reference>
                <svg-icon name="ep:operation" class="cursor-pointer text-xl" />
              </template>
              <template #default>
                <el-checkbox-group v-model="visiblePropList" class="filter-column">
                  <el-checkbox v-for="(col, index) in filterColumn" :key="index" :label="col.prop">
                    {{ col.label }}
                  </el-checkbox>
                </el-checkbox-group>
              </template>
            </el-popover>
          </slot>
        </div>
      </slot>
    </div>
    <div class="data-grid-table" :class="config.showDataGridTop ? 'mt-2' : ''">
      <el-table
        ref="dataGridRef" :data="data" highlight-current-row border
        class="xt-table" v-bind="$attrs" @current-change="handleCurrentChange" @selection-change="handleSelectionChange"
      >
        <el-table-column v-if="config.showSingleSelection" :width="config.selectionWidth" :align="config.align">
          <template #default="scope">
            <el-radio v-model="tableRadio" :label="scope.$index" />
          </template>
        </el-table-column>
        <el-table-column
          v-if="config.showMultipleSelection" type="selection" :width="config.selectionWidth"
          :align="config.align" :selectable="config.selectable"
        />
        <!-- 索引列 -->
        <el-table-column
          v-if="config.showIndex" :fixed="config.indexAlignFixed" type="index" :width="config.indexWidth"
          label="序号" :align="config.align"
        />
        <!-- 常规列 -->
        <template v-for="(col, index) in filterColumn" :key="index">
          <el-table-column
            v-if="visiblePropList.includes(col.prop)" :align="col.align"
            :width="col.width" :min-width="col.minWidth"
            :label="col.label" :sortable="!col.sortable ? col.sortable : col.headerSlot ? false : true"
            :prop="col.prop" show-overflow-tooltip
          >
            <template v-if="col.headerSlot" #header="{ column, $index }">
              <slot :name="col.headerSlot" :column="column" :index="$index" />
            </template>
            <template #default="scope">
              <slot
                v-if="col.slot" :name="col.slot" :row="scope.row" :prop="col.prop" :column="scope.column"
                :index="scope.$index"
              />
              <slot v-else-if="col.click && typeof col.click === 'function'">
                <span
                  class="cursor-pointer text-[var(--el-color-primary)]"
                  @click="col.click(scope.row, scope.$index)"
                >{{
                  scope.row[col.prop] === 0 ? 0 : scope.row[col.prop] || '--'
                }}</span>
              </slot>
              <span v-else>{{ scope.row[col.prop] === 0 ? 0 : scope.row[col.prop] || '--' }}</span>
            </template>
          </el-table-column>
        </template>
        <!-- 操作列 -->
        <el-table-column
          v-if="authOperate.length || combineBoxAuthOperate.length" :fixed="config.operationAlignFixed"
          :width="config.operationWidth" :align="config.operationAlign" label="操作"
        >
          <template #default="scope">
            <template v-for="(btn, index) in authOperate" :key="index">
              <el-button
                v-if="typeof btn.isShow === 'function' ? btn.isShow(scope.row) : true"
                :disabled="typeof btn.isDisabled === 'function' ? btn.isDisabled(scope.row) : false"
                :title="typeof btn.showTitle === 'function' ? btn.showTitle(scope.row) : ''"
                v-bind="btn.attrs"
                @click="btn.click(scope.row, scope.$index)"
              >
                <span v-if="!btn.onlyIcon">{{ btn.name }}</span>
              </el-button>
            </template>
            <template v-if="combineBoxAuthOperate.length">
              <el-dropdown
                ref="combineBoxDropdownRef" :hide-on-click="true"
                class="combine-box-dropdown" trigger="click" placement="bottom-start"
              >
                <el-button :link="config.combineBtnLink" type="primary" plain>
                  更多
                </el-button>
                <template #dropdown>
                  <el-dropdown-menu class="combine-box-dropdown-menu">
                    <el-dropdown-item
                      v-for="(btn, index) in combineBoxAuthOperate" :key="index"
                      :title="typeof btn.showTitle === 'function' ? btn.showTitle(scope.row) : ''"
                      :disabled="typeof btn.isDisabled === 'function' ? btn.isDisabled(scope.row) : false"
                      v-bind="btn.attrs"
                      @click.stop="handleCombineBoxCommand(btn, scope.row, scope.$index)"
                    >
                      {{ btn.name }}
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </template>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="config.showDataGridBottom" class="flex mt-2 px-4 data-grid-bottom" :style="{ justifyContent }">
      <slot name="bottom">
        <div v-if="config.showPagination" class="data-grid-bottom-right">
          <slot name="bottom-left">
            <xt-pagination :page-object="pageObject" @page-change="pageChange" />
          </slot>
        </div>
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-grid {
  width: 100%;

  .data-grid-top {
    display: flex;
    justify-content: space-between;

    .top-action-bar {
      display: flex;
      flex: 1;
      align-items: center;
    }

    .top-setting {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      max-width: 240px;
    }
  }
}

.combine-box-dropdown {
  margin-left: 10px;
}

.combine-box-dropdown-menu {
  li {
    min-width: 54px;
    text-align: center;
  }

  .el-dropdown-menu__item.is-disabled {
    pointer-events: unset;
    cursor: not-allowed;
  }
}
</style>
