<template>
  <div class="content-box">
    我是menu1
    <el-input v-model="input" placeholder="测试缓存" />
  </div>
</template>

<script lang="ts" setup name="menu1">
import { reactive, ref, toRefs } from 'vue'

const state = reactive({})
const input = ref('')
const name = () => {}
</script>
<style scoped></style>
