<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "attr", title: "参数", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "example", title: "举例", align: "center" },
      { field: "sel", title: "可选值", align: "center", width: "350px" },
      { field: "def", title: "默认值", align: "center" },
    ],
    datas: [
      { attr: "yyyy", red: "年", example: "2022", sel: "——", def: "——" },
      { attr: "M", red: "月（不补0）", example: "1", sel: "——", def: "——" },
      { attr: "MM", red: "月（补0）", example: "01", sel: "——", def: "——" },
      { attr: "d", red: "日（不补0）", example: "9", sel: "——", def: "——" },
      { attr: "dd", red: "日（补0）", example: "09", sel: "——", def: "——" },
      {
        attr: "H",
        red: "时，24小时制（不补0）",
        example: "9",
        sel: "——",
        def: "——",
      },
      {
        attr: "HH",
        red: "时，24小时制（补0）",
        example: "09",
        sel: "——",
        def: "——",
      },
      {
        attr: "h",
        red: "时，12小时制（不补0）",
        example: "9",
        sel: "——",
        def: "——",
      },
      {
        attr: "hh",
        red: "时，12小时制（补0）",
        example: "09",
        sel: "——",
        def: "——",
      },
      { attr: "m", red: "分（不补0）", example: "9", sel: "——", def: "——" },
      { attr: "mm", red: "分（补0）", example: "09", sel: "——", def: "——" },
      { attr: "s", red: "秒（不补0）", example: "9", sel: "——", def: "——" },
      { attr: "ss", red: "秒（补0）", example: "09", sel: "——", def: "——" },
    ],
  },
});
const { options } = state;
</script>

<style lang="scss" scoped>
</style>