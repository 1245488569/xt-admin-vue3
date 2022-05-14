export interface IResponseDataType<T = any> {
  code: number
  message: string,
  type: string,
  result: T,
}
