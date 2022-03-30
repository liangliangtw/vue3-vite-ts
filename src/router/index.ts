import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { routes, layoutMap } from './asyncRouter'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { filterAsyncRouter } from "@/untils/tool";


// const routes = [
//   {
//     path: '/',
//     name: 'Dashboard',
//     // redirect: '/baseRouter',
//     meta: { title: '首页', icon: 'menu', isSideBar: 1, },
//     component: () => import('@/components/Dashboard.vue'),
//     children: [
//       {
//         path: 'baseRouter',
//         name: 'BaseRouter',
//         component: () => import('@/views/baseRouter.vue'),
//         meta: { title: '组件路由' }
//       }
//     ]
//   },
//   {
//     path: "/:pathMatch(.*)*", // 必须使用正则表达式,
//     // path: "/:w+", // 必须使用正则表达式
//     hidden: true,
//     name: 'errorPage',
//     component: () => import('@/views/base404Page.vue'),
//   }
// ]

// let accessedRouters = filterAsyncRouter(routes, 'admin');

const router = createRouter({
  history: createWebHistory(),
  routes,
})
// console.log(router.getRoutes(), 'test')
// router.addRoute({ name: 'admin', path: '/admin', component: () => import('@/views/basePiniaPage.vue') })
// router.addRoute('admin', { path: 'settings', component: () => import('@/views/baseFather/index.vue') })
// console.log(router.getRoutes(), '添加路由后');

// console.log(router.getRoutes());
// router.addRoute('Dashboard', {
//   path: '/baseWatchApi',
//   name: 'BaseWatchApi',
//   component: () => import('@/views/baseWatchApi.vue'),
//   meta: { title: '监听' }
// })


// router.beforeEach((to, from, next) => {
//   // console.log(router.getRoutes());
//   const store = useUserStore()

//   let userRoles = sessionStorage.getItem('userRoles')

//   // console.log(isAddRouter.value, isAddRouter, 'store');
//   if (!userRoles) {
//     console.log('进入1');
//     // store.setAsyncRoutes('admin', router)
//     store.filterRouter()
//     console.log(userRoles, 'userRoles');
//     next()
//     // console.log(router.getRoutes());
//     // console.log(routerList, '查看现有路由')
//     // next({ ...to, replace: true })     //路由进行重定向放行
//   } else {
//     console.log('进入2');
//     if (to.meta.hasOwnProperty('roles')) {
//       let routerRoles: any = to.meta.roles || []
//       routerRoles.includes(routerRoles) ? next() : next('/error')
//       return false
//     } else {
//       next()
//     }
//   }

// })

export default router
