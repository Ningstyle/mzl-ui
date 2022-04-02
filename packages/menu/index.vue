<template>
  <div class="mzl-menu-default-box">
    <template v-for="(item, index) in options" :key="index">
      <menu-item
        :items="item"
        :index="0"
        :option="options"
        :data-key="index"
        @change="emit('change', $event)"
        :theme="theme"
        :type="type"
      ></menu-item>
    </template>
    <div class="rightCoustom" v-if="type == 'vertical'"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: "mMenu",
};
</script>
<script setup>
import { ref, reactive } from "vue";
import menuItem from "./menuItem.vue";
const emit = defineEmits(["change"]);
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  theme: {
    type: [Object, String],
    default: "white", //white,black
  },
  type: {
    type: String,
    default: "vertical", //vertical,horizontal
  },
});
const height = ref(props.type == "horizontal" ? "auto" : "60px");
props.options.forEach((item, index) => {
  item.key = index.toString();
});
const themes = ref({
  backgroundColor:
    typeof props.theme == "string"
      ? props.theme == "black"
        ? "#20222a"
        : "#fff"
      : props.theme.bgColor,
  borderColor:
    typeof props.theme == "string"
      ? props.theme == "black"
        ? "#20222a"
        : "#f5f5f5"
      : props.theme.borderColor,
});
</script>

<style lang="scss" scoped>
.mzl-menu-default-box {
  width: 100%;
  height: v-bind(height);
  background: v-bind("themes.backgroundColor");
  color: #fff;
  border: 1px solid v-bind("themes.borderColor");
  box-sizing: border-box;
  .rightCoustom {
    float: right;
    padding-right: 20px;
    box-sizing: border-box;
    line-height: 60px;
  }
}
</style>