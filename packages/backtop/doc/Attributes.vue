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
        attr: "target",
        type: "String",
        red: "触发滚动的元素对象",
        sel: "——",
        def: "body",
      },
      {
        attr: "visibilityHeight",
        type: "Number",
        red: '滚动达到这个距离出现"回到顶部组件"',
        sel: "——",
        def: "240",
      },
      {
        attr: "right",
        type: "Number",
        red: "组件距离右侧的距离",
        sel: "——",
        def: "20",
      },
      {
        attr: "bottom",
        type: "Number",
        red: "组件距离底部的距离",
        sel: "——",
        def: "40",
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