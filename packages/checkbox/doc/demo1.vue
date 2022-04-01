<!-- html -->
<template>
  <m-checkbox
    v-model="checkboxVal"
    :options="checkOptions"
    @change="checkChange"
  ></m-checkbox>
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
const checkChange = (e) => {
  console.log(e.value, e.index);
};
const { checkOptions } = state;
</script>