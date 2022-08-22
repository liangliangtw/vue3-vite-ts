<template>
  <el-card shadow="always"> mty:{{ typeItem.code }} </el-card>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
defineProps({
  typeItem: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {},
  },
})
</script>
<style scoped></style>
