<script setup lang="ts">

</script>

<template>
  <page-main>
    <div class="mb-2">
      你可以先用
      <span class="mx-1 text-orange-400">账号：admin</span>
      <span class="mx-1 text-orange-400">密码：123456</span>
      登录，然后你可以看到<span class="text-orange-400">列表菜单</span>中有<span class="text-orange-400">两个菜单（用户和商品）</span>，以及这里有个有权限的按钮
    </div>

    <div class="mb-2">
      然后你在用
      <span class="mx-1 text-orange-400">账号：test</span>
      <span class="mx-1 text-orange-400">密码：123456</span>
      登录，然后你可以看到<span class="text-orange-400">列表菜单</span>只有<span class="text-orange-400">一个菜单（商品）</span>，以及这里有个无权限的按钮
    </div>

    <div class="mb-2">
      <span class="text-orange-400">在登录界面点击快速登录，更加方便快捷哟</span>
    </div>

    <div class="mb-2">
      <span class="text-orange-400">点击右上角的小头像，会有退出功能</span>
    </div>

    <auth value="user.add">
      <el-button type="primary">
        有权限
      </el-button>
      <template #no-auth>
        <el-button type="primary" disabled>
          没权限
        </el-button>
      </template>
    </auth>
  </page-main>
</template>
