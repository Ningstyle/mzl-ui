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
        attr: "background",
        type: "String",
        red: "默认背景颜色",
        sel: "——",
        def: "#fff",
      },
      {
        attr: "hoverBackground",
        type: "String",
        red: "鼠标移入或选中时背景颜色",
        sel: "——",
        def: "#fff",
      },
      {
        attr: "borderColor",
        type: "String",
        red: "默认边框颜色",
        sel: "——",
        def: "#d9d9d9",
      },
      {
        attr: "hoverBorderColor",
        type: "String",
        red: "鼠标移入或选中时边框颜色",
        sel: "——",
        def: "#0e80eb",
      },
      {
        attr: "color",
        type: "String",
        red: "默认文本颜色",
        sel: "——",
        def: "#505050",
      },
      {
        attr: "hoverColor",
        type: "String",
        red: "鼠标移入或选中时文本颜色",
        sel: "——",
        def: "#0e80eb",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>