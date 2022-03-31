<!-- html -->
<template>
  <m-input v-model="value1" type="text" placeholder="自定义你喜欢的focus颜色" focusColor="red"></m-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>