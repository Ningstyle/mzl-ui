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
        attr: "inline",
        type: "Booleab",
        red: "是否为水平或者垂直，默认横向",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "size",
        type: "Array",
        red: "自定义间距大小，接收两个参数，第一个为垂直间距，第二个为水平间距，当inline为false是，只需要一个参数设置垂直间距即可",
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