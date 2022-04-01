<!-- html -->
<template>
  <m-switch
    v-model="switchVal"
    :showTipsText="true"
    closeColor="#ec3437"
    activeColor="#09b63d"
  ></m-switch>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const switchVal = ref(false);
</script>