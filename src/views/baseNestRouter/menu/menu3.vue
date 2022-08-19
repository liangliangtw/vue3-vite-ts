<template>
  <div class="content-box">我是menu3页面 <el-input v-model="input" placeholder="测试缓存" /></div>
</template>

<script lang="ts" setup name="menu3">
import { reactive, ref, toRefs } from 'vue'

const state = reactive({})

const name = () => {}
const input = ref('')
</script>
<style scoped></style>
