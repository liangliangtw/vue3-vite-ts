<template>
  <el-card shadow="always"> fty:{{ typeItem.code }} </el-card>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
defineProps({
  typeItem: {
    type: Object,
    default: {},
  },
})
// const emit = defineEmits(['nextCardData'])
// const sendCardItem = () => {
//   console.log('ii')
//   emit('nextCardData', typeItem)
// }
</script>
<style scoped></style>
