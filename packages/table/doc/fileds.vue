<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "type", title: "类型", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "sel", title: "可选值", align: "center" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      {
        attr: "field",
        type: "String",
        red: "（固定）定义表格列的参数名，对应datas数据下某项的键名",
        sel: "——",
        def: "——",
      },
      {
        attr: "title",
        type: "String",
        red: "（固定）定义表头显示的名称",
        sel: "——",
        def: "——",
      },
      {
        attr: "align",
        type: "String",
        red: "定义表格内容展示位置",
        sel: "left / center / right",
        def: "left",
      },
      {
        attr: "width",
        type: "String",
        red: "定义表格列的宽度,支持任意浏览器支持的单位(vw,%,px)",
        sel: "——",
        def: "——",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>