<template>
  <headerBlockVue />
  <router-view></router-view>
</template>
<script setup>
import headerBlockVue from "./components/header-block.vue";
</script>
<style lang="scss">
@import "./styles/style.scss";
#app {
  overflow: hidden;
}
</style>
