<!-- html -->
<template>
  <m-select
    v-model="selVal"
    placeholder="请选择"
    :options="selOptions"
  ></m-select>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const selVal = ref("");
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi", disabled: true },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya", disabled: true },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const { selOptions } = state;
</script>