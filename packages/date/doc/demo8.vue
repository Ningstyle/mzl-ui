<!-- html -->
<template>
  <m-space>
    <m-date
      v-model="dateVal"
      placeholder="请选择日期"
      customActiveColor="#09b63d"
    >
    </m-date>

    <m-date
      v-model="dateVal"
      placeholder="请选择日期"
      customActiveColor="#f57b29"
    >
    </m-date>
  </m-space>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const dateVal = ref("");
</script>