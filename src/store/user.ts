import { defineStore } from "pinia";
import { json } from "stream/consumers";
import { layoutMap2 } from "@/router/asyncRouter2";
import { routes, layoutMap } from "@/router/asyncRouter";
import { tr } from "element-plus/lib/locale";
import { hasPermission, filterAsyncRouter } from "@/untils/tool";

export const useUserStore = defineStore({
  id: "user", // id必填，且需要唯一
  // <any>
  state: () => ({
    count: 1,
    userInfo: {
      name: "良田伍",
      age: 180,
    },
    sex: "不男不女",
    phone: <number | null>null,
    date: 19950218,
    computedVal: "哈喽",
    isAddRouter: true,
    menuList: [],
    tagsList: [],
  }),
  actions: {
    updateUserInfo(newUserInfo: any, count: number) {
      // 使用 this 直接修改
      this.userInfo = { ...newUserInfo };
      this.count = count;
      // 使用 $patch 修改多个值
      // this.$patch({
      //   userInfo: { ...newUserInfo },
      //   count
      // })
    },
    showPhone() {
      const phone = this.getUserPhone()
      this.phone = phone;
      this.date = 12121;
    },
    getUserPhone() {
      return 18024168369;
    },

    setAsyncRoutes(userName: any, router: any) {
      // 模拟请求数据
      if (this.isAddRouter) {
        let routerList;
        if (userName == "admin") {
          routerList = layoutMap2;
        } else {
          routerList = layoutMap;
        }
        routerList.forEach((item) => {
          // let url = `@/components/${item.componentName}.vue`
          // router.addRoute('Dashboard', {
          //   path: item.path,
          //   meta: { name: item.name, isAsync: true, roles: item.roles },
          //   name: item.name,
          //   component: () => import(url)
          // })
          // router.addRoute('Dashboard', item)
          router.addRoute("Dashboard", item); // 完整列表不显示嵌套关系
        })
        console.log(router.getRoutes());

        const currentRoute = router.currentRoute;
        console.log(currentRoute, "currentRoute");

        // console.log(currentRoute.value.matched)
        // console.log(routerList);
        // router.addRoute('Dashboard', routerList)
      }

      // this.isAddRouter = false
    },
    filterRouter() {
      const userRoles = sessionStorage.getItem("userRoles")
      if (!userRoles) {
        this.menuList = filterAsyncRouter(routes, userRoles);
        sessionStorage.setItem("userRoles", "test");
      }
      console.log(this.menuList, "this.menuList");
    },

    delTagsItem(data: any) {
      this.tagsList.splice(data.index, 1);
    },
    setTagsItem(data: any) {
      this.tagsList.push(data as never);
    },
    clearTags() {
      this.tagsList = [];
    },
    closeTagsOther(data: any) {
      this.tagsList = data;
    },
    closeCurrentTag(data: any) {
      for (let i = 0, len = this.tagsList.length; i < len; i++) {
        const item = this.tagsList[i];
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data.$router.push(this.tagsList[i + 1].path);
          } else if (i > 0) {
            data.$router.push(this.tagsList[i - 1].path);
          } else {
            data.$router.push("/");
          }
          this.tagsList.splice(i, 1);
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
      return this.count * 3;
    },
  },
});
