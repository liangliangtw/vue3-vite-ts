<template>
  <el-card shadow="always"> mlist:{{ mListItem.code }} </el-card>
</template>

<script setup>
import { reactive, ref, toRefs } from "vue";
defineProps({
  mListItem: {
    type: Object,
    default: {},
  },
});
</script>
<style scoped></style>
