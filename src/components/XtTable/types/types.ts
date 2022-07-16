export interface TableOptions {
  // 字段名称
  prop: string,
  // // 表头
  label: string,
  // 对应列的宽度
  width?: string | number,
  // 对齐方式
  align?: 'left' | 'center' | 'right',
  // 其他属性
  tableColumnOtherAttrs?: {
    type?: 'selection' | 'index' | 'expand',
    index?: number | Function,
    columnKey?: string,
    minWidth?: string | number,
    fixed?: true | 'left' | 'right',
    sortable?: true | false | 'custom',
    sortMethod?: Function,
    sortBy?: Function | string | any[],
    sortOrders?: ['ascending'] | ['descending'] | [null] | ['ascending', 'descending'] | ['ascending', null] | ['descending', null] | ['ascending', 'descending', null],
    resizable?: boolean,
    headerAlign?: 'left' | 'center' | 'right',
    className?: string,
    labelClassName?: string,
    // 未写完 自己补充
  }
  // 自定义列表头
  headerSlot?: string,
  // 自定义列模板的插槽名
  slot?: string,
  // 是否是操作项
  action?: boolean,
  // 是否可以编辑
  editable?: boolean
}
