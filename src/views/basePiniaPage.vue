<template>
  <h1>获取pinia的值:{{ store.count }}</h1>
  <h2>
    <p>pinia的个人信息:</p>
    <p>名字:{{ store.userInfo.name }}</p>
    <p>年龄:{{ store.userInfo.age }}</p>
  </h2>
</template>

<script setup>
import { useUserStore } from '@/store/user.ts'
import { reactive, ref, toRefs, watch } from 'vue'
const store = useUserStore()
</script>
<style scoped></style>
