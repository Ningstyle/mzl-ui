<!-- html -->
<template>
  <m-date
    v-model="dateVal"
    placeholder="请选择日期"
    :startDate="startDate"
    :endDate="endDate"
  >
  </m-date>
</template>

<!-- js -->
<script setup>
import { ref, computed } from "vue";
const dateVal = ref("");
const startDate = computed(() => {
  let date = new Date();
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - 10
  ).toLocaleDateString();
});
const endDate = computed(() => {
  let date = new Date();
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 10
  ).toLocaleDateString();
});
</script>