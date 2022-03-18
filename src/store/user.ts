import { defineStore } from 'pinia'
import { json } from 'stream/consumers'


export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  // <any>
  state: () => ({
    count: 1,
    userInfo: {
      name: '良田伍',
      age: 180
    },
    sex: '不男不女',
    phone: <number | null>null,
    date: 19950218,
    computedVal: '哈喽',
    isAddRouter: true,

  }),
  actions: {
    updateUserInfo(newUserInfo: any, count: number) {
      // 使用 this 直接修改
      this.userInfo = { ...newUserInfo }
      this.count = count
      // 使用 $patch 修改多个值
      // this.$patch({
      //   userInfo: { ...newUserInfo },
      //   count
      // })
    },
    showPhone() {
      let phone = this.getUserPhone()
      this.phone = phone
      this.date = 12121
    },
    getUserPhone() {
      return 18024168369
    },

    setAsyncRoutes(router: any) {
      // let { userName }: any = userInfo
      let userName = 'test'
      if (userName == 'admin') {
        router.addRoute('404', {
          path: '/404',
          name: '404',
          component: () => import('@/views/base404Page.vue'),
          meta: { title: '404' }
        })
      } else {
        console.log('不具备权限');
      }
      this.isAddRouter = false
    }
  },
  // getter 第一个参数是 state，是当前的状态，也可以使用 this 获取状态
  // getter 中也可以访问其他的 getter，或者是其他的 Store
  getters: {
    doubleCount: (state) => state.count * 2,
    // 通过 this 获取状态（注意this指向）
    tripleCount(): number {
      return this.count * 3
    }
  },

})
