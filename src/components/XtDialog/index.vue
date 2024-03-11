<script setup lang="ts">
interface IProps {
  loading?: boolean
  showCancel?: boolean
  showConfirm?: boolean
  cancelButtonText?: string
  confirmButtonText?: string
}

defineOptions({
  name: 'XtDialog',
})

withDefaults(defineProps<IProps>(), {
  loading: false,
  showCancel: true,
  showConfirm: true,
  cancelButtonText: '取消',
  confirmButtonText: '确定',
})

const emits = defineEmits(['cancel', 'confirm'])

const model = defineModel<boolean>()

function handleCancel() {
  emits('cancel')
}

function handleConfirm() {
  emits('confirm')
}
</script>

<template>
  <el-dialog
    v-model="model"
    class="xt-base-dialog"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    v-bind="$attrs"
  >
    <slot />
    <template #footer>
      <slot name="footer">
        <span v-if="showCancel || showConfirm">
          <el-button v-if="showCancel" @click="handleCancel">
            {{ cancelButtonText }}
          </el-button>
          <el-button v-if="showConfirm" type="primary" :loading="loading" @click="handleConfirm">
            {{ confirmButtonText }}
          </el-button>
        </span>
      </slot>
    </template>
  </el-dialog>
</template>
