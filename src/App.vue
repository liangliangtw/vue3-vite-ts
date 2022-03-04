<template>
  <router-view />
  <!-- <Dashboard></Dashboard> -->
</template>
<script setup lang="ts">
import Dashboard from '@/components/Dashboard.vue'
</script>

<style>
#app {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  bottom: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
