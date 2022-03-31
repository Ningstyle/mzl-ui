<!-- html -->
<template>
  <m-space>
    <m-input v-model="value1"  placeholder="默认大小"></m-input>
    <m-input v-model="value2"  placeholder="小的" size="small"></m-input>
    <m-input v-model="value3"  placeholder="更小的" size="mini"></m-input>
  </m-space>
</template>

<!-- js -->
<script setup>
  import { ref } from "vue";
  const value1 = ref('')
  const value2 = ref('')
  const value3 = ref('')
</script>