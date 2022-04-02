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
        red: "抽屉标题，如果使用header具名插槽后将失效",
        sel: "——",
        def: "标题",
      },
      {
        attr: "v-model",
        type: "Boolean",
        red: "是否显示抽屉",
        sel: "true / false ",
        def: "false",
      },
      {
        attr: "direction",
        type: "String",
        red: "抽屉出现为方向",
        sel: "left / top / right / bottom",
        def: "left",
      },
      {
        attr: "width",
        type: "String",
        red: "抽屉区域宽度，direction 为 left 和 right 时有效",
        sel: "——",
        def: "30%",
      },
      {
        attr: "height",
        type: "String",
        red: "抽屉区域高度，direction 为 top 和 bottom 时有效",
        sel: "——",
        def: "40%",
      },
      {
        attr: "closeOnModal",
        type: "Boolean",
        red: "是否可通过遮罩层关闭抽屉",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "showHeader",
        type: "Boolean",
        red: "是否显示抽屉头部区域",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "showFooter",
        type: "Boolean",
        red: "是否显示抽屉底部区域",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "showClose",
        type: "Boolean",
        red: "是否显示左上角关闭按钮",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "confirmText",
        type: "String",
        red: "右上角确定按钮文本",
        sel: "——",
        def: "确定",
      },
      {
        attr: "cancelText",
        type: "String",
        red: "右上角取消按钮文本",
        sel: "——",
        def: "取消",
      },
      {
        attr: "confirmShow",
        type: "Boolean",
        red: "是否显示右上角确定按钮",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "cancelShow",
        type: "Boolean",
        red: "是否显示右上角取消按钮",
        sel: "true / false",
        def: "true",
      },
      {
        attr: "customClass",
        type: "Boolean",
        red: "抽屉组件自定义类名",
        sel: "——",
        def: "——",
      },
      {
        attr: "#header",
        type: "String",
        red: "抽屉顶部区域具名插槽名",
        sel: "——",
        def: "——",
      },
      {
        attr: "#content",
        type: "String",
        red: "抽屉内容区域具名插槽名",
        sel: "——",
        def: "——",
      },
      {
        attr: "#footer",
        type: "String",
        red: "抽屉底部区域具名插槽名",
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