<!-- html -->
<template>
  <m-input v-model="value1" clearable @clear="clear" placeholder="可清空"></m-input>
</template>

<!-- js -->
<script setup>
  import {ref} from 'vue'
  const value1 = ref('')
  const clear = () =>{
    console.log("清空")
  }
</script>