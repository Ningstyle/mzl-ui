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
        attr: "label",
        type: "String",
        red: "多选默认label展示字段名，自定义请使用 labelFiled 属性重新关联lable字段",
        sel: "——",
        def: "label",
      },
      {
        attr: "value",
        type: "String",
        red: "多选默认value选中值，自定义请使用 valueFiled 属性重新关联value字段",
        sel: "——",
        def: "value",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否禁用选项",
        sel: "true / false",
        def: "false",
      },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>