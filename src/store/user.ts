import { defineStore } from 'pinia'
import { json } from 'stream/consumers'

import { tr } from 'element-plus/lib/locale'
import { hasPermission, filterAsyncRouter } from '@/untils/tool'
import { ISetTagsItem, IDelTagsItem } from './interface'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  // <any>
  state: () => ({
    count: 1,
    userInfo: {
      name: '良田伍',
      age: 180,
    },
    sex: '不男不女',
    phone: <number | null>null,
    date: 19950218,
    computedVal: '哈喽',
    asyncRoutesMark: sessionStorage.getItem('asyncRoutesMark'),
    allRoutes: [],
    tagsList: <ISetTagsItem[]>[],
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
      const phone = this.getUserPhone()
      this.phone = phone
      this.date = 12121
    },
    getUserPhone(): number {
      return 18024168369
    },
    getUserRole() {
      return 'user'
    },
    setAsyncRoutes(userRoles: any) {
      // 模拟请求数据
      // this.isAddRouter = false
    },
    setAllRoutes(list: any) {
      console.log('进入这里')
      this.allRoutes = list
    },
    setAsyncRoutesMark() {
      sessionStorage.setItem('asyncRoutesMark', 'true')
    },

    delTagsItem(data: IDelTagsItem) {
      this.tagsList.splice(data.index, 1)
    },
    setTagsItem(data: ISetTagsItem) {
      this.tagsList.push(data)
      console.log(this.tagsList, 'this.tagsList')
    },
    clearTags() {
      this.tagsList = []
    },
    closeTagsOther(data: any) {
      this.tagsList = data
    },
    closeCurrentTag(data: any) {
      for (let i = 0, len = this.tagsList.length; i < len; i++) {
        const item: Object = this.tagsList[i]
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data.$router.push(this.tagsList[i + 1].path)
          } else if (i > 0) {
            data.$router.push(this.tagsList[i - 1].path)
          } else {
            data.$router.push('/')
          }
          this.tagsList.splice(i, 1)
          break
        }
      }
    },
  },
  // getter 第一个参数是 state，是当前的状态，也可以使用 this 获取状态
  // getter 中也可以访问其他的 getter，或者是其他的 Store
  getters: {
    doubleCount: (state) => state.count * 2,
    // 通过 this 获取状态（注意this指向）
    tripleCount(): number {
      return this.count * 3
    },
  },
})
