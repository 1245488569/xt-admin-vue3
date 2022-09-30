<script lang="ts" setup>
import { PropType } from 'vue'
import { TableOptions } from './types/types'
import cloneDeep from 'lodash/cloneDeep'

const emits = defineEmits([
  'edit-cell-confirm',
  'edit-cell-cancel',
  'update:edit-row-sign',
  'update:current-page',
  'update:page-size'
])
const props = defineProps({
  // 表格配置选项
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true
  },
  // 表格数据
  data: {
    type: Array as PropType<any[]>,
    required: true
  },
  // 是否展示多选
  showMultiple: {
    type: Boolean,
    default: false
  },
  // 编辑显示的图标
  editIcon: {
    type: String,
    default: 'ep:edit'
  },
  // 编辑显示的图标
  editSize: {
    type: Number,
    default: 16
  },
  // 是否可编辑行
  isEditRow: {
    type: Boolean,
    default: false
  },
  // 编辑行按钮的标识
  editRowSign: {
    type: String,
    default: ''
  },
  // 是否显示分页
  showPagination: {
    type: Boolean,
    default: true
  },
  // 显示分页的对齐方式
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'right'
  },
  paginationLayout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper'
  },
  paginationBackground: {
    type: Boolean,
    default: true
  },
  // 当前是第几页
  currentPage: {
    type: Number,
    default: 1
  },
  // 当前一页多少条数据
  pageSize: {
    type: Number,
    default: 10
  },
  // 显示分页数据多少条的选项
  pageSizes: {
    type: Array,
    default: () => [10, 20, 30, 40]
  },
  // 数据总条数
  total: {
    type: Number,
    default: 0
  }
})
// 表格的数据
const tableData = ref<any[]>(cloneDeep(props.data))
// 按钮的标识
const cloneEditRowSign = ref<string>(props.editRowSign)
// 过滤操作项之后的配置
const tableOption = computed(() => props.options.filter(item => !item.action))
// 操作项
const actionOption = computed(() => props.options.find(item => item.action))

// -----------------------可编辑相关--------------------
// 如果data的数据变了 要重新给tableData赋值
watch(
  () => props.data,
  val => {
    tableData.value = cloneDeep(val)
    tableData.value.map(item => {
      item.rowEdit = false
    })
  },
  { deep: true }
)

// 监听父组件传递的可编辑行标识改变
watch(
  () => props.editRowSign,
  val => {
    if (val) cloneEditRowSign.value = val
  }
)

onMounted(() => {
  tableData.value.map(item => {
    // 当前是不是可编辑状态
    item.rowEdit = false
  })
})

// 当前修改的单元格的标识
const currentEdit = ref<string>('')
// 点击单元格编辑图标
const clickEditIcon = (scope: any) => {
  currentEdit.value = scope.$index + scope.column.id
}
// 点击单元格确认
const check = (scope: any) => {
  emits('edit-cell-confirm', {
    row: scope.row,
    $index: scope.$index
  })
}
// 点击单元格取消
const close = (scope: any) => {
  emits('edit-cell-cancel', {
    row: scope.row,
    $index: scope.$index
  })
}
const clickEditCell = () => {
  currentEdit.value = ''
}
// 表格行点击事件
const rowClick = (row: any, column: any) => {
  // 判断是否是点击的操作项
  if (column.label === actionOption.value!.label) {
    if (props.isEditRow && cloneEditRowSign.value === props.editRowSign) {
      // 编辑行的操作
      row.rowEdit = !row.rowEdit
      // 重置其他数据的rowEdit
      tableData.value.map(item => {
        if (item !== row) item.rowEdit = false
      })
      // 重置按钮的标识
      if (!row.rowEdit) emits('update:edit-row-sign', '')
    }
  }
}

// -----------------------多选相关--------------------
const multipleSelection = ref<any[]>([])
const handleSelectionChange = (val: any[]) => {
  multipleSelection.value = val
}

defineExpose({
  multipleSelection
})

