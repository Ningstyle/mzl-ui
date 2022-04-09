<!-- html -->
<template>
  <m-space>
    <m-button @click="openMsg">消息提示</m-button>
    <m-button @click="openVNodeMsg">消息提示(VNode)</m-button>
  </m-space>
</template>

<!-- js -->
<script setup>
import Message from '../index.js' //此处为本地示例，请使用import {Message} from "mzl-ui";引入
import { h } from 'vue'
const openMsg = () => {
  Message({
    text: '默认消息提示'
  })
}

const openVNodeMsg = () => {
  Message({
    text: h('p', null, '默认消息提示(VNode)')
  })
}
</script>
