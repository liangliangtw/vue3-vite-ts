<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      router
      class="el-menu-vertical-demo"
      background-color="#304156"
      :collapse="isCollapse"
      :default-active="defaultActive"
      :default-openeds="[menuList[0].path]"
      text-color="rgb(191, 203, 217)"
    >
      <div class="avatarIcon">
        <el-avatar :size="80" :src="avatarSrc"></el-avatar>
      </div>
      <template v-for="route in menuList" :key="route.path">
        <template v-if="!route['hidden']">
          <el-menu-item v-if="!route.children" :index="route.path">
            <el-icon>
              <component :is="route.meta.icon" />
            </el-icon>
            <span>{{ route.meta.title }}</span>
          </el-menu-item>
          <!-- 有下拉一级标题 -->
          <el-sub-menu v-else :index="route.path">
            <template #title>
              <el-icon v-if="route.meta.icon">
                <component :is="route.meta.icon" />
              </el-icon>
              <span>{{ route.meta.title }}</span>
            </template>
            <!-- 二级标题 -->
            <template v-for="subRoute in route.children" :key="subRoute.path">
              <el-menu-item v-if="!subRoute.children" :index="subRoute.path">
                <el-icon>
                  <component :is="subRoute.meta.icon" />
                </el-icon>
                <span>{{ subRoute.meta.title }}</span>
              </el-menu-item>
              <!-- 三级标题 -->
              <el-sub-menu v-else :index="subRoute.path">
                <template #title>{{ subRoute.meta.title }}</template>
                <el-menu-item
                  v-for="subRouteChildren in subRoute.children"
                  :key="subRouteChildren.path"
                  :index="subRouteChildren.path"
                  >{{ subRouteChildren.meta.title }}</el-menu-item
                >
              </el-sub-menu>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
// import { onMounted, reactive, ref, toRefs, watch } from 'vue'

// import { useRouter, useRoute } from 'vue-router'
import avatarSrc from '@/assets/avatar.png'
import { baseRouter } from '@/router/baseRouter.ts'
import { allLayoutMap } from '@/router/allRouter.ts'

import { useUserStore } from '@/store/user.ts'
import { storeToRefs } from 'pinia'
const prosData = defineProps({
  isCollapse: {
    type: Boolean, // 注意是type: String,不是type: 'string',
    default: false,
  },
})
const store = useUserStore()
// 获取路由器实例
const router = useRouter()
const route = useRoute()

let menuList = reactive([])
// let routerList = router.getRoutes()
const defaultActive = ref()
// menuList = router.options.routes

console.log(router, 'sidebar页面标识')

const cloneBaseList = JSON.parse(JSON.stringify(baseRouter))
const cloneAllLayoutMap = JSON.parse(JSON.stringify(allLayoutMap))
cloneBaseList[0].children = [...cloneBaseList[0].children, ...cloneAllLayoutMap]
menuList = cloneBaseList

// menuList = router.getRoutes()
// const { menuList } = storeToRefs(store)
// console.log(toRaw(menuList.value), 'menuList')
const toPath = (path) => {
  console.log(path, 'path')
  router.replace(path)
}
watch(
  () => router.currentRoute.value.path,
  (newVal, oldVal) => {
    defaultActive.value = newVal
    // console.log(newVal, '新的路由')
    // console.log(oldVal, '旧的路由')
  },
  { immediate: true }
)
</script>

<style scoped>
.avatarIcon {
  text-align: center;
  padding: 20px 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu {
  border: 0;
}
</style>
