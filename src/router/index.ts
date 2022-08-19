import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { asyncAllRouterList } from './asyncAllRouter'
import { asyncSomeRouterList } from './asyncSomeRouter'
import { baseRouter, errorRouter } from './baseRouter'
import { useUserStore } from '@/store/user'
// import { storeToRefs } from 'pinia'
import { filterAsyncRouter } from '@/untils/tool'
// let accessedRouters = filterAsyncRouter(routes, 'admin');

import baseWatchApiComponent from '@/views/baseWatchApi.vue'
const creatRouter = () => {
  return createRouter({
    history: createWebHistory(),
    routes: baseRouter,
  })
}
const router = creatRouter()
//重置路由：清空user 创建新的router store清空routes记录
export function resetRouter(): void {
  const store = useUserStore()
  sessionStorage.setItem('user', '')
  // router = creatRouter() // 避免重新创建路由实例,组件获取的router.getRoutes()是旧路由实例匹配不上新的所有路由
  router.routes = [...baseRouter]
  store.setAllRoutes([])
  console.log('resetRouter--store.allRoutes', store.allRoutes)
}

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if (to.path === '/login' || to.path === '') {
    console.log('进入删除路由', store.allRoutes)
    // resetRouter()
    console.log('删除路由-全部路由', router.getRoutes())
    next()
    return
  }

  // 判断是否需要缓存
  if (store.allRoutes && store.allRoutes.length > 0) {
    console.log('已有-共享路由', store.allRoutes)
    console.log('已有-全部路由', router.getRoutes())
    next()
  } else {
    const user: string | null = sessionStorage.getItem('user')
    if (user) {
      if (user.length > 3) {
        console.log(router, '进入添加路由>3')
        asyncAllRouterList.forEach((item) => {
          router.addRoute('Dashboard', item)
        })
      } else {
        console.log(router, '进入添加路由<3')
        asyncSomeRouterList.forEach((item) => {
          router.addRoute('Dashboard', item)
        })
      }
    }

    router.addRoute(errorRouter) // 最后添加404路由
    store.setAllRoutes(router.getRoutes())
    // console.log(router.id, '添加路由后的实例')
    next({ ...to, replace: true })
  }
})

export default router
