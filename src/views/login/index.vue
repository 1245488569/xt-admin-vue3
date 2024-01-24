<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { useUserStore } from '@/stores/user'
import useLocalI18n from '@/hooks/useLocalI18n'
import LangSelect from '@/layouts/components/tools/LangSelect/index.vue'
import { useAppConfigStore } from '@/stores/app'

const { generateTitle } = useLocalI18n()
const useAppConfig = useAppConfigStore()

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

const route = useRoute()
const router = useRouter()
const useUser = useUserStore()
const submitLoading = ref(false)
const redirect = ref(route.query.redirectPath as string ?? '/')
function handleLogin() {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      if (submitLoading.value)
        return
      submitLoading.value = true
      useUser.login(loginForm).then(() => {
        router.replace(redirect.value)
      }).finally(() => {
        submitLoading.value = false
      })
    }
  })
}

function loginFast(type: 'admin' | 'test') {
  switch (type) {
    case 'admin':
      loginForm.account = 'admin'
      loginForm.password = '123456'
      break

    case 'test':
      loginForm.account = 'test'
      loginForm.password = '123456'
      break
  }
  handleLogin()
}
</script>

<template>
  <section class="min-h-screen flex items-stretch text-white">
    <div class="login-bg hidden w-1/2 items-center bg-cover bg-no-repeat lg:flex">
      <div class="z-10 w-full px-24">
        <div class="text-left text-5xl font-bold tracking-wide">
          欢迎您
        </div>
        <div class="my-4 text-3xl">
          这是一款美观，实用，易用的管理后台
        </div>
      </div>
    </div>

    <div class="relative z-0 w-full flex items-center justify-center bg-[#161616] px-0 text-center lg:w-1/2 md:px-16">
      <div class="login-bg absolute inset-0 z-10 bg-cover bg-no-repeat lg:hidden">
        <div class="absolute inset-0 z-0 bg-black opacity-60" />
      </div>

      <div class="z-999 w-full">
        <div class="my-6 flex items-center justify-center text-3xl">
          {{ generateTitle('login.title') }}
          <div class="lang flex items-center justify-center">
            <LangSelect v-if="useAppConfig.appConfig.toolbar.enableI18n" class="ml-2" />
          </div>
        </div>

        <el-form ref="loginFormRef" class="mx-auto w-full px-4 sm:w-2/3 lg:px-0" :model="loginForm" :rules="loginRules">
          <el-form-item prop="account">
            <el-input v-model="loginForm.account" :placeholder="generateTitle('login.account')">
              <template #prefix>
                <el-icon :size="20">
                  <svg-icon name="ep:avatar" />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" show-password :placeholder="generateTitle('login.password')" @keyup.enter="handleLogin">
              <template #prefix>
                <el-icon :size="20">
                  <svg-icon name="ep:lock" />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item>
            <span class="mr-2">快速登录</span>
            <el-button type="primary" size="small" @click="loginFast('admin')">
              admin
            </el-button>
            <el-button type="primary" size="small" @click="loginFast('test')">
              test
            </el-button>
          </el-form-item>
          <el-button class="w-full" type="primary" size="large" :loading="submitLoading" @click="handleLogin">
            {{ generateTitle('login.loginBtn') }}
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

.lang {
  .el-dropdown {
    color: #fff;
  }
}
</style>
