<template>
  <div class="menu-box">
    <div class="breadcrumb-box">
      <el-breadcrumb>
        <el-breadcrumb-item
          v-for="(headItem, headIndex) in breadcrumbArray"
          :Key="headIndex"
          @click="showTab(headIndex)"
        >
          <span
            class="breadcrumbTxt"
            :class="{ primaryColor: headIndex == breadcrumbArray.length - 1 }"
          >
            {{ headItem.name }}
          </span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="main-box">
      <template v-if="mainItem.allTypeArry && mainItem.allTypeArry.length != 0">
        <template
          v-for="(typeItem, clickIndex) in mainItem.allTypeArry"
          :key="clickIndex"
        >
          <fty-card
            v-if="typeItem.typeName == 'ftyItem'"
            :typeItem="typeItem"
            @click="nextCardData(typeItem, clickIndex)"
          ></fty-card>
          <mty-card
            v-if="typeItem.typeName == 'mtyItem'"
            :typeItem="typeItem"
            @click="nextCardData(typeItem, clickIndex)"
          ></mty-card>
        </template>
      </template>
      <template v-if="mainItem.foodList && mainItem.foodList.length != 0">
        <foodList-card
          v-for="(foodItem, clickIndex) in mainItem.foodList"
          :key="clickIndex"
          :foodItem="foodItem"
          @click="nextCardData(foodItem, clickIndex)"
        ></foodList-card>
      </template>
      <template v-if="mainItem.mListList && mainItem.mListList.length != 0">
        <mList-card
          v-for="(mListItem, clickIndex) in mainItem.mListList"
          :key="clickIndex"
          :mListItem="mListItem"
          @click="nextCardData(mListItem, clickIndex)"
        ></mList-card>
      </template>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, isReactive } from 'vue'
import axios from 'axios'

// import data from '@/assets/type2.json'
import foodListCard from '@/components/TheCreateFoodListCard.vue'
import ftyCard from '@/components/TheCreateFtyCard.vue'
import mListCard from '@/components/TheCreateMlistCard.vue'
import mtyCard from '@/components/TheCreateMtyCard.vue'
import _ from 'lodash'
// let ftyArray = reactive([])
let data = [] //上传用
data.forEach((element) => {
  element.typeName = 'ftyItem'
  element.foodList.forEach((item) => {
    item.typeName = 'foodList'
  })
})

const state = reactive({
  mainItem: {},
  breadcrumbArray: []
})

state.mainItem = {
  allTypeArry: [...data]
}

state.breadcrumbArray.push({
  name: '首页',
  id: 0,
  clickItem: { ...state.mainItem }
})

const nextCardData = (clickItem, clickIndex) => {
  // let addItem = toRaw(clickItem)
  console.log(toRaw(clickItem), 'clickItem')
  let nameCode = {
    ftyItem: 'code',
    mtyItem: 'code',
    foodList: 'fCode',
    mListList: 'code'
  }
  state.mainItem = { ...clickItem }

  state.breadcrumbArray.push({
    name: clickItem.code || clickItem.fCode,
    id: state.breadcrumbArray.length,
    clickItem: { ...state.mainItem },
    clickTypeName: clickItem.typeName,
    clickIndex: clickIndex
  })
  console.log(state.breadcrumbArray, 'state.breadcrumbArray')
  if (state.breadcrumbArray.length >= 1) setSessionPath()
  // console.log(toRaw(state.mainItem), 'mainItem')
  // console.log(isReactive(state.mainItem), 'isReactive')
}
const showTab = (headIndex) => {
  console.log(headIndex, 'headIndex')
  let dataObj = state.breadcrumbArray[headIndex]
  console.log(dataObj, 'dataObj')
  state.mainItem = { ...dataObj.clickItem }
  console.log(toRaw(state.breadcrumbArray), 'state.breadcrumbArray')
  state.breadcrumbArray = state.breadcrumbArray.filter((item) => {
    return item.id <= headIndex
  })
  if (state.breadcrumbArray.length >= 1) setSessionPath()
  console.log(toRaw(state.breadcrumbArray), 'state.breadcrumbArray')
}
// let { mainItem, breadcrumbArray } = toRefs(state)
let { mainItem, breadcrumbArray } = toRefs(state)

const setSessionPath = () => {
  let cloneArray = []
  //直接深拷贝数据量太大会造成点击缓慢
  state.breadcrumbArray.forEach((item) => {
    cloneArray.push({ ...item, clickItem: null })
  })

  sessionStorage.setItem('sessionBreadcrumb', JSON.stringify(cloneArray))
}

const showPathTab = () => {
  let sessionArray = sessionStorage.getItem('sessionBreadcrumb')
  //执行请求,再回显当前索引
  let typeMap = {
    ftyItem: 'allTypeArry',
    mtyItem: 'allTypeArry',
    foodList: 'foodList',
    mListList: 'mListList'
  }
  if (sessionArray) {
    sessionArray = JSON.parse(sessionArray)
    console.log(sessionArray, 'sessionArray')
    sessionArray.forEach((item, index) => {
      if (index >= 1) {
        let lastClickItem = state.breadcrumbArray[index - 1]['clickItem']
        console.log(toRaw(lastClickItem))
        let itemType = typeMap[item.clickTypeName]
        let lastItem = lastClickItem[itemType]
        console.log(itemType, lastItem)
        state.breadcrumbArray.push({
          ...sessionArray[index],
          clickItem: lastItem[item.clickIndex]
        })
        console.log(toRaw(state.breadcrumbArray))
      }
    })
    let lastMainItem = state.breadcrumbArray[state.breadcrumbArray.length - 1]
    console.log(lastMainItem, 'lastMainItem')
    state.mainItem = { ...lastMainItem.clickItem }
  }
}

onMounted(() => {
  showPathTab()
})
// const getData = () => {
//   // axios
//   //   .get('/api/photoConfig/getSpecifiedPhotoConfig')
//   //   .then((res) => {
//   //     console.dir(res)
//   //   })
//   //   .catch((error) => {
//   //     console.log(error)
//   //   })
// }
// getData()
</script>
<style scoped>
.menu-box {
  padding: 20px;
}
.main-box {
  display: flex;
}
.breadcrumb-box {
  margin: 20px 0;
}
.breadcrumbTxt {
  font-size: 16px;
}
.primaryColor {
  color: #409eff;
}
.black {
  color: #303133;
  font-weight: 700;
}
</style>
