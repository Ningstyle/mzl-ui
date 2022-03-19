<template>
  <div :class="['mzl-tree-item-box']">
    <li>
       <!-- :style="{'padding-left':index*15+'px'}" -->
      <div :class="['mzl-tree-lable-box',{'label-active':tabIndexs === items.key,'mzl-tree-lable-disabled':items.disabled}]" @click.stop.prevent="toggle(items)" :data-key="dataKey" :style="{'padding-left':index*15+'px'}">
        <span :class="[{rotate:icon!='m-icon-arrow-right-filling'?false:items.isOpen},'mzl-tree-lable-span']"><i :class="[{'m-icon-arrow-right-filling':items.children&&items.children.length}]"></i></span>
        <span :class="['mzl-tree-label-select-span',{'mzl-tree-label-select-span-active':items.isSelected,'mzl-tree-label-select-span-active-1':items.semiSelected}]" @click.stop="selectClick(items,index)" v-if="multiple"></span>
        <span class="mzl-tree-label">{{items.label}}</span>
      </div>
      <transition name="slide-fade">
        <div class="mzl-tree-ul-box" v-show="items.isOpen" v-if="items.children&&items.children.length">
          <tree-item v-for="(v,i) in items.children" :key="i" :items="v" :data-key="dataKey+'-'+i" :defaultOpenNodes="defaultOpenNodes" :icon="icon" @nodeClick="outClick($event,items)" :options="options" :index="index+1" :tabIndexs="tabIndexs" @selectClick="emit('selectClick',$event)" :multiple="multiple" :defaultSelectNodes="defaultSelectNodes"></tree-item>
        </div>
      </transition>
    </li>
  </div>
</template>

<script setup>
import {computed,onMounted,ref} from 'vue'
const emit = defineEmits(['nodeClick','change','selectClick'])
const props = defineProps({
  items:{
    type:Object,
    default:()=>{}
  },
  dataKey:String|Number,
  index:Number,
  icon:{
    type:String,
    default:"m-icon-arrow-right-filling"
  },
  defaultOpenNodes:{
    type:Array,
    default:()=>[]
  },
  options:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  tabIndexs:String|Number,
  multiple:Boolean,
  defaultSelectNodes:{
    type:Array,
    default:()=>[]
  }
})
props.items.key=props.dataKey
const height = ref(26+'px')
const selectedLen = ref(0)
const selectList = ref([])
var recursiveFunction = function(items){
  var str = ''
  const getStr = function(items){
    if(items.isOpen){
      items.children.forEach((v,i)=>{
        if(v.children){
          getStr(v)
          str += v.label + ";"
        }else {
          str += v.label + ";"
        }
      })
    }
  }
  getStr(items)
  return str.split(';')
  
}
const isFolder = computed(()=>{
  return props.children.items && props.items.children.length;
})
const toggle = (item) => {
  if(!item.disabled){
    if (isFolder&&item.children&&item.children.length) {
      item.isOpen = !item.isOpen
      if(!item.isOpen){
        setTimeout(()=>{
          height.value = '26px'
        },100)
      }else{
        height.value = (recursiveFunction(item).length-1)*26+'px'
      }
    }
    emit('nodeClick',item)
    emit('change',item.key)
  }
}
const outClick = (item,e) => {
  emit('nodeClick',item)
  emit('change',item.key)
}
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
const setSelectted = (item,flag) => {
  item.forEach((v,i)=>{
    v.isSelected = flag
    if(v.children){
      setSelectted(v.children,flag)
    }
  })
}
let n = 0
const isParentSel = (item) => {
  item.forEach((v,i)=>{
    n+=1
    if(v.isSelected){
      selectedLen.value+=1
    }
    if(v.children){
      isParentSel(v.children)
    }
  })
}
const getSameLevelChile = (item,item1)=>{
  let n1 =0;
  item.children.forEach((v,i)=>{
    if(v.isSelected){
      n1+=1
    }
  })
  isParentSel(item1.children,item1)
  
  if(n1==item.children.length){
    selectedLen.value+1
    item.isSelected = true
    item.semiSelected = false
  }else if(n1==0){
    item.isSelected = false
    item.semiSelected = false
  }else{
    item.semiSelected = true
  }
  if(selectedLen.value==n){
    item1.isSelected = true
    item1.semiSelected = false
  }else if(selectedLen.value==0){
    item1.isSelected = false
    item1.semiSelected = false
  }else{
    item1.isSelected = false
    item1.semiSelected = true
  }
  // getIsSelectNode(props.options)
}
const getIsSelectNode = (option) => {
  option.forEach((v,i)=>{
    if(v.isSelected){
      selectList.value.push(v)
    }
    if(v.children){
      getIsSelectNode(v.children)
    }
  })
  return selectList.value
}
const selectClick = (item,index) => {
  if(!item.disabled){
    item.isSelected = !item.isSelected
    item.semiSelected = false
    selectList.value = []
    let nodeItems = getParents(props.options,item.key)
    if(item.isSelected){
      if(item.children){
        setSelectted(item.children,true)
      }
      if(nodeItems.length>1){
        n = selectedLen.value = 0
        getSameLevelChile(nodeItems[1],nodeItems[nodeItems.length-1])
      }
    }else{
      if(item.children){
        setSelectted(item.children,false)
      }
      if(nodeItems.length>1){
        n = selectedLen.value = 0
        getSameLevelChile(nodeItems[1],nodeItems[nodeItems.length-1])
      }
    }
    emit('selectClick',item)
    emit('nodeClick',getIsSelectNode(props.options))
  }
}
const setSelect = (option,key) => {
  option.forEach((v,i)=>{
    if(v.key==key){
      v.isSelected = true
    }
    if(v.children){
      setSelect(v.children,key)
    }
  })
}
onMounted(()=>{
  if(props.defaultOpenNodes&&props.defaultOpenNodes.length){
    props.defaultOpenNodes.forEach((v,i)=>{
      getParents(props.options,v).forEach((item,index)=>{
        item.isOpen = true
        setTimeout(()=>{
          if(item.children){
            height.value = (recursiveFunction(item).length-1)*26+'px'
          }
        },100)
      })
    })
  }
  if(props.multiple){
    if(props.defaultSelectNodes&&props.defaultSelectNodes.length){
      props.defaultSelectNodes.forEach((v,i)=>{
        setSelect(props.options,v)
        getParents(props.options,v).forEach((item,index)=>{
          item.isOpen = true
          setTimeout(()=>{
            if(item.children){
              height.value = (recursiveFunction(item).length-1)*26+'px'
            }
          },100)
        })
        let nodeItems = getParents(props.options,v)
        getSameLevelChile(nodeItems[1],nodeItems[nodeItems.length-1])
      })
      
    }
  }
})

