<template>
  <el-button type="primary" @click="changeState">监听值翻倍</el-button>
  监听新值:{{ state }}
</template>

<script setup>
import { imageProps } from 'element-plus'
import { reactive, ref, toRefs, watch } from 'vue'
let state = ref(1)
let stateObj = reactive({ name: '良田伍' })
let testObj = reactive({ name: '良田伍' })
const numbers = reactive([1, 2, 3, 4])
const changeState = () => {
  console.log('00')
  state.value = state.value * 2
  stateObj.name = '哈哈'
  testObj.name = '哈哈你好'
  numbers.push(5)
  console.log(state.value, 'state')
}
// // 侦听一个 getter
// watch(
//   () => stateObj.name,
//   (newVal, oldVal) => {
//     console.log(newVal, 'stateObjnewVal')
//     console.log(oldVal, 'stateObjoldVal')
//   },
//   {
//     immediate: true, // 立即执行
//     deep: true // 深度监听
//   }
// )
// // 直接侦听ref
// watch(
//   state,
//   (newVal, oldVal) => {
//     console.log(newVal, 'newVal')
//     console.log(oldVal, 'oldVal')
//   },
//   {
//     immediate: true, // 立即执行
//     deep: true // 深度监听
//   }
// )
// 多个监听
watch(
  [state, () => testObj.name, () => stateObj.name, () => [...numbers]],
  (newValues, prevValues) => {
    console.log(newValues, prevValues)
  },
  { deep: true }
)
</script>
<style scoped></style>
