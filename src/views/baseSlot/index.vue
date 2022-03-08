<template>
  <child-slot>
    <span>我是默认插槽</span>
    <!--  具名插槽 -->
    <template #title>
      <h1>我是具名插槽</h1>
      <h1>我是具名插槽</h1>
      <h1>我是具名插槽</h1>
    </template>
    <!-- // 作用域插槽 -->
    // 作用域插槽
    <template #footer="{ scope }">
      <footer>作用域插槽——姓名：{{ scope.name }}，年龄{{ scope.age }}</footer>
    </template>
  </child-slot>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
import childSlot from './childSlot.vue'
</script>
<style scoped></style>
