<!-- html -->
<template>
  <m-switch v-model="switchVal" closeText="关闭" activeText="开启"></m-switch>
  <m-switch
    v-model="switchVal1"
    closeText="关闭"
    activeText="开启"
    textAlign="right"
  ></m-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(true);
const switchVal1 = ref(true);
</script>