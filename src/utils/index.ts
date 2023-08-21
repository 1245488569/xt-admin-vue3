/**
 * 判断数据是否为空
 * @param data any
 * @returns boolean
 */
export function isEmpty(data: any) {
  if (!data)
    return true
  if (JSON.stringify(data) === '{}')
    return true
  if (JSON.stringify(data) === '[]')
    return true
  return false
}
