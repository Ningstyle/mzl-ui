<!-- html -->
<template>
  <m-switch v-model="switchVal" disabled></m-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(true);
</script>