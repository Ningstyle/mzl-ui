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
        red: "弹窗标题，如果使用header具名插槽后将失效",
        sel: "——",
        def: "标题",
      },
      {
        attr: "v-model",
        type: "Boolean",
        red: "是否显示弹窗",
        sel: "true / false ",
        def: "false",
      },
      {
        attr: "align",
        type: "String",
        red: "是否居中布局",
        sel: "center",
        def: "——",
      },
      { attr: "width", type: "String", red: "弹窗宽度", sel: "——", def: "35%" },
      {
        attr: "top",
        type: "String",
        red: "弹窗到顶部的距离",
        sel: "——",
        def: "15%",
      },
      {
        attr: "showClose",
        type: "Boolean",
        red: "是否显示关闭按钮",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "scrollLock",
        type: "Boolean",
        red: "弹窗显示时是否锁定滚动条",
        sel: "true / false",
        def: "false",
      },
      {
        attr: "closeOnModal",
        type: "Boolean",
        red: "是否可通过遮罩层关闭弹窗",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "customClass",
        type: "String",
        red: "自定义整体的Class类名",
        sel: "——",
        def: "——",
      },
      {
        attr: "#header",
        type: "String",
        red: "弹窗顶部区域具名插槽名",
        sel: "——",
        def: "——",
      },
      {
        attr: "#content",
        type: "String",
        red: "弹窗内容区域具名插槽名",
        sel: "——",
        def: "——",
      },
      {
        attr: "#footer",
        type: "String",
        red: "弹窗底部区域具名插槽名",
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