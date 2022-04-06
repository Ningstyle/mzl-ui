<!-- html -->
<template>
  <m-tabs>
    <m-tab-pane :label="label" name="one"> 
         选项卡一 
    </m-tab-pane>
    <m-tab-pane label="选项卡二" name="tow"> 选项卡二 </m-tab-pane>
    <m-tab-pane label="选项卡三" name="three"> 选项卡三 </m-tab-pane>
  </m-tabs>
</template>


<!-- js -->
<script setup>
  import {h} from "vue"
  const label=h("span",{},[
      h("i",{class:"m-icon-folder-close"}),
      "选项卡一"
    ])
</script>