// -----------------------分页相关--------------------
const newCurrentPage = computed({
  get() {
    return props.currentPage
  },
  set(val: number) {
    emits('update:current-page', val)
  }
})
const newPageSize = computed({
  get() {
    return props.pageSize
  },
  set(val: number) {
    emits('update:page-size', val)
  }
})
// 表格分页的排列方式
const justifyContent = computed(() => {
  if (props.paginationAlign === 'left') return 'flex-start'
  else if (props.paginationAlign === 'right') return 'flex-end'
  else return 'center'
})
</script>

<template>
  <div>
    <el-table
      :data="tableData"
      border
      v-bind="$attrs"
      @selection-change="handleSelectionChange"
      @row-click="rowClick"
    >
      <template v-if="showMultiple">
        <el-table-column type="selection" width="55" align="center" />
      </template>
      <template v-for="(item, index) in tableOption" :key="index">
        <!-- 序号 -->
        <template v-if="item.tableColumnOtherAttrs?.type === 'index'">
          <el-table-column
            type="index"
            :label="item.label"
            :width="item.width"
            :align="item.align"
          />
        </template>
        <template v-else>
          <el-table-column
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
            :align="item.align"
            v-bind="item.tableColumnOtherAttrs"
          >
            <!-- 表头插槽 -->
            <template v-if="item.headerSlot" #header="scope">
              <slot
                :name="item.headerSlot"
                :column="scope.column"
                :$index="scope.$index"
              ></slot>
            </template>
            <template #default="scope">
              <!-- 编辑状态行 -->
              <template v-if="scope.row.rowEdit">
                <el-input v-model="scope.row[item.prop]"></el-input>
              </template>
              <!-- 非编辑状态行 -->
              <template v-else>
                <!-- 编辑状态单元格 -->
                <template v-if="scope.$index + scope.column.id === currentEdit">
                  <div class="flex items-center">
                    <el-input v-model="scope.row[item.prop]"></el-input>
                    <div @click.stop="clickEditCell">
                      <slot
                        name="editCell"
                        :row="scope.row"
                        :column="scope.column"
                        :$index="scope.$index"
                      >
                        <div class="flex ml-2">
                          <el-icon
                            :size="16"
                            color="#F56C6C"
                            class="cursor-pointer mr-2"
                            @click="check(scope)"
                          >
                            <svg-icon name="ep:check"></svg-icon>
                          </el-icon>
                          <el-icon
                            :size="16"
                            color="#67C23A"
                            class="cursor-pointer"
                            @click="close(scope)"
                          >
                            <svg-icon name="ep:close"></svg-icon>
                          </el-icon>
                        </div>
                      </slot>
                    </div>
                  </div>
                </template>
                <!-- 非编辑状态单元格 -->
                <template v-else>
                  <slot
                    v-if="item.slot"
                    :name="item.slot"
                    :row="scope.row"
                    :column="scope.column"
                    :$index="scope.$index"
                  ></slot>
                  <span v-else>{{ scope.row[item.prop] }}</span>
                  <el-icon
                    v-if="item.editable"
                    :size="editSize"
                    class="cursor-pointer"
                    @click.stop="clickEditIcon(scope)"
                  >
                    <svg-icon :name="editIcon"></svg-icon>
                  </el-icon>
                </template>
              </template>
            </template>
          </el-table-column>
        </template>
      </template>

      <!-- 操作列 -->
      <template v-if="actionOption">
        <el-table-column
          :label="actionOption.label"
          :width="actionOption.width"
          :align="actionOption.align"
          v-bind="actionOption.tableColumnOtherAttrs"
        >
          <template #default="scope">
            <slot
              v-if="scope.row.rowEdit"
              name="editRow"
              :row="scope.row"
              :column="scope.column"
              :$index="scope.$index"
            ></slot>
            <slot
              v-else
              name="action"
              :row="scope.row"
              :column="scope.column"
              :$index="scope.$index"
            ></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div v-if="showPagination" class="flex mt-4" :style="{ justifyContent }">
      <el-pagination
        v-model:current-page="newCurrentPage"
        v-model:page-size="newPageSize"
        :page-sizes="pageSizes"
        :background="paginationBackground"
        :layout="paginationLayout"
        :total="total"
      />
    </div>
  </div>
</template>
