<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#main-container {
  width: 100%;
  height: 100%;
  display: flex;

  .left {
    width: 210px;
    background-color: #001529;
  }

  .right {
    flex: 1;

    .right_top {
      height: 75px;
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      .navbar {
        flex: 1;
        border-bottom: 1px solid #ddd;
      }

      .tagsView {
        height: 30px;
        line-height: 30px;
        padding-left: 10px;
      }
    }

    .right_bottom {
      padding: 10px;
    }
  }
}
</style>
