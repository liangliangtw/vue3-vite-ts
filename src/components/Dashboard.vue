<template>
  <el-container class="layout-container-demo">
    <el-scrollbar class="layout-container-demo-sideBar">
      <the-side-bar :is-collapse="isCollapse"></the-side-bar>
    </el-scrollbar>

    <el-container class="mainBox">
      <el-header>
        <div class="asideCollapse">
          <el-icon
            v-if="isCollapse"
            class="collapseIcon"
            :size="25"
            @click="isCollapse = !isCollapse"
          >
            <expand />
          </el-icon>
          <el-icon v-else class="collapseIcon" :size="25" @click="isCollapse = !isCollapse">
            <fold />
          </el-icon>
        </div>
        <TheBreadcrumb></TheBreadcrumb>
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="LogOut">Log Out</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Ltw</span>
        </div>
      </el-header>
      <TheTagsView></TheTagsView>
      <el-main class="mainBox-cell-view">
        <section class="main-box">
          <router-view v-slot="{ Component, route }">
            <transition appear name="fade-transform" mode="out-in">
              <keep-alive :include="caches">
                <component :is="Component" :key="route.path"></component>
              </keep-alive>
            </transition>
          </router-view>
        </section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup name="Dashboard">
// import homeNav from '@/components/TheHomeNav.vue'
// import sideBar from '@/components/TheSideBar.vue'
// import Breadcrumb from '@/components/TheBreadcrumb.vue'
// import vTags from '@/components/TheTagsView.vue'
import { resetRouter } from '@/router'
import { useUserStore } from '@/store/user'
import { allLayoutMap } from '@/router/allRouter'
import { findRouterWith, getCachesByRoutes } from '@/utils/processRouter'
const store = useUserStore()
const router = useRouter()

const menuList = reactive([])
// menuList = router.options.routes
const defaultActive = ref()
const isCollapse = ref(false)
const LogOut = () => {
  resetRouter()
  // 清除tagView缓存
  store.tagsList = []
  router.push('/login')
}
console.log(allLayoutMap, '1allLayoutMap')
const target = findRouterWith('Dashboard')(allLayoutMap)
console.log(allLayoutMap, '2allLayoutMap')

const caches = getCachesByRoutes(target)
</script>

<style scoped>
.layout-container-demo {
  height: 100%;
  width: 100%;
  /* border: 1px solid #eee; */
}
.layout-container-demo-sideBar {
  flex-shrink: 0;
}

.layout-container-demo .mainBox .el-header {
  display: flex;
  position: relative;
  background-color: #fff;
  color: var(--el-text-color-primary);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.mainBox-cell-view {
  height: 100%;
  overflow: auto;
}
.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  box-sizing: border-box;
  padding: 10px 13px;
  overflow-x: hidden;
  background: #f0f2f5;
}
.el-container .el-main .main-box {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: auto;
  overflow-x: hidden;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.layout-container-demo .toolbar {
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
.asideCollapse {
  display: flex;
  align-items: center;
}
.collapseIcon {
  font-size: 40;
}
</style>
