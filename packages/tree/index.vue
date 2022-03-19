<template>
  <div :class="['mzl-tree-content-box',customClass]">
    <template v-for="(item,index) in options" :key="index">
      <tree-item  :items="item" :data-key="index" :icon="icon" :defaultOpenNodes="defaultOpenNodes" @nodeClick="nClick($event)" :options="options" :index="0" @change="changeKey($event)" :tabIndexs="tabKey" @selectClick="emit('selectClick',$event)" :multiple="multiple" :defaultSelectNodes="defaultSelectNodes"></tree-item>
    </template>
  </div>
</template>
<script>
export default{
  name:"mTree"
}
</script>
<script setup>
import {ref} from 'vue'
import treeItem from './treeItem.vue'
const emit = defineEmits(['nodeClick','selectClick'])
const props = defineProps({
  options:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  icon:String,
  defaultOpenNodes:Array,
  customClass:String,
  multiple:Boolean,
  defaultSelectNodes:{
    type:Array,
    default:()=>[]
  }
})

props.options.forEach((item,index)=>{
  item.key = index.toString()
})
const tabKey = ref('')
const changeKey = (e) =>{
  tabKey.value = e
}
const nClick = (item) => {
  emit('nodeClick',item)
}
</script>