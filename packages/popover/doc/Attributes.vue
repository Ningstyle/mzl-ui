<template>
  <m-table :options="options"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      {
        field: "attr",
        title: "参数",
        align: "center",
      },
      {
        field: "type",
        title: "类型",
        align: "center",
      },
      {
        field: "red",
        title: "说明",
        align: "center",
        width: "350px",
      },
      {
        field: "sel",
        title: "可选值",
        align: "center",
      },
      {
        field: "def",
        title: "默认值",
        align: "center",
      },
    ],
    datas: [
      {
        attr: "v-model",
        type: "Boolean",
        red: "当触发方式为手动的时候,可以使用v-model进行控制触发",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "width",
        type: "String/Number",
        red: "弹框的宽度",
        sel: "——",
        def: "最小宽度 150px",
      },
      {
        attr: "placement",
        type: "String",
        red: "出现位置",
        sel: "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
        def: "top",
      },
      {
        attr: "content",
        type: "Sttng",
        red: "要展示的文案内容",
        sel: "——",
        def: "——",
      },
      {
        attr: "popperClass",
        type: "String",
        red: "为 popper弹出框 添加类名",
        sel: "——",
        def: "——",
      },
      { attr: "title", type: "String", red: "标题", sel: "——", def: "——" },
      {
        attr: "disabled",
        type: "Boolean",
        red: "	Popover 是否可用",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "trigger",
        type: "String",
        red: "触发方式",
        sel: "click/focus/hover/manual",
        def: "	click",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped></style>
