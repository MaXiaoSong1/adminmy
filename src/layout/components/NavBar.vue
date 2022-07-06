<template>
  <div class="navbox">
    <div class="left"><b>VueAdmin后台管理系统</b></div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link"> test </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="tui">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
// import { useStore } from 'vuex'
import UserData from '../../api/user'
import { useRouter } from 'vue-router'

const router = useRouter()
// const store = useStore()
const tui = async () => {
  const res = await UserData.loginout()
  console.log(res)
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.navbox {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  background-color: #17b3a3;
}
.left{
  margin-left: 30%;
}
.right {
  padding-right: 50px;
}
.dropdown {
  margin: 0 10px;
}
</style>
