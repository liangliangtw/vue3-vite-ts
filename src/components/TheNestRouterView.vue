<template>
  <div class="content-box">
    <router-view v-slot="{ Component }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive :include="caches">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts" setup name="TheNestRouterView">
import { allLayoutMap } from '@/router/allRouter'
import { findRouterWith, getCachesByRoutes } from '@/utils/processRouter'
// 找到所有以 NestRouterView 组件作为路由嵌套的页面

const target = findRouterWith('TheNestRouterView')(allLayoutMap)
const caches: string[] = getCachesByRoutes(target)
console.log(caches, 'caches')
</script>
