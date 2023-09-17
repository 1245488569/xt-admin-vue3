<script setup lang="ts">
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<template>
  <page-main>
    <el-alert title="开启tabbar功能后，你可以用鼠标右键点击标签项" type="success" effect="dark" :closable="false" />
  </page-main>

  <page-main>
    <el-card>
      <template #header>
        <div>
          <span>新开标签栏</span>
        </div>
      </template>
      <div>
        如果目标地址已在标签栏存在，则直接切换并访问。如果目标地址在标签栏不存在，则会在当前标签页后面插入新的标签页，并访问。
        <div class="mt-2">
          <el-button @click="goHome">
            首页标签
          </el-button>
        </div>
      </div>
    </el-card>
  </page-main>

  <page-main>
    <el-card>
      <template #header>
        <div>
          <span>关闭标签</span>
        </div>
      </template>
      <div>
        关闭标签后，程序会自动判断该往哪个标签跳转（只有一个标签时，无法关闭）
        <div class="mt-2">
          请用鼠标右键，点击标签，进行体验
        </div>
      </div>
    </el-card>
  </page-main>
</template>
