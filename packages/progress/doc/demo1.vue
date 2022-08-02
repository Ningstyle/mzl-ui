<!-- html -->
<template>
    <m-progress :percent="20"></m-progress>
    <m-progress :percent="40" bgColor="#505050"></m-progress>
    <m-progress :percent="60" currentStatus="OTHER"></m-progress>
    <m-progress :percent="90" currentStatus="FAIL"></m-progress>
    <m-progress :percent="100" currentStatus="SUCCESS"></m-progress>
</template>
<style scoped>
.mzl-progress {
  margin-bottom: 10px;
}
</style>