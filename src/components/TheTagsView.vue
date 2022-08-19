<template>
  <div v-if="showTags" ref="tagsContainer" class="tags-view-container">
    <el-scrollbar ref="scrollContainer" class="tags-view-wrapper">
      <router-link
        v-for="(item, index) in tagsList"
        :key="index"
        class="tags-view-item"
        :class="{ active: isActive(item.path) }"
        :to="item.path"
        @contextmenu.prevent="openMenu(item, $event)"
      >
        {{ item.title }}
        <el-icon @click.prevent.stop="closeTags(index)"><close /></el-icon>
      </router-link>
    </el-scrollbar>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <!-- <li @click="refreshSelectedTag(selectedTag)">Refresh</li>
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">Close</li> -->
      <li @click="closeOther">Close Others</li>
      <li @click="closeAll">Close All</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/store/user'

import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const state = reactive({
  left: 0,
  top: 0,
  visible: false,
  tagsContainer: null,
})
const isActive = (path) => {
  return path === route.fullPath
}

const store = useUserStore()
const tagsList = computed(() => store.tagsList)
const showTags = computed(() => tagsList.value.length > 0)

// 关闭单个标签
const closeTags = (index) => {
  const delItem = tagsList.value[index]
  // console.log(delItem, 'delItem')
  store.delTagsItem({ index })
  const item = tagsList.value[index] ? tagsList.value[index] : tagsList.value[index - 1]
  if (item) {
    // console.log(delItem.path, route.fullPath, item, 'itemCloseTags')
    // delItem.path === route.fullPath &&
    router.push(item.path)
  } else {
    router.push('/dashboard')
  }
}

// 设置标签
const setTags = (route) => {
  // console.log(tagsList.value, route, '设置标签')
  const isExist = tagsList.value.some((item) => {
    return item.path === route.fullPath
  })
  // console.log(isExist, '标签isExist')
  if (!isExist) {
    // console.log(isExist, '进入这里')

    if (tagsList.value.length >= 8) {
      store.delTagsItem({ index: 0 })
    }
    store.setTagsItem({
      name: route.name,
      title: route.meta.title,
      path: route.fullPath,
    })
  }
}
setTags(route)
onBeforeRouteUpdate((to) => {
  // console.log(to, '多次触发')
  setTags(to)
})

// 关闭全部标签
const closeAll = () => {
  store.clearTags()
  router.push('/dashboard')
}
// 关闭其他标签
const closeOther = () => {
  const curItem = tagsList.value.filter((item) => {
    return item.path === route.fullPath
  })
  store.closeTagsOther(curItem)
}
const handleTags = (command) => {
  command === 'other' ? closeOther() : closeAll()
}
const tagsContainer = ref(null)
const openMenu = (tag, e) => {
  const menuMinWidth = 105
  const offsetLeft = tagsContainer.value.getBoundingClientRect().left // container margin left
  const offsetWidth = tagsContainer.value.offsetWidth // container width
  const maxLeft = offsetWidth - menuMinWidth // left boundary
  // const left = e.clientX - offsetLeft + 15 // 15: margin right
  const left = e.clientX + 15
  console.log(offsetLeft, offsetWidth, maxLeft, left)

  if (left > maxLeft) {
    state.left = maxLeft
  } else {
    state.left = left
  }
  state.top = e.clientY
  state.visible = true
  // state.selectedTag = tag
}
const closeMenu = () => {
  state.visible = false
}

watch(
  () => state.visible,
  (newVal) => {
    if (newVal) {
      document.body.addEventListener('click', closeMenu)
    } else {
      document.body.removeEventListener('click', closeMenu)
    }
  },
  {
    immediate: true, // 立即执行
    deep: true, // 深度监听
  }
)

// 关闭当前页面的标签页
// store.commit("closeCurrentTag", {
//     $router: router,
//     $route: route
// });
const { left, top, visible } = toRefs(state)
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      // margin-left: 5px;
      margin: 4px 5px 4px 0;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 4px;
        }
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>
<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon {
      display: inline-block;
      // width: 16px;
      // height: 16px;
      margin-left: 2px;
      vertical-align: -1px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
