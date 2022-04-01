<!-- html -->
<template>
  <m-date v-model="dateVal" disabled placeholder="请选择日期"> </m-date>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>