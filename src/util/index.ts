/**
 * 判断数据是否为空值
 */
export function isEmpty(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

/**
 * 深拷贝
 */
export function deepClone(target) {
  let result
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = []
      for (const i in target) {
        result.push(deepClone(target[i]))
      }
    } else if (target === null) {
      result = null
    } else if (target.constructor === RegExp) {
      result = target
    } else {
      result = {}
      for (const i in target) {
        result[i] = deepClone(target[i])
      }
    }
  } else {
    result = target
  }
  return result
}
