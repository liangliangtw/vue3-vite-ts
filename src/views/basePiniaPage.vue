<template>
  <h1>获取pinia的值:{{ store.count }}</h1>
  <h2>
    <p>pinia的个人信息:</p>
    <p>名字:{{ store.userInfo.name }}</p>
    <p>年龄:{{ store.userInfo.age }}</p>
    <p>性别:{{ store.sex }}</p>
    <p>电话:{{ store.phone }}</p>
    <p>日期:{{ date }}</p>
  </h2>
  <el-button @click="onActionsClick">通过actions用户信息</el-button>
  <el-button @click="onStoreClick">通过store直接修改用户信息</el-button>
  <el-button @click="onPatchClick">通过$patch修改多个值</el-button>
  <el-button @click="onReplaceClick">替换整个state</el-button>
  <el-button @click="onResetClick">重置state</el-button>
  <el-button @click="onShowPhone">actions之间互相调用</el-button>
  <!--  获取 getter -->
  <p>
    获取getter1:{{ store.doubleCount }} | 获取getter2:{{ store.tripleCount }}
  </p>
  <p>computed获取:{{ computedVal }}</p>
</template>

<script setup>
// import { reactive, ref, toRefs, watch } from 'vue'
import { useUserStore } from '@/store/user.ts'
import { storeToRefs } from 'pinia'
const store = useUserStore()
// state 也可以使用解构，但使用解构会使其失去响应式，这时候可以用 pinia 的 storeToRefs。
const { date } = storeToRefs(store)
// computed获取
const computedVal = computed(() => store.computedVal)
const onActionsClick = () => {
  let userInfo = reactive({
    name: 'Actions修改后名字',
    age: 18
  })
  let count = ref(3)
  // 通过 mutations 定义的方法修改 state
  store.updateUserInfo(userInfo, count)
}
const onStoreClick = () => {
  let userInfo = reactive({
    name: 'Store修改后名字',
    age: 189
  })
  // 通过 store 直接修改
  store.userInfo = userInfo
}
const onPatchClick = () => {
  let userInfo = reactive({
    name: '$patch修改后名字',
    age: 89
  })
  // 使用 $patch 修改多个值
  store.$patch((state) => {
    state.userInfo = userInfo
    state.count = 6
    state.sex = '男'
  })
}
const onReplaceClick = () => {
  let userInfo = reactive({
    name: '替换整个state',
    age: '没有'
  })
  store.$state = {
    userInfo
  }
}
const onResetClick = () => {
  store.$reset()
}
const onShowPhone = () => {
  store.showPhone()
}
</script>
<style scoped></style>
