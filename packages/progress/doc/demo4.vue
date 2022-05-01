<!-- html -->
<template>
    <m-progress :percent="20" roundCorner isAnimation :progressSpeed="5"></m-progress>
    <m-progress :percent="40" currentStatus="SUCCESS" roundCorner isAnimation></m-progress>
    <m-progress :percent="60" currentStatus="OTHER" roundCorner isAnimation :progressSpeed="2"></m-progress>
    <m-progress :percent="90" currentStatus="FAIL" roundCorner isAnimation :progressSpeed="1"></m-progress>
    <m-progress :percent="100" bgColor="#505050" roundCorner isAnimation :progressSpeed="6"></m-progress>
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