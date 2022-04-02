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
        type: "String || Array",
        red: "下拉框绑定值，开启多选时类型为Array",
        sel: "——",
        def: "——",
      },
      {
        attr: "size",
        type: "String",
        red: "尺寸大小",
        sel: "default / small / mini",
        def: "default",
      },
      {
        attr: "placeholder",
        type: "String",
        red: "下拉框占位字符",
        sel: "——",
        def: "——",
      },
      {
        attr: "options",
        type: "Array",
        red: "下拉框数据配置，具体见下方 options API",
        sel: "——",
        def: "[]",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否为禁用状态",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "width",
        type: "String",
        red: "自定义宽度",
        sel: "——",
        def: "260px",
      },
      {
        attr: "height",
        type: "String",
        red: "自定义高度",
        sel: "——",
        def: "——",
      },
      {
        attr: "searchable",
        type: "Boolean",
        red: "是否开启过滤搜索",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "multiple",
        type: "Boolean",
        red: "是否开启多选",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "labelFiled",
        type: "String",
        red: "自定义替换lable的字段名",
        sel: "——",
        def: "label",
      },
      {
        attr: "valueFiled",
        type: "String",
        red: "自定义替换value的字段名",
        sel: "——",
        def: "value",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>