import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { routes, layoutMap } from './asyncRouter'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { filterAsyncRouter } from "@/untils/tool";
// let routes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     name: 'Dashboard',
//     meta: { title: '首页', icon: 'menu' },
//     redirect: { path: '/firstPage' },
//     component: () => import('@/components/Dashboard.vue'), // 注意这里要带上 文件后缀.vue
//     children: [
//       {
//         path: '/firstPage',
//         name: 'FirstPage',
//         component: () => import('@/components/TheFirstPage.vue'),
//         meta: { title: '第一页面' }
//       },
//       {
//         path: '/baseWatchApi',
//         name: 'BaseWatchApi',
//         component: () => import('@/views/baseWatchApi.vue'),
//         meta: { title: '监听' }
//       },
//       {
//         path: '/baseGetDom',
//         name: 'BaseGetDom',
//         component: () => import('@/views/baseGetDom.vue'),
//         meta: { title: '获取dom元素', roles: ["admin"] }
//       },
//       {
//         path: '/basePiniaPage',
//         name: 'BasePiniaPage',
//         component: () => import('@/views/basePiniaPage.vue'),
//         meta: { title: 'Pinia' }
//       },
//       {
//         path: '/baseFather',
//         name: 'BaseFather',
//         component: () => import('@/views/baseFather/index.vue'),
//         meta: { title: '测试父子组件' }
//       },
//       {
//         path: '/baseSlot',
//         name: 'baseSlot',
//         component: () => import('@/views/baseSlot/index.vue'),
//         meta: { title: '插槽' }
//       },
//       {
//         path: '/baseVBind',
//         name: 'BaseVBind',
//         component: () => import('@/views/baseVBind.vue'),
//         meta: { title: 'v-bind改变样式' }
//       },
//       {
//         path: '/baseRouter',
//         name: 'BaseRouter',
//         component: () => import('@/views/baseRouter.vue'),
//         meta: { title: '组件路由' }
//       },
//       {
//         path: '/baseTeleportApi',
//         name: 'BaseTeleportApi',
//         component: () => import('@/views/baseTeleportApi.vue'),
//         meta: { title: 'Teleport' }
//       },
//       {
//         path: '/baseSuspenseApi',
//         name: 'BaseSuspenseApi',
//         component: () => import('@/views/baseSuspenseApi/index.vue'),
//         meta: { title: 'Suspense' }
//       },
//       {
//         path: '/baseToDoList',
//         name: 'BaseToDoList',
//         component: () => import('@/views/baseToDoList.vue'),
//         meta: { title: 'ToDoList' }
//       },
//       {
//         path: '/baseCMSMenu',
//         name: 'BaseCMSMenu',
//         component: () => import('@/views/baseCMSMenu.vue'),
//         meta: { title: '类型卡片' }
//       },
//       {
//         path: '/baseNestRouter',
//         name: 'BaseNestRouter',
//         component: () => import('@/views/baseNestRouter/index.vue'),
//         meta: { title: '嵌套路由' },
//         children: [
//           {
//             path: '/baseNestRouter/one',
//             name: 'One',
//             component: () => import('@/views/baseNestRouter/child/one.vue'),
//             meta: { title: '测试路由One' }
//           },
//           {
//             path: '/baseNestRouter/two',
//             name: 'Two',
//             component: () => import('@/views/baseNestRouter/child/two.vue'),
//             meta: { title: '测试路由Two' }
//           }
//         ]
//       }
//     ],
//   }

// ]



let accessedRouters = filterAsyncRouter(routes, 'admin');


const router = createRouter({
  history: createWebHistory(),
  routes: accessedRouters,
})

// router.addRoute('404', {
//   path: '/404',
//   name: '404',
//   component: () => import('@/views/base404Page.vue'),
//   meta: { title: '404' }
// })

// router.beforeEach((to, from, next) => {
//   const store = useUserStore()
//   const { isAddRouter } = storeToRefs(store)
//   console.log(isAddRouter.value, isAddRouter, 'store');
//   if (isAddRouter) {
//     // navigationList 是上面模拟接口返回的数据
//     // 这里将新的路由都作为 home 的子路由(实际开发根据情况)
//     // meta 是存储一些信息，可以用于权限校验或其他
//     // store.setAsyncRoutes(router) // 添加路由后更改标识为true
//     console.log(router.getRoutes(), '查看现有路由')
//     next({ ...to, replace: true })     //路由进行重定向放行
//   } else {
//     next()
//     console.log('进来');

//   }

// })

export default router
