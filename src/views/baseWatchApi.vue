<template>
  <div class="content-box">
    <el-button type="primary" @click="changeState">监听值翻倍</el-button>
    监听新值:{{ state }}
    <el-input v-model="input" placeholder="测试缓存" />
    <!-- <div v-for="(item, i) in imgSrc" :key="i">
      <img v-lazy="item" />
    </div> -->
  </div>
</template>

<script lang="ts" setup name="BaseWatchApi">
import { imageProps } from 'element-plus'
import { reactive, ref, toRefs, watch } from 'vue'
const state = ref(1)
const stateObj = reactive({ name: '良田伍' })
const testObj = reactive({ name: '良田伍' })
const numbers = reactive([1, 2, 3, 4])
const changeState = () => {
  console.log('00')
  state.value = state.value * 2
  stateObj.name = '哈哈'
  testObj.name = '哈哈你好'
  numbers.push(5)
  console.log(state.value, 'state')
}
const input = ref('')
// // 侦听一个 getter
// watch(
//   () => stateObj.name,
//   (newVal, oldVal) => {
//     console.log(newVal, 'stateObjnewVal')
//     console.log(oldVal, 'stateObjoldVal')
//   },
//   {
//     immediate: true, // 立即执行
//     deep: true // 深度监听
//   }
// )
// // 直接侦听ref
// watch(
//   state,
//   (newVal, oldVal) => {
//     console.log(newVal, 'newVal')
//     console.log(oldVal, 'oldVal')
//   },
//   {
//     immediate: true, // 立即执行
//     deep: true // 深度监听
//   }
// )
// 多个监听
watch(
  [state, () => testObj.name, () => stateObj.name, () => [...numbers]],
  (newValues, prevValues) => {
    console.log(newValues, prevValues)
  },
  { deep: true }
)
const imgSrc = [
  'https://img0.baidu.com/it/u=1541354865,3947599599&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=622',
  'https://img2.baidu.com/it/u=1049193007,1368911376&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400',
  'https://img0.baidu.com/it/u=2696515287,1588765194&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=400',
  'https://img1.baidu.com/it/u=4192721877,1411902441&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  'https://img0.baidu.com/it/u=1010261972,134844977&fm=253&fmt=auto&app=138&f=JPEG?w=587&h=500',
  'https://img0.baidu.com/it/u=529086886,435378142&fm=253&fmt=auto&app=138&f=JPEG?w=360&h=360',
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F29%2F20210729054925_919f7.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659081469&t=bc92c25f12d2856ded8d5bc1247c69ef',
  'https://img2.baidu.com/it/u=1679697449,1872961722&fm=253&fmt=auto&app=138&f=JPEG?w=340&h=500',
  'https://img1.baidu.com/it/u=298078151,3300187487&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1124',
]
</script>
<style scoped>
img {
  /* margin-bottom: 300px; */
}
</style>
