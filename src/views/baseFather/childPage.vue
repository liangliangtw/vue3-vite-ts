<template>
  <div class="content-box">
    <h1>这里是子组件</h1>
    <div>
      父组件传入的string:
      <div style="color: pink">{{ msg }}</div>
      <p>prosData.msg此种写法也可以获取: {{ prosData.msg }}</p>
    </div>
    <div>
      父组件传入的Obj:
      <span style="color: pink">{{ sendObj }}</span>
    </div>
    <div>
      父组件传入的Array:
      <span style="color: pink">{{ sendArray }}</span>
    </div>
    <el-button type="primary" @click="changeName">修改父组件名字</el-button>
    <p>显示子组件暴露的信息:{{ exposeNameObj.name }}</p>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
// defineEmits和defineProps在<script setup>中自动可用，无需导入
// 需在.eslintrc.js文件中【globals】下配置【defineEmits: true】、【defineProps: true】
const prosData = defineProps({
  msg: {
    type: String, // 注意是type: String,不是type: 'string',
    default: '无值传入子组件msg',
  },
  sendObj: {
    type: Object, // 注意是type: String,不是type: 'string',
    default: {},
  },
  sendArray: {
    type: Array, // 注意是type: String,不是type: 'string',
    default: [],
  },
})
// $emit子传父事件
const emit = defineEmits(['updateName'])
const changeName = () => {
  emit('updateName', 'Tom')
}
/* 
在标准组件写法里，子组件的数据都是默认隐式暴露给父组件的，但在 script-setup 模式下，所有数据只是默认 return 给 template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载 ref 变量获取子组件的数据。
如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由 defineExpose 来完成。

*/
const exposeName = ref('暴露子组件名字Tommm')
const exposeNameObj = reactive({
  name: '暴露子组件名字Tommm',
})
const exposeFun = () => {
  exposeNameObj.name = ref('良田伍')
  console.log('暴露的子组件函数')
}
const changeExpose = () => {}
// 将方法、变量暴露给父组件使用，父组件才可通过ref API拿到子组件暴露的数据
defineExpose({
  // 解构exposeNameObj
  ...toRefs(exposeNameObj),
  // exposeNameObj,
  // 声明方法
  exposeFun,
})
</script>
<style scoped></style>
