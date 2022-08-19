<template>
  <div class="content-box">
    <Suspense>
      <template #default>
        <async-component></async-component>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import asyncComponent from './request.vue'
</script>
<style scoped>
.img {
  width: 300px;
}
</style>
