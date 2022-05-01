<!-- html -->
<template>
    <m-progress :percent="20" :setPercentText="textMethod" roundCorner></m-progress>
    <m-progress :percent="40" bgColor="#505050" roundCorner>百分之40</m-progress>
    <m-progress :percent="60" currentStatus="OTHER" roundCorner><i class="m-icon-arrow-double-right"></i></m-progress>
    <m-progress :percent="90" :setPercentText="textMethod" currentStatus="FAIL" roundCorner></m-progress>
    <m-progress :percent="100" progressHeight="20" currentStatus="SUCCESS" roundCorner>
      <m-button type="success" size="mini" round>完成</m-button>
    </m-progress>
</template>
<!-- js -->
<script setup>
const textMethod = (percent) => {
  if (percent < 70) {
    return 'ing'
  }
  return 'fail'
}
</script>
<style scoped>
.mzl-progress {
  margin-bottom: 10px;
}
.mzl-button-mini {
  padding: 3px;
  font-size: 12px;
}
</style>