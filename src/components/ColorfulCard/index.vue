<script setup lang="ts">
defineOptions({
  name: 'ColorfulCard',
})

withDefaults(defineProps<{
  colorFrom?: string
  colorTo?: string
  header?: string
  num?: number | string
  tip?: string
  icon?: string
}>(), {
  colorFrom: '#843cf6',
  colorTo: '#759bff',
  header: '',
  num: 0,
  tip: '',
  icon: '',
})
</script>

<template>
  <el-card
    shadow="hover" class="mini-card" :style="{
      background: `linear-gradient(50deg, ${colorFrom}, ${colorTo})`,
    }"
  >
    <template #header>
      <div>
        {{ header }}
      </div>
    </template>
    <div class="num">
      {{ num }}
    </div>
    <div class="tip">
      {{ tip }}
    </div>
    <svg-icon v-if="icon" :name="icon" />
  </el-card>
</template>

<style lang="scss" scoped>
.mini-card {
    position: relative;
    color: #fff;
    text-shadow: 0 0 2px #000;

    :deep(.el-card__header) {
      border-bottom: 0;
      font-size: 18px;
    }

    :deep(.el-card__body) {
      padding-top: 0;
    }

    .num {
      font-size: 36px;
    }

    .tip {
      margin-top: 10px;
      font-size: 14px;
      color: #eee;
    }

    .svg-icon {
      font-size: 120px;
      position: absolute;
      right: -30px;
      top: -10px;
      transform: rotate(15deg);
    }
}
</style>
