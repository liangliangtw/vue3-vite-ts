<template>
  <div class="mainBox">
    <h1>ToDo List</h1>
    <p>
      共有<span class="finishTxtStyle"> {{ arrayList.length }} </span
      >个任务,其中<span class="unfinishedTxtStyle">
        {{ finishList.length }} </span
      >项已经完成
    </p>
    <div class="list-box">
      <div class="unfinished-box">
        <h2>未完成列表</h2>
        <div v-for="(item, index) in arrayList" :key="item.label + index">
          <div v-if="!item.isFinish">
            <el-checkbox
              :label="item.label"
              size="large"
              @change="changeState(item)"
            />
          </div>
        </div>
      </div>
      <div class="finish-box">
        <h2>已完成列表</h2>
        <div v-for="(item, index) in finishList" :key="item.label + index">
          <el-checkbox :label="item.label" size="large" disabled checked />
        </div>
      </div>
    </div>
    <div>添加新的Task</div>
    <div class="addList-box">
      <el-input
        v-model="addInput"
        placeholder="Please input"
        class="addInput"
      />
      <el-button type="primary" class="btn-box" @click="addItem">Add</el-button>
    </div>
  </div>
</template>

<script setup>
let arrayList = reactive([
  { label: '1', isFinish: false },
  { label: '2', isFinish: false },
  { label: '3', isFinish: false },
  { label: '4', isFinish: false }
])
let finishList = computed(() => {
  return arrayList.filter((item) => {
    return item.isFinish
  })
})
const changeState = (item) => {
  item.isFinish = !item.isFinish
}
const addInput = ref('')
const addItem = () => {
  if (addInput.value) {
    arrayList.push({ label: addInput.value, isFinish: false })
    addInput.value = ''
  } else {
    ElMessage.error('没值叫我加啥?')
  }
}
</script>
<style scoped>
.finishTxtStyle {
  color: #3182bd;
}
.unfinishedTxtStyle {
  color: #c25205;
}

.mainBox {
  padding: 20px 40px;
}
.list-box {
  display: flex;
}
.finish-box {
  margin-left: 60px;
}
.addList-box {
  display: flex;
  margin-top: 20px;
}
.addInput {
  width: 500px;
}
.btn-box {
  margin-left: 30px;
  width: 100px;
}
</style>
