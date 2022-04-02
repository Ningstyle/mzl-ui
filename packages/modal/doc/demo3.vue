<!-- html -->
<template>
  <m-button @click="openModal">自定义</m-button>
  <m-modal v-model="modalShow" :closeOnModal="false">
    <template #header>
      <i class="m-icon-email" style="font-size: 17px"></i> 新的邮件
    </template>
    <template #content>
      <m-input
        v-model="value"
        clearable
        @clear="clear"
        placeholder="请输入"
      ></m-input>
      <p>输入的值为：{{ value }}</p>
    </template>
    <template #footer>
      <m-button type="primary" size="small" @click="send">发送</m-button>
    </template>
  </m-modal>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";
import Message from "../../message/index.js"; //此处为本地示例，请使用import {Message} from "mzl-ui";引入
const modalShow = ref(false);
const value = ref("");
const openModal = () => {
  modalShow.value = true;
};
const send = () => {
  if (value.value == "") {
    Message({ type: "warn", text: "请输入内容!" });
  } else {
    modalShow.value = false;
    setTimeout(() => {
      Message({ type: "success", text: "发送成功!" });
    }, 500);
  }
};
</script>