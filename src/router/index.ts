import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { allLayoutMap } from './allRouter'
import { layoutMap } from './asyncRouter'
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
let router = creatRouter()

//重置路由：清空user 创建新的router store清空routes记录
export function resetRouter(): void {
  const store = useUserStore()
  sessionStorage.setItem('user', '')
  router = creatRouter()
  store.setAllRoutes([])
  console.log('resetRouter--store.allRoutes', store.allRoutes)
}

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  if (to.path === '/login' || to.path === '') {
    console.log('进入删除路由')
    // resetRouter()
    console.log('删除路由-全部路由', router.getRoutes())
    next()
    return
  }

  if (store.allRoutes && store.allRoutes.length > 0) {
    console.log(router.hasRoute('BaseWatchApi'), 'hasRoute')
    console.log('已有-共享路由', store.allRoutes)
    console.log('已有-全部路由', router.getRoutes())

    next()
  } else {
    const user: string | null = sessionStorage.getItem('user')
    if (user) {
      if (user.length > 3) {
        console.log('进入添加路由>3')
        allLayoutMap.forEach((item) => {
          router.addRoute('Dashboard', item)
        })
      } else {
        console.log('进入添加路由<3')
        layoutMap.forEach((item) => {
          router.addRoute('Dashboard', item)
        })
      }
    }

    router.addRoute(errorRouter) // 最后添加404路由
    store.setAllRoutes(router.getRoutes())
    // console.log(router.getRoutes(), 'router.getRoutes()')
    next({ ...to, replace: true })
  }
})

export default router
