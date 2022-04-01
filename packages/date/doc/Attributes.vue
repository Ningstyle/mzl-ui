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
        type: "String",
        red: "可被 new Date() 解析的字符串，例如：2022-02-01,2022/02/01",
        sel: "——",
        def: "——",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否禁用",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "placeholder",
        type: "String",
        red: "输入框占位字符",
        sel: "——",
        def: "——",
      },
      {
        attr: "size",
        type: "String",
        red: "组件尺寸",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "format",
        type: "String",
        red: "日期格式，见下方日期格式说明",
        sel: "——",
        def: "yyyy/MM/dd",
      },
      {
        attr: "clearable",
        type: "Boolean",
        red: "是否可清空",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "type",
        type: "String",
        red: "日期选择类型",
        sel: "date / year / month",
        def: "date",
      },
      {
        attr: "showToday",
        type: "Boolean",
        red: '是否显示 "今天" 快捷按钮',
        sel: "true / false",
        def: "true",
      },
      {
        attr: "form",
        type: "String",
        red: "原生属性，所属表单",
        sel: "——",
        def: "——",
      },
      {
        attr: "startDate",
        type: "String",
        red: "限制可选择开始日期，可被 new Date() 解析的字符串",
        sel: "——",
        def: "——",
      },
      {
        attr: "endDate",
        type: "String",
        red: "限制可选择结束日期，可被 new Date() 解析的字符串",
        sel: "——",
        def: "——",
      },
      {
        attr: "customActiveColor",
        type: "String",
        red: "自定义组件活动元素的色值",
        sel: "——",
        def: "#0e80eb",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定义组件日期面板类名",
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