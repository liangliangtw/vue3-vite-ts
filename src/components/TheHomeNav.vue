<template>
  <el-icon @click="toHome" :size="50"><home-filled /></el-icon>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const toHome = () => {
  router.push({ name: 'HelloWorld' })
}
</script>
<style scoped></style>
