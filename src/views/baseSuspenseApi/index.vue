<template>
  <Suspense>
    <template #default>
      <async-component></async-component>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import asyncComponent from './request.vue'
</script>
<style scoped>
.img {
  width: 300px;
}
</style>
