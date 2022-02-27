<template>
  <Transition name="slide-fade">
    <div :class="['mzl-message',customClass]" :style="style[type]" v-show='isShow'>
      <i :class="[style[type].icon]"></i>
      <span class="text">{{text}}</span>
    </div>
  </Transition>
</template>
<script setup>
import { onMounted, ref,reactive } from 'vue'
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'info'
  },
  icon:String,
  textColor:String,
  bgColor:String,
  customClass:String
})
const state = reactive({
  style:{
    info: {
      icon: props.icon||'m-icon-prompt-filling',
      color: '#505050',
      backgroundColor: 'rgb(229 227 224)',
      borderColor: 'rgb(229 227 224)'
    },
    warn: {
      icon: props.icon||'m-icon-warning',
      color: '#f57b29',
      backgroundColor: 'rgb(243 233 220)',
      borderColor: 'rgb(243 233 220)'
    },
    error: {
      icon: props.icon||'m-icon-delete-filling',
      color: '#ec3437',
      backgroundColor: 'rgb(251 228 228)',
      borderColor: 'rgb(251 228 228)'
    },
    success: {
      icon: props.icon||'m-icon-success',
      color: '#09b63d',
      backgroundColor: 'rgb(223 243 212)',
      borderColor: 'rgb(223 243 212)'
    },
    custom: {
      icon: props.icon,
      color: props.textColor,
      backgroundColor: props.bgColor,
      borderColor: props.bgColor
    }
  }
})
const isShow = ref(false)
const {style} = state
onMounted(() => {
  isShow.value = true
})
</script>
<style scoped lang="scss">

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translate3d(0, -75px, 0);
}
.mzl-message {
  width: 300px;
  height: auto;
  min-height: 45px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  padding: 5px 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  display: flex;
  align-items: center;
  i {
    margin-right: 8px;
    vertical-align: middle;
    font-size: 16px;
    height: 100%;
    display: inline-block;
    float: left
  }
  .text {
    vertical-align: middle;
    font-size: 14px;
    line-height: 22px;
  }
}
</style>