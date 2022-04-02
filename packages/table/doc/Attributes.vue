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
        attr: "options",
        type: "Object",
        red: "表格数据,fileds 和 datas,fileds作为整体约束（具体见下方API），datas作为数据定义",
        sel: "——",
        def: "{fileds:[], datas:[]}",
      },
      {
        attr: "size",
        type: "String",
        red: "表格尺寸大小",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "showHeader",
        type: "Boolean",
        red: "是否显示表头",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "headStyle",
        type: "Object",
        red: "自定义表头样式",
        sel: "——",
        def: "——",
      },
      {
        attr: "rowStyle",
        type: "Object",
        red: "自定义表格内容区域的样式",
        sel: "——",
        def: "——",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定义表格组件整体的Class类名",
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