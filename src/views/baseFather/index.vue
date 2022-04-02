<template>
  <h1>这是父组件名字:{{ fatherName }}</h1>
  <child-page
    ref="childRef"
    :msg="msg"
    :send-obj="sendObj"
    :send-array="sendArray"
    @updateName="updateName"
  />
  <p class="test">
    父组件修改子组件暴露的方法
    <el-button type="primary" @click="changeExpose"
      >修改暴露子组件的信息</el-button
    >
  </p>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs, nextTick } from "vue";
// 组件命名采用的是大驼峰，引入后不需要在注册,在使用的使用直接是小写和横杠的方式连接!
import childPage from "./childPage.vue";

const fatherName = ref("良田伍")
const msg = ref("传入子组件的值");
const sendObj = reactive({ name: "LL", age: 180 });
const sendArray = reactive([
  { name: "LL", age: 180 },
  { name: "testName", age: 180 },
]);
const updateName = (name) => {
  fatherName.value = name;
  sendObj.name = name;
}
const childRef = ref();
const changeExpose = () => {
  childRef.value.exposeFun();
}
nextTick(() => {
  // console.log(childRef.value.exposeNameObj.name, 'childRef.name')
  console.log(childRef.value.name, "childRef.name");
  console.log(childRef.value.exposeFun, "childRef.exposeFun");
})
</script>
<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
