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
import { findRouterWith, getCachesByRoutes } from '@/utils/processRouter'
import { allLayoutMap } from '@/router/allRouter'
// 找到所有以 NestRouterView 组件作为路由嵌套的页面

const target = findRouterWith('TheNestRouterView')(allLayoutMap)
console.log(target, 'target')

const caches = getCachesByRoutes(target)
console.log(caches, 'caches')
</script>
