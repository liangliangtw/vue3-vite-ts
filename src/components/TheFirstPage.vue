<template>
  <div>
    <h1>这是第一个测试界面</h1>
    <p>这是年龄{{ age }}</p>
    <div>
      {{ testTestName }}
      {{ phone }}
      {{ sex }}
      {{ testObj.uu }}
      <!-- {{ noValue }} -->
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
    <el-button plain @click="open1"> Success </el-button>
  </div>
</template>

<script setup>
import { useRoute, useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { getUser, pushTxT } from '@/service/api/testApi'
const router = useRouter()
const route = useRoute()
const testAxios = async () => {
  console.log('开始')
  const params = {
    type: 'all',
    page: '0',
    count: '20',
  }
  console.log(getUser, pushTxT)
  const res = await getUser('/users')
  const res2 = await pushTxT('/posts', { userId: 1, title: 'test', body: 'test' })
  console.log(res, res2, '请求的结果')
}
testAxios()

// const noValue = $ref(1)
/**
ref和toRef区别:
ref->复制, 修改响应式数据不会影响原始数据
toRef->引用, 修改响应式数据会影响原始数据
ref->数据发生改变, 界面就会自动更新
toRef->数据发生改变, 界面也不会自动更新

ref和reactive区别:
ref->单一数据类型，有value属性；
reactive->复杂数据类型，无value属性；
————————————————
版权声明：本文为CSDN博主「chen_sir_sh」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/m54584mnkj/article/details/121652258
 */
const testName = ref('良田伍')
const changeName = () => {
  testName.value = 'Tom'
}
const personObj = reactive({
  testTestName: 'testName',
  age: 18,
  phone: 13486395621,
  sex: '不男不女',
  testObj: {
    uu: 'yy',
  },
  testToRefsObj: { test1: '测试toRefs' },
})
// personObj.name = 'haha'
const add = () => {
  personObj.age++
  // router.addRoute('Dashboard', {
  //   path: '/dashboard/baseWatchApi',
  //   name: 'BaseWatchApi',
  //   component: () => import('@/views/baseWatchApi.vue'),
  //   meta: { title: '监听' },
  // })
  // router.replace('/dashboard/baseWatchApi')
}

// 解构后拿值一定要.value拿
// 解构需要.value拿值
const count = ref(1)
const doubleCount = computed(() => {
  return count.value * 2
})
const noTorefs = reactive({
  testName: 'LL',
  testAge: 55,
})

const open = () => {
  ElMessage('this is a message.')
}
setTimeout(() => {
  // console.log(testObj.value.uu, 'testObj')
  // testObj.value.uu = '过了2秒之后'
  personObj.testObj.uu = '过了2秒之后'
  // noValue = 5
}, 2000)

const { testTestName, phone, sex, age, testObj } = toRefs(personObj)

/**
 * ctrl+win+t=====>函数注释注释快捷键
 * unref()
 * 对ref内的值进行解析，如果是ref则返回ref.value的值，不是则返回传入的对象
 */
const testObj1 = { name: 'alex', age: '5' }
const testRefObj2 = ref({ name: 'alex', age: '5' })
const testVal3 = unref(testObj1) //如果是ref则返回ref.value的值，不是则返回传入的对象
const testVal4 = unref(testRefObj2) //如果是ref则返回ref.value的值，不是则返回传入的对象
console.log(testVal3) //Object {age: "5",name: "alex"}
console.log(testVal4) //Proxy {name: 'alex', age: '5'}

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
const toRefsObj = {
  test1: { age: '哈哈' },
}
personObj.testToRefsObj = {
  test1: { cc: 'cc' },
}

const onTestToRefs = () => {
  personObj.testToRefsObj = { ...toRefsObj }
}
const { test1 } = toRefs(personObj.testToRefsObj) // 无法结构多层

const open1 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    duration: 0,
    type: 'success',
  })
}

// const testArray = ref([{ name: 1 }, { name: 3 }, { name: 4 }, { name: 3 }])
// const isExist = testArray.value.some((element) => {
//   return element.name === 1
// })
// console.log(isExist, 'isExist')
</script>

<style scoped>
/* // 支持CSS变量注入v-bind(color) */
</style>
