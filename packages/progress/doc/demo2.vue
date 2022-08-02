<!-- html -->
<template>
    <m-progress :progressHeight="26" :percent="20" isShowText></m-progress>
    <m-progress :progressHeight="26" :percent="40" bgColor="#505050" isShowText></m-progress>
    <m-progress :progressHeight="26" :percent="60" currentStatus="OTHER" isShowText></m-progress>
    <m-progress :progressHeight="26" :percent="90" currentStatus="FAIL" isShowText></m-progress>
    <m-progress :progressHeight="26" :percent="100" currentStatus="SUCCESS" isShowText></m-progress>
</template>
<style scoped>
.mzl-progress {
  margin-bottom: 10px;
}
</style>