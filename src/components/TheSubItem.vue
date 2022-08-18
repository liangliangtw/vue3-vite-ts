<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <el-sub-menu v-if="subItem.children && subItem.children.length > 0" :index="subItem.path">
      <template #title>
        <el-icon>
          <component :is="subItem.meta.icon" />
        </el-icon>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <TheSubItem :menu-list="subItem.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="subItem.path">
      <el-icon>
        <component :is="subItem.icon"></component>
      </el-icon>
      <!-- 不存在外部链接 -->
      <template v-if="!subItem.isLink" #title>
        <span>{{ subItem.meta.title }}</span>
      </template>
      <!-- 存在外部链接 -->
      <template v-else #title>
        <a class="menu-href" :href="subItem.isLink" target="_blank">{{ subItem.meta.title }}</a>
      </template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps<{ menuList: any[] }>()
</script>

<style scoped lang="scss"></style>
