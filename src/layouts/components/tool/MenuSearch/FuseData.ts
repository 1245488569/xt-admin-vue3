import path from 'path-browserify'
import { i18n } from '@/plugins/i18n/index'
/**
 * 筛选出可供搜索的路由对象
 * @param routes 路由表
 * @param basePath 基础路径，默认为 /
 * @param prefixTitle
 */
export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  let res = [] as any
  for (const route of routes) {
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle] as any
    }
    // 动态路由不允许被搜索
    const re = /.*\/:.*/
    if (
      route.meta &&
      route.meta.title &&
      route.meta.hideInSearch !== true &&
      !re.exec(route.path)
    ) {
      const i18ntitle = i18n.global.te(route.meta.title)
        ? i18n.global.t(route.meta.title)
        : route.meta.title
      data.title = [...data.title, i18ntitle]
      res.push(data)
    }

    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.path, data.title)
      if (tempRoutes.length >= 1) {
        res = [...res, ...tempRoutes]
      }
    }
  }
  return res
}
