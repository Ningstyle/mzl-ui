<template>
  <li @mouseover="toggler(items)" @mouseleave="hide(items)">
      <div class="mzl-menu-item-title-box">
        <span class="menu-icon">
          <i class="m-icon-modular"></i>
        </span>
        <span class="menu-title">{{items.title}}----{{index}}</span>
        <span class="menu-icon-arrow" v-if="items.children&&items.children.length">
          <i class="m-icon-arrow-down-bold"></i>
        </span>
      </div>
      <div class="mzl-menu-item-position-box" :style="{'left':index===0?'0':'242px','top':index==0?'60px':'0'}" v-show="items.isOpen" v-if="items.children&&items.children.length">
        <template v-for="(item,i) in items.children" :key="i">
            <menu-item :items="item" :index="index+i"></menu-item>
        </template>
      </div>
    </li>
</template>

<script setup>
const props = defineProps({
  items:{
    type:Object,
    default:()=>{}
  },
  index:Number
})
const getParents = (option, key) => {
  for (var i in option) {
    if (option[i].key == key) {
      return [option[i]];
    }
    if (option[i].children) {
      var ro = getParents(option[i].children, key);
      if (ro !== undefined) {
        return ro.concat(option[i]);
      }
    }
  }
}
console.log(props.items);
const toggler = (item) => {
  console.log(item)
  item.isOpen = true
}
const hide = (item) =>{
  setTimeout(() => {
    if(!item.isOpen){
      item.isOpen = false
    }
    
  }, 100);
}
</script>

<style lang="scss" scoped>
li{
    list-style: none;
    height:58px;
    line-height: 60px;
    // display: flex;
    float: left;
    padding:0 20px;
    cursor: pointer;
    border-bottom: 2px solid #20222a;
    transition: all .1s ease;
    font-size:14px;
    position: relative;
    &:hover{
      background: #000;
    }
    .mzl-menu-item-title-box{
      span.menu-icon{
        color:#fff;
        margin-right:8px;
      }
      span.menu-icon-arrow{
        margin-left:8px;
      }
    }
    .mzl-menu-item-position-box{
      width: 240px;
      position: absolute;
      top:60px;
      left:240px;
      // top:62px;
      background: #20222a;
    }
  }
</style>