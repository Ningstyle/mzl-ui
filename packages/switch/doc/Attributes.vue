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
        attr: "v-model",
        type: "Boolean",
        red: "开关状态",
        sel: "true / false",
        def: "——",
      },
      {
        attr: "width",
        type: "Number",
        red: "自定义宽度（单位：px）",
        sel: "——",
        def: "45",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否禁用",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "closeColor",
        type: "String",
        red: "关闭状态时的背景色",
        sel: "——",
        def: "#BFBFBF",
      },
      {
        attr: "activeColor",
        type: "String",
        red: "开启状态时的背景色",
        sel: "——",
        def: "#0e80eb",
      },
      {
        attr: "closeText",
        type: "String",
        red: "关闭状态时辅助文字",
        sel: "——",
        def: "——",
      },
      {
        attr: "activeText",
        type: "String",
        red: "开启状态时辅助文字",
        sel: "——",
        def: "——",
      },
      {
        attr: "textAlign",
        type: "String",
        red: "辅助文字位置",
        sel: "left / right",
        def: "left",
      },
      {
        attr: "showTipsText",
        type: "Boolean",
        red: "是否显示提示信息",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定义整体的Class类名",
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