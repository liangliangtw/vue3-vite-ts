const allLayoutMap = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: '/dashboard/firstPage',
    meta: {
      title: '首页',
      icon: 'menu',
      breadcrumb: true,
      affix: true,
      noCache: true,
    },
    component: () => import('@/components/Dashboard.vue'),
    children: [
      {
        path: '/dashboard/firstPage',
        name: 'FirstPage',
        component: () => import('@/components/TheFirstPage.vue'),
        meta: { title: '第一页面' },
      },
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
        path: '/dashboard/vueUse',
        name: 'VueUse',
        component: () => import('@/views/baseVueUsePage.vue'),
        meta: { title: 'vueUse' },
      },
      {
        path: '',
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
          {
            path: '',
            name: '嵌套深层1',
            component: () => import('@/components/TheNestRouterView.vue'),
            meta: { title: '嵌套深层1-1', roles: ['admin'] },
            children: [
              {
                path: '/dashboard/baseNestRouter/menu1',
                name: 'menu1',
                component: () => import('@/views/baseNestRouter/menu/menu1.vue'),
                meta: { title: '嵌套深层1', keepAlive: true, roles: ['admin'] },
              },
              {
                path: '',
                name: 'menu2',
                component: () => import('@/components/TheNestRouterView.vue'),
                meta: { title: '嵌套深层2', roles: ['admin'] },
                children: [
                  {
                    path: '/dashboard/baseNestRouter/menu3',
                    name: 'menu3',
                    component: () => import('@/views/baseNestRouter/menu/menu3.vue'),
                    meta: { title: '嵌套深层3', roles: ['admin'] },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/',
    hidden: true,
    redirect: '/login',
  },
  {
    path: '/login', // 必须使用正则表达式,
    // path: "/:w+", // 必须使用正则表达式
    hidden: true,
    name: 'loginPage',
    component: () => import('@/views/baseLogin.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 必须使用正则表达式,
    // path: "/:w+", // 必须使用正则表达式
    hidden: true,
    name: 'errorPage',
    component: () => import('@/views/base404Page.vue'),
  },
]

export { allLayoutMap }
