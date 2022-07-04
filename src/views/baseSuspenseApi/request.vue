<template>请求:{{ imgRes }}</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
/*
  把id='modal'挂载到想要挂载的位置
 */
import axios from 'axios'
onMounted(() => {
  // allRequest()
  console.log('打印')
})

/*
数组重新赋值方法
1.遍历添加
res.forEach(e => {
     arr.push(e);
  });
2.多包裹一层
  const state = reactive({
  arr: []
});
state.arr = [1, 2, 3]
3.使用ref
const state = ref([])
state.value = [1, 2, 3]
4.push解构方式
const arr = reactive([])
arr.push(...[1, 2, 3])
*/

// const allRequest = async () => {
//   let res1 = await getData()
//   let res2 = await getImg(res1)
// }
const imgRes = reactive([])

// const getData = async () => {
//   await axios
//     .get('http://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//       imgRes.push(...res.data)
//       console.log(res.data)
//       // data = res.data
//     })
//     .catch(function (error) {
//       console.log(error)
//     })
//   // .complete(() => {
//   //   console.log('无论成功失败都执行')
//   // })
// }
const getImg = async (data) => {
  await axios
    .get('https://api.thecatapi.com/v1/images/search?limit=1')
    .then((res) => {
      imgRes.push(...res.data)
      console.log(imgRes.data, '请求图片结果')
    })
    .catch(function (error) {
      console.log(error)
    })
}
// getData()
await getImg()
</script>
<style scoped></style>
