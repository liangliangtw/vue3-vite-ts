<template>
  图标
  <el-icon>
    <edit></edit>
  </el-icon>
  <h1>这是第一个测试界面</h1>
  <p>这是年龄{{ age }}</p>
  <div>
    {{ name }}
    {{ phone }}
    {{ sex }}
  </div>
  <el-button type="primary" @click="add">加一</el-button>
  <p>双倍{{ doubleCount }}</p>
</template>

<script setup>
import { computed, reactive, ref, toRefs } from 'vue'
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
</script>

<style scoped>
/* // 支持CSS变量注入v-bind(color) */
</style>
