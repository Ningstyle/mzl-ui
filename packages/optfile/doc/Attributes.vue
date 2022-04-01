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
        red: "提示文字信息",
        sel: "——",
        def: "——",
      },
      {
        attr: "targetType",
        type: "String",
        red: "组件展现方式",
        sel: "btn / box",
        def: "btn",
      },
      {
        attr: "type",
        type: "String",
        red: "按钮类型的type，支持button的type的类型，custom除外",
        sel: "default / primary / success / danger / warning / dashed / text",
        def: "default",
      },
      {
        attr: "size",
        type: "String",
        red: "盒子类型时组件大小，targetType为box时有效",
        sel: "big",
        def: "——",
      },
      {
        attr: "accept",
        type: "String",
        red: "接受的文件类型",
        sel: "参考原生input=file的accept属性",
        def: "——",
      },
      {
        attr: "multiple",
        type: "Boolean",
        red: "是否启用多选",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "icon",
        type: "String",
        red: "自定义图标",
        sel: "参考图标库",
        def: "m-icon-add-bold",
      },
      {
        attr: "showFileList",
        type: "Boolean",
        red: "是否显示文件上传列表",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "fileList",
        type: "Array",
        red: "文件上传列表，例：[{name:1.png},{name:2.png}]，imgListShow为false时有效",
        sel: "——",
        def: "[]",
      },
      {
        attr: "drop",
        type: "Boolean",
        red: "是否启用拖拽功能",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "imgListShow",
        type: "Boolean",
        red: "是否预览已上传图片，targetType为box且showFileList为false时有效",
        sel: "true / false",
        def: "false",
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