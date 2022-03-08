<template>
  <h1>组件路由</h1>
  <p>路由实例:{{ useRouter }}</p>
  <p>路由元对象:{{ route }}</p>
  <el-button type="primary" @click="onPush">跳转</el-button>
  <p>名字:{{ name }}</p>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
import {
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate
} from 'vue-router'
const router = useRouter()
const route = useRoute()
const onPush = () => {
  router.push('/firstPage')
}
let name = ref('良田伍')

// 添加一个导航守卫，在当前组件将要离开时触发。
onBeforeRouteLeave((to, from, next) => {
  console.log('组件路由监听离开')
  name = ref('哈哈')
  next()
})
// 添加一个导航守卫，在当前组件更新时触发。
// 在当前路由改变，但是该组件被复用时调用。
onBeforeRouteUpdate((to, from, next) => {
  if (to.fullPath) {
    console.log(to.fullPath, from.fullPath)
    console.log('当前组件路由更新')
    next()
  }
})
</script>
<style scoped></style>
