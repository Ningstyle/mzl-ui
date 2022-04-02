<!-- html -->
<template>
  <m-space :inline="false">
    <m-checkbox
      v-model="checkboxVal"
      :options="checkOptions"
      customColor="#09b63d"
    ></m-checkbox>
    <m-checkbox
      v-model="checkboxVal"
      :options="checkOptions"
      customColor="#25B0F8"
    ></m-checkbox>
  </m-space>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const checkboxVal = ref([]);
const state = reactive({
  checkOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "英国", value: "yingguo" },
    { label: "德国", value: "deguo" },
    { label: "法国", value: "faguo" },
  ],
});
const { checkOptions } = state;
</script>