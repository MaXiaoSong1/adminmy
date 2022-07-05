<template>
  <div class="Login">
    <h3>用户登录</h3>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleFormRef"
      label-width="70px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model.trim="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="ruleForm.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code" class="avatar">
        <el-input v-model.trim="ruleForm.code" />
        <el-image @click="list()" :src="listData" style="width: 100px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="adminLogin">提交</el-button>
        <el-button>获取密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import UserData from '../../api/user'
import { useRouter } from 'vue-router'

const router = useRouter()
const ruleFormRef = ref(null)
const ruleForm = reactive({
  username: 'test',
  password: '',
  code: '',
  token: ''
})

// 获取验证码 token
const listData = ref('')
const list = async () => {
  const res = await UserData.adminList()
  listData.value = res.data.data.captchaImg
  ruleForm.token = res.data.data.token
  // console.log(ruleForm.token)
}
list()
console.log(listData)

// 登录
const adminLogin = async () => {
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const res = await UserData.userLogin(
        ruleForm.username,
        ruleForm.password,
        ruleForm.code,
        ruleForm.token
      )
      router.push('/')
      console.log(res)
    } else {
      console.log('error submit!')
    }
  })
}

const rules = {
  username: [
    {
      required: true,
      message: '用户名为必填项',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      max: 10,
      min: 6,
      message: '密码不能少于6位',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}
</script>

<style lang="scss" scoped>
.Login {
  text-align: center;
  width: 400px;
  height: 300px;
  margin: 180px auto;
  .avatar {
    display: flex;
    .el-input {
      width: 220px;
      margin-right: 10px;
    }
  }
}
</style>
