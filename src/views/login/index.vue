<template>
  <div class="login-container">
    <div class="content">
      <div class="form">
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" @keyup.enter="handleLogin">
          <el-form-item prop="username">
            <el-input v-model.trim="loginForm.username" placeholder="用户名" type="text" tabindex="1" :prefix-icon="User"
              size="large" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model.trim="loginForm.password" placeholder="密码" type="password" tabindex="2" :prefix-icon="Lock"
              size="large" show-password />
          </el-form-item>
          <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin"> 登 录 </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { User, Lock } from "@element-plus/icons-vue"
import { type FormInstance, FormRules, ElMessage } from "element-plus"
import Cookies from "js-cookie"
import { login } from '@/api/user/index'
import { type Login } from "@/api/types"

const router = useRouter()
const loginFormRef = ref<FormInstance | null>(null)

/** 登录按钮 Loading */
const loading = ref(false)
/** 登录表单数据 */
const loginForm = reactive({
  username: "admin",
  password: "admin",
})
/** 登录表单校验规则 */
const loginFormRules: FormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
}
/** 登录逻辑 */
const handleLogin = async () => {
  const res: Login.LoginRes = await login(loginForm)
  console.log(res);
  if (res.code == 1) {
    Cookies.set('v3-admin-vite-token-key', 'token-admin')
    ElMessage.success('登录成功')
    router.push({ path: "/" })
  } else {
    ElMessage.error(res.msg)
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  /* min-width: 1450px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url('../../assets/img/背景.png');
  background-size: 100% 100%;

  .content {
    margin-top: 10%;
    width: 55%;
    height: 500px;
    background-image: url('../../assets/img/登录_03.png');
    background-size: 100% 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .form {
      width: 50%;
      padding: 50px;
      padding-right: 10%;

      :deep(.el-input) {
        height: 50px;
        width: 95%;
      }

      :deep(.el-input:last-child) {
        margin-top: 5%;
      }

      :deep(.el-button) {
        width: 35%;
        height: 50px;
        margin-top: 15%;
        background-color: #1b8c78;
        margin-left: 30%;
        font-size: 20px;
        font-weight: bolder;
      }

      :deep(.el-input__wrapper.is-focus) {
        box-shadow: 0 0 0 1px #1b8c78 inset;
      }
    }
  }
}
</style>
