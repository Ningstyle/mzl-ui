<!-- html -->
<template>
  <!-- html -->
  <div
    class="testBacktop"
    style="width: 100%; height: 400px; overflow-y: scroll"
  >
    <p>scroll</p>
  </div>

  <m-backtop target=".testBacktop"></m-backtop>
</template>

<!-- js -->
<script setup>
import { onMounted, ref } from "vue";
onMounted(() => {
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("p");
    p.innerText = "scroll";
    document.querySelector(".testBacktop").appendChild(p);
  }
});
</script>
<style lang="scss" scoped>
.testBacktop {
  width: 100%;
  height: 300px;
  overflow-y: scroll;
  border: 1px solid #f0f0f0;
  padding: 10px;
}
</style>