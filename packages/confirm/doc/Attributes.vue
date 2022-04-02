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
        attr: "title",
        type: "String",
        red: "弹窗标题文本",
        sel: "——",
        def: "提示",
      },
      {
        attr: "text",
        type: "String",
        red: "弹窗内容文本信息",
        sel: "——",
        def: "——",
      },
      {
        attr: "icon",
        type: "String",
        red: "自定义icon图标",
        sel: "参考图标库",
        def: "m-icon-warning",
      },
      {
        attr: "confirmText",
        type: "String",
        red: "确认按钮文本信息",
        sel: "——",
        def: "确认",
      },
      {
        attr: "cancelText",
        type: "String",
        red: "取消按钮文本信息",
        sel: "——",
        def: "取消",
      },
      {
        attr: "confirmShow",
        type: "Boolean",
        red: "是否显示确认按钮",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "cancelShow",
        type: "Boolean",
        red: "是否显示取消按钮",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "closeShow",
        type: "Boolean",
        red: "是否显示右上角关闭按钮",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "confirmCallback",
        type: "Function",
        red: "确认按钮回调函数",
        sel: "——",
        def: "——",
      },
      {
        attr: "cancelCallback",
        type: "Function",
        red: "取消按钮回调函数",
        sel: "——",
        def: "——",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定义组件类名",
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