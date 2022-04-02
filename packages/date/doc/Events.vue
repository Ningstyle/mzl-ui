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
        name: "change",
        red: "日期选中事件",
        attr: "(value:value)",
        exm: "change = (e) =>{console.log(e)}",
      },
      {
        name: "clear",
        red: "清空事件",
        attr: "()",
        exm: 'clear = () =>{console.log("清空")}',
      },
      {
        name: "open",
        red: "日期面板打开事件",
        attr: "()",
        exm: 'open = () =>{console.log("打开")}',
      },
      {
        name: "close",
        red: "日期面板关闭事件",
        attr: "()",
        exm: 'close = () =>{console.log("关闭")}',
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>