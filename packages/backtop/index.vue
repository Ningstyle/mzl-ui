<template>
  <transition name="fade">
    <div :class="['mzl-backtop-box',customClass]" v-if="backtopShow" @click="backtop">
      <slot v-if="slot['default']"></slot>
      <div class="mzl-backtop-default-box" v-else>
        <span class="default-backtop-icon">
          <i class="m-icon-arrow-up-filling"></i>
        </span>
      </div>
    </div>
  </transition>
</template>
<script>
export default{
  name:"mBacktop"
}
</script>
<script setup>
import { onMounted,ref,onBeforeUnmount,useSlots } from 'vue'
const props = defineProps({
  target:{
    type:String,
    default:"body"
  },
  visibilityHeight:{
    type:Number,
    default:240
  },
  right:{
    type:Number,
    default:20
  },
  bottom:{
    type:Number,
    default:40
  },
  customClass:String
})
const backtopShow = ref(false)
const scrollTop = ref(0)
const timer = ref(null)
const slot = useSlots()
const right = ref(props.right+'px')
const bottom = ref(props.bottom+'px')
const backtop = () =>{
  clearInterval(timer.value)
  timer.value = setInterval(()=>{
    scrollTop.value-=30
    if(props.target=='body'){
      if(typeof document !== 'undefined'){
        document.body.scrollTop =scrollTop.value = document.documentElement.scrollTop =scrollTop.value
      }
    }else{
      if(typeof document !== 'undefined'){
        document.querySelector(props.target).scrollTop=scrollTop.value
      }
    }
    if(scrollTop.value<=0){
      scrollTop.value=0
      clearInterval(timer.value)
    }
  })
}
const handleScroll = () =>{
  if(typeof document !== 'undefined'){
    scrollTop.value = props.target=='body'?(document.body.scrollTop || document.documentElement.scrollTop):document.querySelector(props.target).scrollTop
  }
  if(scrollTop.value>=props.visibilityHeight){
    backtopShow.value = true
  }else{
    backtopShow.value = false
  }
}
onMounted(()=>{
  if(props.target=='body'){
    if(typeof window !== 'undefined'){
      window.addEventListener("scroll", handleScroll, false);
    }
  }else{
    if(typeof document !== 'undefined'){
      document.querySelector(props.target).addEventListener("scroll", handleScroll, false);
    }
  }
})
onBeforeUnmount(()=>{
  if(props.target=='body'){
    if(typeof window !== 'undefined'){
      window.removeEventListener("scroll",handleScroll);
    }
  }else{
    if(typeof document !== 'undefined'){
      document.querySelector(props.target).removeEventListener("scroll",handleScroll);
    }
    
  }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.mzl-backtop-box,.mzl-backtop-default-box{
  width: auto;
  overflow: auto;
  position: fixed;
  bottom:v-bind(bottom);
  right:v-bind(right);
  z-index: 9999999;
  cursor: pointer;
  overflow: hidden;
  .default-backtop-icon{
    display: inline-block;
    width:40px;
    height:40px;
    background: #0e80eb;
    border-radius: 4px;
    text-align: center;
    line-height:40px;
    i{
      font-size: 20px;
      color:#fff
    }
  }
}
</style>