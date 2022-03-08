<template>
  <h1>使用v-bind改变css样式</h1>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
const state = reactive({
  color: 'pink'
})
</script>
<style scoped>
h1 {
  /* 使用v-bind绑定state中的变量 */
  color: v-bind('state.color');
}
</style>
