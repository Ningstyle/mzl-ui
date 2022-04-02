<!-- html -->
<template>
  <m-select
    v-model="selVal"
    placeholder="请选择"
    :options="selOptions"
    @change="selchange"
    multiple
  ></m-select>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const selVal = ref([]);
const state = reactive({
  selOptions: [
    { label: "中国", value: "zhongguo" },
    { label: "俄罗斯", value: "eluosi" },
    { label: "美国", value: "meiguo" },
    { label: "澳大利亚", value: "aodaliya" },
    { label: "巴基斯坦", value: "bajisitan" },
  ],
});
const selchange = (item, index) => {
  // 当前选中的值及index
  console.log(item, index);
};
const { selOptions } = state;
</script>