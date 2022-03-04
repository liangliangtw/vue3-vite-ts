<template>
  <el-button type="primary" @click="changeState">监听值翻倍</el-button>
  监听新值:{{ state }}
</template>

<script setup>
import { imageProps } from 'element-plus'
import { reactive, ref, toRefs, watch } from 'vue'
const state = ref(1)
const changeState = () => {
  state.value * 2
}
watch(
  () => state.value,
  (newVal, oldVal) => {
    console.log(newVal, 'newVal')
    console.log(oldVal, 'oldVal')
  },
  {
    immediate: true, // 立即执行
    deep: true // 深度监听
  }
)
</script>
<style scoped></style>
