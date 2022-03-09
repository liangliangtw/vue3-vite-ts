import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => ({
    count: 1,
    userInfo: {
      name: '良田伍',
      age: 180
    }
  }),
  actions: {
    updateUserInfo(newUserInfo: any, count: number) {
      // 使用 this 直接修改
      this.userInfo = { ...newUserInfo }
      this.count = count
      // 使用 $patch 修改多个值
      this.$patch({
        userInfo: { ...newUserInfo },
        count
      })
    }
  },
  // getter 第一个参数是 state，是当前的状态，也可以使用 this 获取状态
  // getter 中也可以访问其他的 getter，或者是其他的 Store
  getters: {
    doubleCount: (state) => {
      state.count * 2
    },
    // 通过 this 获取状态（注意this指向）
    // tripleCount() {
    //   return  this.count * 3
    // }
  }
})
