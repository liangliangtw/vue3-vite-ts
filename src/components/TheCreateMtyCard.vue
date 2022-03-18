<template>
  <el-card shadow="always"> mty:{{ typeItem.code }} </el-card>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
defineProps({
  typeItem: {
    type: Object,
    default: {}
  }
})
</script>
<style scoped></style>
