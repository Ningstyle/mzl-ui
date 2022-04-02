<!-- html -->
<template>
  <m-textarea
    v-model="textareaVal"
    placeholder="请输入内容"
    @input="textareaInpt"
  ></m-textarea>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
const textareaVal = ref("");
const textareaInpt = (e) => {
  console.log(e);
};
</script>