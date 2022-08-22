<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumbStyle">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.name">
        <!-- 不可点击项 -->
        <span
          v-if="item.redirect === 'noRedirect' || index === breadcrumbData.length - 1"
          class="no-redirect"
          >{{ item.meta.title }}</span
        >
        <!-- 可点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
// import { generateTitle } from '@/utils/i18n'
// import { ref, watch } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
// 生成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter((item) => item.meta && item.meta.title)
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true,
  }
)

// 处理点击事件
const router = useRouter()
const onLinkClick = (item) => {
  console.log(item)
  router.push(item.path)
}
</script>

<style scoped>
.app-breadcrumb.el-breadcrumb {
  /* display: inline-block;
  line-height: 50px; */
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 20px;
}
.no-redirect {
  color: #97a8be;
  cursor: text;
}

/* .redirect {
  color: #666;
  font-weight: 600;
} */

/* breadcrumb transition */
.breadcrumbStyle-enter-active,
.breadcrumbStyle-leave-active {
  transition: all 0.5s;
}

.breadcrumbStyle-enter,
.breadcrumbStyle-leave-active {
  opacity: 0;
  transform: translateX(80px);
}

.breadcrumbStyle-move {
  transition: all 0.5s;
}

.breadcrumbStyle-leave-active {
  position: absolute;
}
</style>
