<template>
  <div class="content-box">
    来点什么表示下吧,其实它已经挂载到app那去了
    <teleport to="#modal">
      <div id="modalBox">Look Me!!!</div>
      <!-- <h1>Hello Modal</h1> -->
    </teleport>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
</script>
<style scoped>
#modalBox {
  /* position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0; */
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background-color: pink;
}
</style>
