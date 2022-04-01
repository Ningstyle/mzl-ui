<!-- html -->
<template>
  <m-backtop target=".mzluirightView" :bottom="100">
    <span class="backtop">
      <i class="m-icon-direction-up"></i>
    </span>
  </m-backtop>
</template>

<style lang="scss" scoped>
.backtop {
  width: 45px;
  height: 45px;
  display: inline-block;
  border-radius: 50%;
  line-height: 45px;
  text-align: center;
  background: #f57b29;
  i {
    font-size: 20px;
    color: #fff;
  }
}
</style>