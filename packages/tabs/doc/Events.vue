<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options:{
   fileds:[
      {field:'name',title:'事件名',align:'center'},
      {field:'red',title:'说明',align:'center',width:'350px'},
      {field:'attr',title:'回调参数',align:'center'},
      {field:'exm',title:'示例',align:'center',width:'350px'}
    ],
    datas:[
      {name:"onTabRemove",red:'点击 tab 移除按钮后触发',attr:'(tabName: String)',exm:'onTabRemove(tabName){}'},
      {name:"onTabclick",red:'选项卡被点击时触发	',attr:'(tabName: String)',exm:'onTabclick(tabName){}'},
      {name:"onTabAdd",red:'点击 tabs 的新增按钮后触发',attr:'——',exm:'onTabAdd(){}'},
      {name:"change",red:'用户获得焦点并按下回车时触发',attr:'(event: Event)',exm:'change=(e)=>{console.log(e.target.value)}'},
      {name:"onChangeTab",red:'切换选项卡时触发',attr:'——',exm:'——'},
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped>

</style>