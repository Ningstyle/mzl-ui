<!-- html -->
<template>
  <m-space>
    <m-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy年MM月dd日"
    ></m-date>
    <m-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy/MM/dd"
    ></m-date>
    <m-date
      v-model="dateVal"
      placeholder="请选择日期"
      format="yyyy-MM-dd"
    ></m-date>
  </m-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>