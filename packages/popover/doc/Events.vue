<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options: {
    fileds: [
      { field: "name", title: "事件名", align: "center" },
      { field: "red", title: "说明", align: "center", width: "350px" },
      { field: "attr", title: "回调参数", align: "center" },
      { field: "exm", title: "示例", align: "center", width: "350px" },
    ],
    datas: [
      {
        name: "after-enter",
        red: "显示动画播放完毕后触发",
        attr: "——",
        exm: "——",
      },
      {
        name: "after-leave",
        red: "隐藏动画播放完毕后触发",
        attr: "——",
        exm: "——",
      },
    ],
  },
});
const { options } = state;
</script>
