<!-- html -->
<template>
  <m-space>
    <m-date v-model="dateVal" placeholder="请选择日期"> </m-date>
    <m-date v-model="dateVal" placeholder="请选择日期" size="small"> </m-date>
    <m-date v-model="dateVal" placeholder="请选择日期" size="mini"> </m-date>
  </m-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>