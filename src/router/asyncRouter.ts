const layoutMap = [
  {
    path: "/firstPage",
    name: "FirstPage",
    component: () => import("@/components/TheFirstPage.vue"),
    meta: { title: "第一页面", breadcrumb: true },
  },
  {
    path: "/baseWatchApi",
    name: "BaseWatchApi",
    component: () => import("@/views/baseWatchApi.vue"),
    meta: { title: "监听" },
  },
  {
    path: "/baseGetDom",
    name: "BaseGetDom",
    component: () => import("@/views/baseGetDom.vue"),
    meta: { title: "获取dom元素", roles: ["admin"] },
  },
  {
    path: "/basePiniaPage",
    name: "BasePiniaPage",
    component: () => import("@/views/basePiniaPage.vue"),
    meta: { title: "Pinia" },
  },
  {
    path: "/baseFather",
    name: "BaseFather",
    component: () => import("@/views/baseFather/index.vue"),
    meta: { title: "测试父子组件" },
  },
  {
    path: "/baseSlot",
    name: "baseSlot",
    component: () => import("@/views/baseSlot/index.vue"),
    meta: { title: "插槽" },
  },
  {
    path: "/baseVBind",
    name: "BaseVBind",
    component: () => import("@/views/baseVBind.vue"),
    meta: { title: "v-bind改变样式" },
  },
  {
    path: "/baseRouter",
    name: "BaseRouter",
    component: () => import("@/views/baseRouter.vue"),
    meta: { title: "组件路由" },
  },
  {
    path: "/baseTeleportApi",
    name: "BaseTeleportApi",
    component: () => import("@/views/baseTeleportApi.vue"),
    meta: { title: "Teleport" },
  },
  {
    path: "/baseSuspenseApi",
    name: "BaseSuspenseApi",
    component: () => import("@/views/baseSuspenseApi/index.vue"),
    meta: { title: "Suspense" },
  },
  {
    path: "/baseToDoList",
    name: "BaseToDoList",
    component: () => import("@/views/baseToDoList.vue"),
    meta: { title: "ToDoList" },
  },
  {
    path: "/baseCMSMenu",
    name: "BaseCMSMenu",
    component: () => import("@/views/baseCMSMenu.vue"),
    meta: { title: "类型卡片" },
  },
  {
    path: "/baseNestRouter",
    name: "BaseNestRouter",
    component: () => import("@/views/baseNestRouter/index.vue"),
    meta: { title: "嵌套路由", roles: ["admin"] },
    children: [
      {
        path: "/baseNestRouter/one",
        name: "One",
        component: () => import("@/views/baseNestRouter/child/one.vue"),
        meta: { title: "测试路由One" },
      },
      {
        path: "/baseNestRouter/two",
        name: "Two",
        component: () => import("@/views/baseNestRouter/child/two.vue"),
        meta: { title: "测试路由Two", roles: ["admin"] },
      },
    ],
  },
];
const routes = [
  {
    path: "/",
    name: "Dashboard",
    redirect: "/firstPage",
    meta: {
      title: "首页",
      icon: "menu",
      breadcrumb: true,
      affix: true,
      noCache: true,
    },
    component: () => import("@/components/Dashboard.vue"),
    children: [...layoutMap],
  },
  // {
  //   path: '/errorPage',
  //   name: 'errorPage',
  //   hidden: true,
  //   meta: { title: '失败页' },
  //   component: () => import('@/views/base404Page.vue'),
  // },
  // 匹配所有路径  vue2使用*   vue3使用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
  // 原因：Vue Router不再使用path-to-regexp，而是实现了自己的解析系统，该系统允许路由排名并启用动态路由。由于我们通常会在每个项目中添加一条单独的包罗万象的路线，因此支持的特殊语法没有太大的好处*。参数的编码是跨路线编码，无一例外使事情更容易预测
  {
    path: "/:pathMatch(.*)*", // 必须使用正则表达式,
    // path: "/:w+", // 必须使用正则表达式
    hidden: true,
    name: "errorPage",
    component: () => import("@/views/base404Page.vue"),
  },
];

export { routes, layoutMap };
