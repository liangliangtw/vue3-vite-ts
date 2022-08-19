const asyncSomeRouterList = [
  {
    path: '/dashboard/baseWatchApi',
    name: 'BaseWatchApi',
    component: () => import('@/views/baseWatchApi.vue'),
    meta: { title: '监听', keepAlive: true },
  },
  {
    path: '/dashboard/baseGetDom',
    name: 'BaseGetDom',
    component: () => import('@/views/baseGetDom.vue'),
    meta: { title: '获取dom元素', roles: ['admin'] },
  },
  {
    path: '/dashboard/basePiniaPage',
    name: 'BasePiniaPage',
    component: () => import('@/views/basePiniaPage.vue'),
    meta: { title: 'Pinia' },
  },

  {
    path: '/dashboard/baseVBind',
    name: 'BaseVBind',
    component: () => import('@/views/baseVBind.vue'),
    meta: { title: 'v-bind改变样式' },
  },
  {
    path: '/dashboard/baseRouter',
    name: 'BaseRouter',
    component: () => import('@/views/baseRouter.vue'),
    meta: { title: '组件路由' },
  },
  {
    path: '/dashboard/baseTeleportApi',
    name: 'BaseTeleportApi',
    component: () => import('@/views/baseTeleportApi.vue'),
    meta: { title: 'Teleport' },
  },
  {
    path: '/dashboard/baseSuspenseApi',
    name: 'BaseSuspenseApi',
    component: () => import('@/views/baseSuspenseApi/index.vue'),
    meta: { title: 'Suspense' },
  },
  {
    path: '/dashboard/baseToDoList',
    name: 'BaseToDoList',
    component: () => import('@/views/baseToDoList.vue'),
    meta: { title: 'ToDoList' },
  },
  {
    path: '/dashboard/baseCMSMenu',
    name: 'BaseCMSMenu',
    component: () => import('@/views/baseCMSMenu.vue'),
    meta: { title: '类型卡片' },
  },
  {
    path: '/dashboard/vueUse',
    name: 'VueUse',
    component: () => import('@/views/baseVueUsePage.vue'),
    meta: { title: 'vueUse' },
  },
  {
    path: '/dashboard/BaseNestRouter',
    name: 'BaseNestRouter',
    component: () => import('@/components/TheNestRouterView.vue'),
    meta: { title: '嵌套路由', keepAlive: true, roles: ['admin'] },
    children: [
      {
        path: '/dashboard/baseNestRouter/one',
        name: 'One',
        component: () => import('@/views/baseNestRouter/child/one.vue'),
        meta: { title: '测试路由One' },
      },
      {
        path: '/dashboard/baseNestRouter/two',
        name: 'Two',
        component: () => import('@/views/baseNestRouter/child/two.vue'),
        meta: { title: '测试路由Two', keepAlive: false, roles: ['admin'] },
      },
    ],
  },
]

export { asyncSomeRouterList }
