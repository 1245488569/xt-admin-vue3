<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import useLocalI18n from '@/hooks/useLocalI18n'

defineOptions({
  name: 'PersonalSelect',
})

const { generateTitle } = useLocalI18n()

const useUser = useUserStore()
const router = useRouter()
function logout() {
  useUser.logout().then(() => {
    router.replace({
      path: '/login',
    })
  })
}
</script>

<template>
  <el-dropdown>
    <div>
      <el-avatar
        :size="30"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/personal">
          <el-dropdown-item> {{ generateTitle('personal.personal') }} </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided @click="logout">
          {{ generateTitle('personal.loginOut') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
