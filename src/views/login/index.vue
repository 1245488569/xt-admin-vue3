<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { useUserStore } from '@/stores/user'

const loginFormRef = ref<FormInstance>()
const loginRules = reactive<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
    { min: 3, max: 20, trigger: 'blur', message: '长度在3到20个字符' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 20, trigger: 'blur', message: '长度在6到20个字符' },
  ],
})
const loginForm = reactive({
  account: '',
  password: '',
})

const router = useRouter()
const useUser = useUserStore()
function handleLogin() {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      useUser.login().then(() => {
        router.push('/')
      })
    }
    // axios.get('/api/login').then((res: any) => {
    //   console.log(res)
    //   router.push('/')
    // })
  })
}
</script>

<template>
  <section class="flex items-stretch min-h-screen text-white">
    <div class="login-bg bg-no-repeat bg-cover w-1/2 hidden items-center lg:flex">
      <div class="w-full px-24 z-10">
        <div class="font-bold text-left text-5xl tracking-wide">
          欢迎您
        </div>
        <div class="my-4 text-3xl">
          这是一款美观，实用，易用的管理后台
        </div>
      </div>
    </div>

    <div class="flex text-center w-full px-0 z-0 relative items-center justify-center   bg-[#161616] md:px-16 lg:w-1/2">
      <div class="login-bg bg-no-repeat bg-cover absolute inset-0 z-10 lg:hidden">
        <div class="bg-black opacity-60 absolute inset-0 z-0" />
      </div>

      <div class="w-full z-999">
        <div class="flex items-center justify-center text-3xl my-6">
          用户登录
        </div>

        <el-form ref="loginFormRef" class="mx-auto w-full px-4 sm:w-2/3 lg:px-0" :model="loginForm" :rules="loginRules">
          <el-form-item prop="account">
            <el-input v-model="loginForm.account">
              <template #prefix>
                <el-icon :size="20">
                  <svg-icon name="ep:avatar" />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" show-password @keyup.enter="handleLogin">
              <template #prefix>
                <el-icon :size="20">
                  <svg-icon name="ep:lock" />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-button class="w-full" type="primary" size="large" @click="handleLogin">
            登录
          </el-button>
        </el-form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login-bg {
  background-image: url('../../assets/images/login-bg.webp');
}
</style>
