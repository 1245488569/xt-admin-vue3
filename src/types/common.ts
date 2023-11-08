export interface IPageObject {
  small?: boolean
  background?: boolean
  totalPage?: number
  total?: number
  pageSize?: number
  pageNumber?: number
  prevText?: string
  nextText?: string
  pagerCount?: number
  layout?: string
  pageSizes?: number[]
  hideOnSinglePage?: boolean
  disabled?: boolean
}

export interface IPageChangeData {
  pageNumber: number
  pageSize: number
}

export interface IXtTableCustomConfig {
  showDataGridTop?: boolean
  showDataGridTopRight?: boolean
  showDataGridTopLeft?: boolean
  showDataGridBottom?: boolean
  showPagination?: boolean

  showSingleSelection?: boolean
  showIndex?: boolean
  indexAlignFixed?: 'left' | 'right'

  showMultipleSelection?: boolean
  showOperation?: boolean
  operationAlignFixed?: 'left' | 'right'
  operationAlign?: 'left' | 'center' | 'right'
  align?: 'left' | 'center' | 'right'
  selectionWidth?: number
  indexWidth?: number
  operationWidth?: number
  columns?: any[]
  rowButtons?: any[]
  selectable?: (row: any, index: number) => boolean
  combineBtnLink?: boolean
}
