<!-- html -->
<template>
  <m-dropdown title="下拉菜单" :options="dorpoptions"></m-dropdown>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  dorpoptions: [
    { label: "菜单1", icon: "m-icon-file" },
    { label: "菜单2", icon: "m-icon-keyboard-9" },
    { label: "菜单3", icon: "m-icon-link" },
    { label: "菜单4", icon: "m-icon-file" },
  ],
});
const { dorpoptions } = state;
</script>