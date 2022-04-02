<!-- html -->
<template>
  <m-switch v-model="switchVal" :showTipsText="true"></m-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(false);
</script>