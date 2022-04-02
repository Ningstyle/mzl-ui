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
        type: "Array",
        red: "绑定树形组件的数据,具体见下方 options 配置",
        sel: "——",
        def: "——",
      },
      {
        attr: "multiple",
        type: "Boolean",
        red: "是否可选择",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "defaultOpenNodes",
        type: "Array",
        red: "默认展开节点key",
        sel: "——",
        def: "[]",
      },
      {
        attr: "defaultSelectNodes",
        type: "Array",
        red: "默认选中节点key",
        sel: "——",
        def: "[]",
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