<template>
  <h1>获取pinia的值:{{ userStore.name }}</h1>
</template>

<script setup>
import { useUserStore } from '@/store/user.ts'
import { reactive, ref, toRefs, watch } from 'vue'
const userStore = useUserStore()
</script>
<style scoped></style>
