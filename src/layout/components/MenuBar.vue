<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
    unique-opened
  >
    <el-menu-item :index="'/shou'">
      <el-icon><icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item :index="'/user'">用户管理</el-menu-item>
      <el-menu-item :index="'/roles'">角色管理</el-menu-item>
      <el-menu-item :index="'/menus'">菜单管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系统工具</span>
      </template>
      <el-menu-item :index="'/dicts'">数字字典</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup></script>

<style lang="scss" scoped>
.el-menu-vertical-demo{
  border-right: none;
}
</style>
