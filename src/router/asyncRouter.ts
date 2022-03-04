export const navigationList = [
  {
    path: '/firstPage',
    name: 'FirstPage',
    component: () =>  import('@/components/TheFirstPage.vue')
  },
  {
    path: '/baseWatch',
    name: 'BaseWatch',
    component: () => import( '@/views/BaseWatch.vue')
  },
  {
    path: '/baseGetDom',
    name: 'BaseGetDom',
    component: () => import( '@/views/baseGetDom.vue')
  },
  {
    path: '/basePinia',
    name: 'BasePinia',
    component: () => import( '@/views/basePinia.vue')
  },
]

