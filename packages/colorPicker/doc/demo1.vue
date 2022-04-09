<template>
  <m-colorPicker v-model="color"></m-colorPicker>
</template>

<script setup>
import { ref } from 'vue'
const color = ref('red')
</script>

<style lang="scss" scoped></style>
