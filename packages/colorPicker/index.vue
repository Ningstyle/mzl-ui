<template>
  <div class="mzl-color-picker">
    <!-- 显示颜色的小方块 -->
    <div class="mzl-color-picker-hd">
      <div class="hd-color-review"></div>
      <div class="default-color-text">默认颜色</div>
    </div>
    <div>
      <p>主题颜色</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mColorPicker'
}
</script>

<script setup>
const props = defineProps({
  color: {
    type: String
  },
  defaultColor: {
    type: String,
    default: '#000000'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const showColor = computed(() => {
  return props.value ?? props.defaultColor
})
</script>

<style lang="scss" scoped>
.mzl-color-picker {
  .mzl-color-picker-hd {
    .hd-color-review {
      background-color: v-bind(showColor);
    }
    .default-color-text {
    }
  }
}
</style>
