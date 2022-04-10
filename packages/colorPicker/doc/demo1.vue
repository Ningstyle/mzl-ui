<template>
  <m-row style="display: flex; align-items: center">
    <m-col :span="4"><m-button @click.stop="showColorPicker">显示colorPicker面板</m-button></m-col>
    <m-col :span="6"><div :style="{ color: color }">结果颜色</div></m-col>
  </m-row>
  <m-colorPicker ref="colorPicker" v-model="color" :autoClose="autoClose"></m-colorPicker>
</template>

<script setup>
import { ref } from 'vue'
const color = ref('#000')
const autoClose = ref(false)
const colorPicker = ref()
const showColorPicker = () => {
  colorPicker.value.show()
}
</script>

<style lang="scss" scoped></style>
