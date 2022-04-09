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
        red: "下拉菜单标题",
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
        attr: "options",
        type: "Array",
        red: "下拉菜单数据配置，具体见下方 options API",
        sel: "——",
        def: "[]",
      },
      {
        attr: "trigger",
        type: "String",
        red: "唤醒方式",
        sel: "hover / click",
        def: "hover",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定义下拉菜单类名",
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