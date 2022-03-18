<template>
  <h1>这是第一个测试界面</h1>
  <p>这是年龄{{ age }}</p>
  <div>
    {{ testTestName }}
    {{ phone }}
    {{ sex }}
    {{ testObj.uu }}
    {{ noValue }}
  </div>
  <el-button type="primary" @click="add">加一</el-button>
  <p>双倍{{ doubleCount }}</p>
  <p>测试不用toRefs名字:{{ noTorefs.testName }}年龄:{{ noTorefs.testAge }}</p>
  <el-button type="primary" @click="changeName">直接修改string内容</el-button>
  <p>测试修改string内容:{{ testName }}</p>
  <div>
    <p style="display: flex; flex-direction: column; justify-content: center">
      生命周期:
      <img src="@/assets/lifeCycle.png" alt="" style="width: 500px" />
    </p>
  </div>
  <el-button type="primary" @click="open">提示</el-button>
  <el-button type="primary" @click="onTestToRefs">测试toRefs</el-button>
  <!-- {{ test1 }} -->
</template>

<script setup>
let noValue = $ref(1)
let testName = ref('良田伍')
const changeName = () => {
  testName.value = 'Tom'
}
const personObj = reactive({
  testTestName: 'testName',
  age: 18,
  phone: 13486395621,
  sex: '不男不女',
  testObj: {
    uu: 'yy'
  },
  testToRefsObj: { test1: '测试toRefs' }
})
// personObj.name = 'haha'
const add = () => {
  personObj.age++
}

// 解构后拿值一定要.value拿
// 解构需要.value拿值
const count = ref(1)
const doubleCount = computed(() => {
  return count.value * 2
})
const noTorefs = reactive({
  testName: 'LL',
  testAge: 55
})

const open = () => {
  ElMessage('this is a message.')
}
setTimeout(() => {
  // console.log(testObj.value.uu, 'testObj')
  // testObj.value.uu = '过了2秒之后'
  personObj.testObj.uu = '过了2秒之后'
  noValue = 5
}, 2000)

let { testTestName, phone, sex, age, testObj } = toRefs(personObj)

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

// 打印数组直接获取响应式的值\
// toRaw(ftyArray) 第一种获取target值的方式，通过vue中的响应式对象可使用toRaw()方法获取原始对象
// JSON.parse(JSON.stringify(ftyArray)) 通过json序列化之后可获取值

// toRefs解构重新赋值无法更新
let toRefsObj = {
  test1: { age: '哈哈' }
}
personObj.testToRefsObj = {
  test1: { cc: 'cc' }
}

const onTestToRefs = () => {
  personObj.testToRefsObj = { ...toRefsObj }
}
let { test1 } = toRefs(personObj.testToRefsObj) // 无法结构多层
</script>

<style scoped>
/* // 支持CSS变量注入v-bind(color) */
</style>
