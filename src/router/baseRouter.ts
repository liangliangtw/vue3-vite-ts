const baseRouter = [
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
  // {
  //   path: '/:pathMatch(.*)*', // 必须使用正则表达式,
  //   // path: "/:w+", // 必须使用正则表达式
  //   hidden: true,
  //   name: 'errorPage',
  //   component: () => import('@/views/base404Page.vue'),
  // },
]
const errorRouter = {
  path: '/:pathMatch(.*)*', // 必须使用正则表达式,
  // path: "/:w+", // 必须使用正则表达式
  hidden: true,
  name: 'errorPage',
  component: () => import('@/views/base404Page.vue'),
}
export { baseRouter, errorRouter }
