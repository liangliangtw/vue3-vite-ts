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
        path: '/baseWatch',
        name: 'BaseWatch',
        component: () => import('@/views/BaseWatch.vue'),
        meta: { title: '监听页面' }
      },
      {
        path: '/baseGetDom',
        name: 'BaseGetDom',
        component: () => import('@/views/baseGetDom.vue'),
        meta: { title: '获取dom元素' }
      },
      {
        path: '/basePinia',
        name: 'BasePinia',
        component: () => import('@/views/basePinia.vue'),
        meta: { title: 'Pinia' }
      },
      {
        path: '/baseFather',
        name: 'BaseFather',
        component: () => import('@/views/baseFather/index.vue'),
        meta: { title: '测试父子组件' }
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
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
