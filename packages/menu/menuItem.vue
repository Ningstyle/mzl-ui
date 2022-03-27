<template>
  <li @click="toggler(items)">
      <div class="mzl-menu-item-title-box">
        <span class="menu-icon">
          <i class="m-icon-modular"></i>
        </span>
        <span class="menu-title">{{items.title}}----{{index}}</span>
        <span class="menu-icon-arrow" v-if="items.children&&items.children.length">
          <i class="m-icon-arrow-down-bold"></i>
        </span>
      </div>
      <div class="mzl-menu-item-position-box" v-show="items.isOpen" v-if="items.children&&items.children.length">
        <template v-for="(item,i) in items.children" :key="i">
            <menu-item :items="item" :index="i"></menu-item>
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
console.log(props.items);
const toggler = (item) => {
  item.isOpen = true
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
      left:0;
      // top:62px;
      background: #20222a;
    }
  }
</style>