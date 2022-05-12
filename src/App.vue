<template>
  <router-view />
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>
<script setup></script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
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

  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
