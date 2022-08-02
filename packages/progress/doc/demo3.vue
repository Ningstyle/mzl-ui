<!-- html -->
<template>
    <m-progress :percent="20" isShowText roundCorner></m-progress>
    <m-progress :percent="40" :bgColor="customColorMethod" isShowText roundCorner></m-progress>
    <m-progress :percent="60" bgColor="#e6a23c" isShowText roundCorner></m-progress>
    <m-progress :percent="90" bgColor="#5cb87a" isShowText roundCorner></m-progress>
    <m-progress :percent="100" bgColor="#6f7ad3" isShowText roundCorner></m-progress>
</template>
<!-- js -->
<script setup>
const customColorMethod = (percent) => {
  if (percent < 70) {
    return '#909399'
  }
  return '#67c23a'
}
</script>
<style scoped>
.mzl-progress {
  margin-bottom: 10px;
}
</style>