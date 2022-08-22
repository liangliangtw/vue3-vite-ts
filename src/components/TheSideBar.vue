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
        <!-- <el-avatar :src="avatarSrc"></el-avatar> -->
        <img :src="avatarSrc" class="avatarStyle" />
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
            <!-- 一级标题及图标 -->
            <template #title>
              <el-icon v-if="route.meta.icon">
                <component :is="route.meta.icon" />
              </el-icon>
              <span>{{ route.meta.title }}</span>
            </template>
            <!-- 递归下级标题 -->
            <TheSubItem :menu-list="route.children"></TheSubItem>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
// import { onMounted, reactive, ref, toRefs, watch } from 'vue'
// import { useRouter, useRoute } from 'vue-router'
import avatarSrc from '@/assets/avatar.png'
import { allLayoutMap } from '@/router/allRouter'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { RouteLocationRaw } from 'vue-router'

const prosData = defineProps({
  isCollapse: {
    type: Boolean, // 注意是type: String,不是type: 'string',
    default: false,
  },
})
const store = useUserStore()
// 获取路由器实例
const router = useRouter()
// const route = useRoute()

// const routerList = store.allRoutes
const routerList = router.getRoutes()
const routerMap: string[] = []
routerList.forEach((item: any) => {
  if (item.name) {
    routerMap.push(item.name)
  }
})

const defaultActive = ref()
// menuList = router.options.routes

// 拼接完整路由
const menuMap = (list: any[]) => {
  const cloneAllRouterList = JSON.parse(JSON.stringify(list))
  // 过滤不存在的路由
  const filterList = cloneAllRouterList.filter((item: { name: string; children: any }) => {
    if (routerMap.includes(item.name)) {
      if (item.children) {
        item.children = menuMap(item.children)
      }
      return item
    }
  })
  return filterList
}
// const menuList = publicRouterList
const menuList = menuMap(allLayoutMap)
const toPath = (path: RouteLocationRaw) => {
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
const avatarSize = ref<number | string>('100px')
watch(
  () => prosData,
  (newVal, oldVal) => {
    // 缩小状态为true
    if (newVal.isCollapse) {
      avatarSize.value = '40px'
    } else {
      avatarSize.value = '100px'
    }
    // console.log(newVal.isCollapse, 'prosData')
    // console.log(oldVal, '旧的路由')
  },
  { deep: true }
)
</script>

<style scoped>
.avatarIcon {
  text-align: center;
  padding: 20px 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  /* min-height: 400px; */
}
.el-menu-vertical-demo {
  height: 100vh;
}
.el-menu {
  border: 0;
}
/* .el-avatar--default {
  transition: --el-avatar-size 2s;
  --el-avatar-size: v-bind(avatarSize);
} */
.avatarStyle {
  width: v-bind(avatarSize);
  transition: width 0.2s linear;
  border-radius: 50%;
}
</style>
