<!-- html -->
<template>
  <m-input v-model="value1" clearable>
    <template #btn>
      <m-button type="primary" leftIcon="m-icon-search">搜索</m-button>
    </template>
  </m-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
</script>