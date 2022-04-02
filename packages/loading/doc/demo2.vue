<!-- html -->
<template>
  <m-button @click="openLoading">开始加载</m-button>
</template>

<!-- js -->
<script setup>
import { getCurrentInstance } from "vue";
import Loading from "../index.js"; //此处为本地示例，请使用import { Loading } from "mzl-ui";
const instance = getCurrentInstance();
const openLoading = () => {
  instance.proxy.$Loading.show();
  setTimeout(() => {
    instance.proxy.$Loading.hide();
  }, 5000);
};
</script>