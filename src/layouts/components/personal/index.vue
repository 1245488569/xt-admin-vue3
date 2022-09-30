<script setup lang="ts" name="PersonalSelect">
import router from '@/router'
import { useUserStore } from '@/store/user'

const logout = () => {
  const useUser = useUserStore()
  useUser.logout().then(() => {
    router.replace({
      name: 'login'
    })
    location.reload()
  })
}
</script>

<template>
  <el-dropdown>
    <div class="avatar-wrapper">
      <el-avatar
        :size="30"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      ></el-avatar>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/personal">
          <el-dropdown-item> {{ $t('personal.personal') }} </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click="logout">
          {{ $t('personal.loginOut') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
