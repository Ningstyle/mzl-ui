<template>
  <div class="mzl-tree-default">
    <li v-for="(item,index) in newOptions" :key="index" @click.stop="toggle($event,item,index)">
      {{item.label}}
      <transition name="slide-fade">
        <ul v-show="item.isOpen" v-if="item.children&&item.children.length">
          <m-tree
          :index="index"
          :options="item.children">
          </m-tree>
        </ul>
      </transition>
    </li>
  </div>
</template>
<script>
export default{
  name:"mTree"
}
</script>
<script setup>
import {computed,ref} from 'vue'
const props = defineProps({
  options:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  index:{
    type:Number,
    default:0
  }
})
const newOptions = ref(props.options)
const liRef = ref(null)
const height = ref(24+'px')
const isFolder = computed(()=>{
  return props.options && props.options.length;
})
const toggle = (e,item,index) => {
  item.isOpen = !item.isOpen
  console.log(e.target.querySelector('ul').clientHeight);
  if (isFolder&&item.children.length) {
    if(!item.isOpen){
      height.value = '24px'
    }else{
      
      height.value = (item.children.length+1)*18+'px'
    }
  }
}
console.log(props.options);
</script>

<style lang="scss" scoped>
.slide-fade-enter-active,.slide-fade-enter-from {
  height:v-bind(height);
  transition: all .2s ease;
}
// .slide-fade-enter-to{
//   height:auto;
// }
.slide-fade-leave-active {
  transition: all .2s ease;
  height:v-bind(height);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transition: all .2s ease;
  height:0px;
}
.mzl-tree-default{
  width:100%;
  height:auto;
  overflow:hidden;
  ul{
    margin:0;
    overflow: hidden;
  }
  li{
    list-style: none;
    cursor: pointer;
    font-size:14px;
    color:#505050;
    transition: all .2s ease;
    line-height: 24px;
  }
}
</style>