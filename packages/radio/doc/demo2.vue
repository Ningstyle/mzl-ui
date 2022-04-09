<!-- html -->
<template>
  <m-radio v-model="radioVal" :options="radioOptions"></m-radio>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const radioVal = ref("zhongguo");
const state = reactive({
  radioOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "英国", value: "yingguo", disabled: true },
    { label: "德国", value: "deguo" },
    { label: "法国", value: "faguo", disabled: true },
  ],
});
const { radioOptions } = state;
</script>