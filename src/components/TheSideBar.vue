<template>
  <div class="avatarIcon">
    <el-avatar :size="80" src="src/assets/avatar.png"></el-avatar>
  </div>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu router :default-openeds="[menuList[0].path]">
      <template v-for="route in menuList" :key="route.path">
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
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'

import { useRouter, useRoute } from 'vue-router'
// 获取路由器实例
const router = useRouter()
const route = useRoute()

let menuList = reactive([])
menuList = router.options.routes
console.log(menuList, 'menuList')
</script>

<style scoped>
.avatarIcon {
  text-align: center;
  padding: 20px 0;
}
</style>
