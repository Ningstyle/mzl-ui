<!-- html -->
<template>
  <m-button @click="openDrawer">基本使用</m-button>
  <m-drawer
    v-model="drawerShow"
    title="基本使用"
    @confirm="confirmFn"
    @cancel="cancelFn"
  >
    <template #content>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
      <div>这是内容区域...</div>
    </template>
  </m-drawer>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
import Message from "../../message/index.js"; //此处为本地示例，请使用import {Message} from "mzl-ui";引入
const drawerShow = ref(false);
const openDrawer = () => {
  drawerShow.value = true;
};
const confirmFn = () => {
  Message({ text: "确认事件" });
};
const cancelFn = () => {
  Message({ text: "取消事件" });
};
</script>