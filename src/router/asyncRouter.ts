const layoutMap = [
  {
    path: '/dashboard/baseWatchApi',
    name: 'BaseWatchApi',
    component: () => import('@/views/baseWatchApi.vue'),
    meta: { title: '监听' },
  },
  {
    path: '/dashboard/baseGetDom',
    name: 'BaseGetDom',
    component: () => import('@/views/baseGetDom.vue'),
    meta: { title: '获取dom元素', roles: ['admin'] },
  },

  {
    path: '/dashboard/baseFather',
    name: 'BaseFather',
    component: () => import('@/views/baseFather/index.vue'),
    meta: { title: '测试父子组件' },
  },
  {
    path: '/dashboard/baseSlot',
    name: 'baseSlot',
    component: () => import('@/views/baseSlot/index.vue'),
    meta: { title: '插槽' },
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
    path: '/dashboard/baseNestRouter',
    name: 'BaseNestRouter',
    component: () => import('@/views/baseNestRouter/index.vue'),
    meta: { title: '嵌套路由', roles: ['admin'] },
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
        meta: { title: '测试路由Two', roles: ['admin'] },
      },
    ],
  },
]
// const asyncRouter = [
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     redirect: '/firstPage',
//     meta: {
//       title: '首页',
//       icon: 'menu',
//       breadcrumb: true,
//       affix: true,
//       noCache: true,
//     },
//     component: () => import('@/components/Dashboard.vue'),
//     children: [...layoutMap],
//   },
// ]
// asyncRouter
export { layoutMap }
