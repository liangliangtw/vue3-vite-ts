<template>
  <div class="content-box">
    <!-- // 匿名插槽 -->
    <slot />
    <!-- 具名插槽 -->
    <slot name="title"></slot>
    <!-- 作用于插槽 -->
    <slot name="footer" :scope="state"></slot>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
const state = reactive({
  name: '良田伍',
  age: 180,
})
</script>
<style scoped></style>
