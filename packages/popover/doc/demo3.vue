<!-- html -->
<template>
  <m-popover v-model="visible" trigger="manual" placement="top-start">
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div style="text-align: right; margin: 0">
      <m-button size="mini" type="text" @click="visible = false">取消</m-button>
      <m-button type="primary" size="mini" @click="visible = false"
        >确定</m-button
      >
    </div>
    <template #reference>
      <m-button size="medium" @click="handler">删除</m-button>
    </template>
  </m-popover>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, onMounted, computed } from "vue";

const visible = ref(false);
function handler() {
  visible.value = !visible.value;
  console.log(visible.value);
}
</script>