</script>

<style lang="scss" scoped>
.slide-fade-enter-active,.slide-fade-enter-from {
  height:v-bind(height);
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
  height:v-bind(height);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transition: all .3s ease;
  height:0px;
}
.mzl-tree-item-box{
  width:100%;
  height:auto;
  overflow:hidden;

  li{
    list-style: none;
    cursor: pointer;
    font-size:14px;
    color:#505050;
    transition: all .2s ease;
    line-height: 26px;
    overflow: hidden;
    user-select: none;
    position: relative;
    
    .mzl-tree-lable-box{
      width: 100%;
      height:100%;
      transition: all .1s ease;
      padding-left:8px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      &:hover{
        background:#f5f5f5 ;
      }
      span.mzl-tree-lable-span{
        width:14px;
        height:14px;
        display: inline-block;
        line-height: 14px;
        transition: all .2s ease;
        i{
          width:100%;
          height:100%;
          font-size:12px;
          display: inline-block;
          color:#969696;
          
        }
      }
      span.rotate{
        transform: rotate(90deg);
      }
      .mzl-tree-label-select-span{
        width:14px;
        height: 14px;
        border-radius: 2px;
        display: inline-block;
        border:1px solid #b9b9b9;
        margin: 0px 8px 0 4px;
        background: #fff;
        position: relative;
        font-size:14px;
        box-sizing: border-box;
        transition: transform 0.15s ease-in;
        &:hover{
          border-color:#0e80eb;
        }
        &::after{
          box-sizing: content-box;
          content: "";
          display: inline-block;
          width: 2.5px;
          height: 7px;
          transform: rotate(45deg);
          border-style: solid;
          border-color: #fff;
          border-width:   0 2px 2px 0 ;
          position: absolute;
          left:3.5px;
        }
      }
      .mzl-tree-label-select-span-active{
        border:1px solid #0e80eb;
        background: #0e80eb;
        &::after{
          border-color: #fff;
        }
      }
      .mzl-tree-label-select-span-active-1{
        width:14px;
        height: 14px;
        border-radius: 2px;
        display: inline-block;
        border:1px solid #0e80eb;
        margin: 0px 8px 0 4px;
        background: #0e80eb;
        position: relative;
        font-size:14px;
        box-sizing: border-box;
        transition: transform 0.2s ease-in;
        &::after{
          width:8.5px;
          height: 2px;
          transform: rotate(0deg);
          background: #fff;
          border:0;
          left:1.5px;
          top:5px;
        }
      }
    }
    .mzl-tree-lable-disabled{
      cursor: no-drop;
      .mzl-tree-label{
        color:#b4b6b9;
      }
      span.mzl-tree-lable-span{
        i{
          color:#b4b6b9;
        }
      }
      .mzl-tree-label-select-span{
        border: 1px solid #b9b9b9;
        background: #ebebeb;
        &:hover{
          border-color:#b9b9b9;
        }
        &::after{
          box-sizing: content-box;
          content: "";
          display: inline-block;
          width: 2.5px;
          height: 7px;
          transform: rotate(45deg);
          border-style: solid;
          border-color: #ebebeb;
          border-width:   0 2px 2px 0 ;
          position: absolute;
          left:3.5px;
        }
      }
      .mzl-tree-label-select-span-active{
        border:1px solid #b9b9b9;
        background: #ebebeb;
        &::after{
          border-color: #999999;
        }
      }
      .mzl-tree-label-select-span-active-1{
        width:14px;
        height: 14px;
        border-radius: 2px;
        display: inline-block;
        border:1px solid #b9b9b9;
        background: #ebebeb;
        margin: 0px 8px 0 4px;
        position: relative;
        font-size:14px;
        box-sizing: border-box;
        transition: transform 0.2s ease-in;
        &::after{
          width:8.5px;
          height: 2px;
          transform: rotate(0deg);
          background: #999999;
          border:0;
          left:1.5px;
          top:5px;
        }
      }
    }
    .label-active{
      background:#f5f5f5 ;
    }
    .mzl-tree-ul-box{
      margin:0;
      overflow: hidden;
      
      box-sizing: border-box;
      .mzl-tree-item-box{
        // padding-left:15px;
        // margin-left: -15px;
        // padding-left:15px;
        // display: flex;
        // align-items: center;
        // &:hover{
        //   background:#f5f5f5 ;
        // }
      }
    }
  }
}
</style>