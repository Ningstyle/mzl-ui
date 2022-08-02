<!-- html -->
<template>
<div class="mzl-style">
    <m-progress
      :percent="20"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
    >
     <m-button type="primary" size="mini" leftIcon="m-icon-prompt" round></m-button>
    </m-progress>
    <m-progress
      :percent="40"
      bgColor="#505050"
      progressType="circle"
      :circleSize="120"
      isShowText
      roundCorner
    >progress</m-progress>
    <m-progress
      :percent="100"
      currentStatus="SUCCESS"
      progressType="circle"
      :circleSize="120"
      :circleHeight="10"
      isShowText
    >
    FULL
    </m-progress>
</div>
</template>
<style scoped>
.mzl-style{
  display: flex;
  flex-wrap: wrap;
}
.mzl-progress {
  margin-bottom: 10px;
  margin-right: 10px;
}
.mzl-button-round {
  border-radius: 50%;
}
.mzl-button-mini {
  padding: 4px;
}
</style>