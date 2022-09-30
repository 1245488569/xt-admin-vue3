<script setup lang="ts">
import router from '@/router'
import { useUserStore } from '@/store/user'
import { i18n } from '@/plugins/i18n'
import { useAppConfigStore } from '@/store/app'
import LangSelect from '@/layouts/components/tool/LangSelect/index.vue'

const useAppConfig = useAppConfigStore()

const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('login.passwordRule')))
    } else {
      callback()
    }
  }
}
const loginRules = ref({
  account: [
    {
      required: true,
      trigger: 'blur',
      message: computed(() => {
        return i18n.global.t('login.accountRule')
      })
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
const loginForm = ref({
  account: 'admin11',
  password: 'admin11'
})
const loading = ref(false)
const loginFormRef = ref()
const redirect = ref()
onMounted(() => {
  const route = useRoute()
  redirect.value = route.query.redirect ?? '/'
})
const useUser = useUserStore()
const handleLogin = () => {
  loginFormRef.value.validate(valid => {
    if (valid) {
      loading.value = true
      useUser
        .login()
        .then(() => {
          router.replace(redirect.value)
        })
        .finally(() => {
          loading.value = false
        })
    }
  })
}
</script>

<template>
  <section class="flex min-h-screen text-white items-stretch">
    <div
      class="bg-no-repeat bg-cover bg-gray-500 w-1/2 hidden relative items-center login-bg lg:flex"
    >
      <div class="bg-black opacity-60 inset-0 z-0 absolute"></div>
      <div class="w-full px-24 z-10">
        <h1 class="font-bold text-left tracking-wide text-5xl">欢迎您</h1>
        <p class="my-4 text-3xl">这是一款美观，实用，易用的管理后台</p>
      </div>
    </div>
    <div
      class="flex text-center w-full px-0 z-0 items-center justify-center md:px-16 lg:w-1/2"
      style="background-color: #161616"
    >
      <div
        class="bg-no-repeat bg-cover bg-gray-500 inset-0 z-10 absolute items-center login-bg lg:hidden"
      >
        <div class="bg-black opacity-60 inset-0 z-0 absolute"></div>
      </div>
      <div class="w-full z-999">
        <h1 class="flex my-6 text-3xl items-center justify-center">
          {{ $t('login.title') }}
          <LangSelect v-if="useAppConfig.toolbar.enableI18n" class="ml-2" />
        </h1>
        <el-form
          ref="loginFormRef"
          class="mx-auto w-full px-4 sm:w-2/3 lg:px-0"
          :model="loginForm"
          :rules="loginRules"
          label-position="left"
          size="large"
        >
          <div>
            <el-form-item prop="account">
              <el-input
                v-model="loginForm.account"
                :placeholder="$t('login.account')"
                type="text"
              >
                <template #prefix>
                  <el-icon>
                    <svg-icon name="ri:account-box-line" />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                show-password
                :placeholder="$t('login.password')"
                @keyup.enter="handleLogin"
              >
                <template #prefix>
                  <el-icon>
                    <svg-icon name="ri:lock-line" />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
          </div>
          <el-button
            class="w-full"
            :loading="loading"
            type="primary"
            size="large"
            @click.prevent="handleLogin"
            >{{ $t('login.loginBtn') }}</el-button
          >
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
