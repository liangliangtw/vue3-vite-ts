<template>
  <el-card shadow="always"> foodList:{{ foodItem.fCode }} </el-card>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
defineProps({
  foodItem: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {},
  },
})
</script>
<style scoped></style>
