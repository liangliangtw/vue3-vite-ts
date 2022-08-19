import { baseRouter } from '@/router/baseRouter'
import { allLayoutMap } from '@/router/allRouter'

// 通过函数内容获取文件名
export const getFileNameByFunContext = (str) => {
  // 截取.vue前面的文件名
  const fileName = str.split('\n')[0].split('.')[0]
  // 除去/,获取最后一个
  const lastName = fileName.split('/').pop()
  return lastName
}

// 找到以 target 作为“中间件”的所有路由
export const findRouterWith = (target) => {
  const fn = (routes, newRoutes = []) => {
    routes.forEach((item) => {
      if (item.children && item.children.length > 0) {
        // 跳过无component的路由(i.g. 全局匹配无效路由)
        if (item.component) {
          if (getFileNameByFunContext(item.component.toString()) === target) {
            newRoutes.push(item.children)
          }
          fn(item.children, newRoutes)
        }
      }
    })
    return newRoutes.flat(Infinity)
  }
  return fn
}

// 获取需进行缓存的页面
export const getCachesByRoutes = (routes = []) => {
  const children = []
  const caches = routes
    .filter((o) => {
      // 有children说明进行了路由嵌套，需记录“中间件”
      if (o.children) {
        children.push(o.component)
      }
      // 过滤掉“中间件”和不需要缓存的组件
      return !o.children && o.meta.keepAlive
    })
    .map((o) => o.name)

  if (children.length > 0) {
    // 路由嵌套的组件也需include
    children.forEach((fun) => {
      caches.push(getFileNameByFunContext(fun.toString()))
    })
  }
  return [...new Set(caches)]
}
