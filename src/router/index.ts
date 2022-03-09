import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { navigationList } from './asyncRouter'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Dashboard',
    meta: { title: '首页', icon: 'menu' },
    component: () => import('@/components/Dashboard.vue'), // 注意这里要带上 文件后缀.vue
    children: [
      {
        path: '/firstPage',
        name: 'FirstPage',
        component: () => import('@/components/TheFirstPage.vue'),
        meta: { title: '第一页面' }
      },
      {
        path: '/baseWatchApi',
        name: 'BaseWatchApi',
        component: () => import('@/views/baseWatchApi.vue'),
        meta: { title: '监听' }
      },
      {
        path: '/baseGetDom',
        name: 'BaseGetDom',
        component: () => import('@/views/baseGetDom.vue'),
        meta: { title: '获取dom元素' }
      },
      {
        path: '/basePiniaPage',
        name: 'BasePiniaPage',
        component: () => import('@/views/basePiniaPage.vue'),
        meta: { title: 'Pinia' }
      },
      {
        path: '/baseFather',
        name: 'BaseFather',
        component: () => import('@/views/baseFather/index.vue'),
        meta: { title: '测试父子组件' }
      },
      {
        path: '/baseSlot',
        name: 'baseSlot',
        component: () => import('@/views/baseSlot/index.vue'),
        meta: { title: '插槽' }
      },
      {
        path: '/baseVBind',
        name: 'BaseVBind',
        component: () => import('@/views/baseVBind.vue'),
        meta: { title: 'v-bind改变样式' }
      },
      {
        path: '/baseRouter',
        name: 'BaseRouter',
        component: () => import('@/views/baseRouter.vue'),
        meta: { title: '组件路由' }
      },
      {
        path: '/baseTeleportApi',
        name: 'BaseTeleportApi',
        component: () => import('@/views/baseTeleportApi.vue'),
        meta: { title: 'Teleport' }
      },
      {
        path: '/baseSuspenseApi',
        name: 'BaseSuspenseApi',
        component: () => import('@/views/baseSuspenseApi/index.vue'),
        meta: { title: 'Suspense' }
      },
      {
        path: '/baseNestRouter',
        name: 'BaseNestRouter',
        component: () => import('@/views/baseNestRouter/index.vue'),
        meta: { title: '嵌套路由' },
        children: [
          {
            path: '/baseNestRouter/one',
            name: 'One',
            component: () => import('@/views/baseNestRouter/child/one.vue'),
            meta: { title: '测试路由One' }
          },
          {
            path: '/baseNestRouter/two',
            name: 'Two',
            component: () => import('@/views/baseNestRouter/child/two.vue'),
            meta: { title: '测试路由Two' }
          }
        ]
      }
    ],
    redirect:'/firstPage'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
