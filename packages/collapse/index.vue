<template>
  <div class="mzl-defalu-collapse-box" ref="collapseRef">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "mCollapse",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
const collapseRef = ref(null);

</script>

<style lang="scss" scoped>
.mzl-defalu-collapse-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-bottom: 1px solid #f0f0f0;
}
</style>