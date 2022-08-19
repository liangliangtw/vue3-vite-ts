<template>
  <div class="content-box">
    <h1 ref="dom">获取dom元素</h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from 'vue'

const dom = ref(null)
onMounted(() => {
  console.log(dom.value)
})
// console.log(dom.value)
</script>
<style scoped></style>
