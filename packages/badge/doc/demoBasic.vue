<template>
  <m-space :size="[0, 60]">
    <m-badge :value="99" type="primary">
      <m-button>默认</m-button>
    </m-badge>
    <m-badge :value="100" type="success">
      <m-button>成功</m-button>
    </m-badge>
    <m-badge :value="10" type="warning">
      <m-button>警告</m-button>
    </m-badge>
    <m-badge :value="3" type="danger">
      <m-button>危险</m-button>
    </m-badge>
    <m-badge :value="3" type="info">
      <m-button>危险</m-button>
    </m-badge>
    <m-badge :value="50" isDot>
      <m-button>小红点</m-button>
    </m-badge>
  </m-space>
</template>