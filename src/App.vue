<template>
  <headerBlockVue/>
  <router-view></router-view>
</template>
<script setup>
import headerBlockVue from "./components/header-block.vue";
</script>
<style lang="scss">
@import './styles/style.scss';
/* html,body{
  width:100%;
  height:100vh;
  margin:0;
  padding:0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  background-color: #fff;
  font-feature-settings: "tnum";
}
*/
#app{
  overflow: hidden;
} 
</style>
