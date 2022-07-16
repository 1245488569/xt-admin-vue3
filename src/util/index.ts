/**
 * 判断数据是否为空值
 */
export function isEmpty(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
