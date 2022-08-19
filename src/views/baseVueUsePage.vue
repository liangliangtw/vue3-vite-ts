<template>
  <div class="content-box">
    <h1>测试 vueUse 的鼠标坐标</h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <button @click="toggleDark()">Is Dark: {{ isDark }}</button>
  </div>
</template>

<script setup>
import { useMouse, useDark, useToggle } from '@vueuse/core'

const { x, y } = useMouse()

const isDark = useDark({
  selector: 'html',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)

// const isDark = useDark()
// const toggleDark = useToggle(isDark)
</script>
<style scoped></style>
