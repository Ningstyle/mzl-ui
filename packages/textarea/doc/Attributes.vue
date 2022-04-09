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
        type: "string / number",
        red: "textarea文本域绑定值",
        sel: "——",
        def: "——",
      },
      {
        attr: "placeholder",
        type: "string",
        red: "输入框占位字符",
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
        attr: "form",
        type: "String",
        red: "原生属性，所属表单",
        sel: "——",
        def: "——",
      },
      {
        attr: "resize",
        type: "Boolean",
        red: "是否开启拉伸",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "rows",
        type: "Number",
        red: "textarea可见区域高度",
        sel: "——",
        def: "4",
      },
      {
        attr: "cols",
        type: "Number",
        red: "textarea可见区域宽度",
        sel: "——",
        def: "50",
      },
      {
        attr: "readonly",
        type: "Boolean",
        red: "原生属性，是否只读",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "maxlength",
        type: "Number",
        red: "文本区域的最大字符数",
        sel: "——",
        def: "——",
      },
      {
        attr: "focusColor",
        type: "String",
        red: "自定义Focus颜色的色值",
        sel: "——",
        def: "——",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定义组件整体类名",
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