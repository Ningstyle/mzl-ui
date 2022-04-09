<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "name", title: "事件名", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "attr", title: "回调参数", align: "center" },
      { field: "exm", title: "示例", align: "center", width: "350px" },
    ],
    datas: [
      {
        name: "focus",
        red: "textarea文本域在获取焦点时触发",
        attr: "(event: Event)",
        exm: "focus=(e)=>{console.log(e)}",
      },
      {
        name: "blur",
        red: "textarea文本域在失去焦点时触发",
        attr: "(event: Event)",
        exm: "blur=(e)=>{console.log(e)}",
      },
      {
        name: "input",
        red: "textarea文本域值变化时触发",
        attr: "(value: string | number)",
        exm: "input=(e)=>{console.log(e)}",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>