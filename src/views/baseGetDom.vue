<template>
  <h1 ref="dom">获取dom元素</h1>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
const dom = ref(null)
onMounted(() => {
  console.log(dom.value)
})
</script>
<style scoped></style>
