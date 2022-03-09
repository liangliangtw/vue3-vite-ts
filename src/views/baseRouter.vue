<template>
  <h1>组件路由</h1>
  <p>路由实例:{{ useRouter }}</p>
  <p>路由元对象:{{ route }}</p>
  <el-button type="primary" @click="onPush">跳转</el-button>
  <p>名字:{{ name }}</p>
</template>

<script setup>
import { reactive, ref, toRefs, watch } from 'vue'
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
// 监听路由变化
// watch(
//   () => router.currentRoute.value.path,
//   (newVal, oldVal) => {
//     console.log(newVal.value.path, '新的路由')
//     // console.log(oldVal.value.path, '旧的路由')
//   },
//   { immediate: true }
// )
// console.log(route.query.type); //获取路由参数
</script>
<style scoped></style>
