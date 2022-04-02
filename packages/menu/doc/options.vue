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
        red: "菜单名称",
        sel: "——",
        def: "title",
      },
      {
        attr: "children",
        type: "Array",
        red: "节点子集数据",
        sel: "——",
        def: "——",
      },
      {
        attr: "disabled",
        type: "Boolean",
        red: "是否禁用",
        sel: "true / false",
        def: "——",
      },
      {
        attr: "*",
        type: "String",
        red: "其他自定拓展配置字段，如：id、vlaue",
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