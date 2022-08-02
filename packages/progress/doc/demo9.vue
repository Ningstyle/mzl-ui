<!-- html -->
<template>
<div class="mzl-style">
    <m-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="120"
      :circleHeight="10"
      currentStatus="SUCCESS"
      isShowText
    >
    </m-progress>
    <m-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="150"
      :circleHeight="10"
      currentStatus="OTHER"
      isShowText
    >
    </m-progress>
    <m-progress
      :percent="percent"
      progressType="dashboard"
      :circleSize="200"
      :circleHeight="10"
      currentStatus="FAIL"
      isShowText
    >
    </m-progress>
</div>
</template>
<script setup>
  import {ref} from 'vue'
  const percent = ref(0)
  setTimeout(()=>{
    percent.value += 55
  },500)
</script>
<style scoped>
.mzl-style{
  display: flex;
  flex-wrap: wrap;
}
.mzl-progress {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>