<!-- html -->
<template>
  <m-input v-model="value1" placeholder="基本使用"></m-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>