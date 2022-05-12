<template>
  <div v-if="showTags" class="tags-view-container">
    <el-scrollbar ref="scrollContainer" class="tags-view-wrapper">
      <router-link
        v-for="(item, index) in tagsList"
        :key="index"
        :to="item.path"
        class="tags-view-item"
        :class="{ active: isActive(item.path) }"
      >
        {{ item.title }}
        <el-icon @click="closeTags(index)"><close /></el-icon>

        <!-- <span class="el-icon-close" @click="closeTags(index)"></span> -->
      </router-link>
      <!-- <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div> -->
    </el-scrollbar>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useUserStore } from '@/store/user'

import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const isActive = (path) => {
      return path === route.fullPath
    }

    const store = useUserStore()
    const tagsList = computed(() => store.tagsList)
    const showTags = computed(() => tagsList.value.length > 0)

    // 关闭单个标签
    const closeTags = (index) => {
      const delItem = tagsList.value[index]
      store.delTagsItem({ index })
      const item = tagsList.value[index] ? tagsList.value[index] : tagsList.value[index - 1]
      if (item) {
        delItem.path === route.fullPath && router.push(item.path)
      } else {
        router.push('/')
      }
    }

    // 设置标签
    const setTags = (route) => {
      const isExist = tagsList.value.some((item) => {
        return item.path === route.fullPath
      })
      if (!isExist) {
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
      setTags(to)
    })

    // 关闭全部标签
    const closeAll = () => {
      store.clearTags()
      router.push('/')
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

    // 关闭当前页面的标签页
    // store.commit("closeCurrentTag", {
    //     $router: router,
    //     $route: route
    // });

    return {
      isActive,
      tagsList,
      showTags,
      closeTags,
      handleTags,
    }
  },
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-wrapper {
    ul {
      margin: 0;
      padding: 0;
    }
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
      margin-left: 5px;
      margin-top: 4px;
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
