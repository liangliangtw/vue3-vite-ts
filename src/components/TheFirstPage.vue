<template>
  <h1>这是第一个测试界面</h1>
  <p>这是年龄{{ age }}</p>
  <div>
    {{ name }}
    {{ phone }}
    {{ sex }}
  </div>
  <el-button type="primary" @click="add">加一</el-button>
  <p>双倍{{ doubleCount }}</p>
  <p>测试不用toRefs名字:{{ noTorefs.testName }}年龄:{{ noTorefs.testAge }}</p>
  <el-button type="primary" @click="changeName">直接修改string内容</el-button>
  <p>测试修改string内容:{{ testName }}</p>
</template>

<script setup>
import { computed, reactive, ref, toRefs } from 'vue'
let testName = ref('良田伍')
const personObj = reactive({
  name: 'testName',
  age: 18,
  phone: 13486395621,
  sex: '不男不女'
})
personObj.name = 'haha'
const add = () => {
  personObj.age++
}
const { name, phone, sex, age } = toRefs(personObj)
const count = ref(1)
const doubleCount = computed(() => {
  return count.value * 2
})
const noTorefs = reactive({
  testName: 'LL',
  testAge: 55
})
const changeName = () => {
  testName.value = 'Tom'
}
</script>

<style scoped>
/* // 支持CSS变量注入v-bind(color) */
</style>
