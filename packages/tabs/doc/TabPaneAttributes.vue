<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from "vue";
const state = reactive({
  options:{
   fileds:[
      {field:'attr',title:'参数',align:'center'},
      {field:'type',title:'类型',align:'center'},
      {field:'red',title:'说明',align:'center',width:'350px'},
      {field:'sel',title:'可选值',align:'center'},
      {field:'def',title:'默认值',align:'center'}
    ],
    datas:[
      {attr:'name',type:'Srting',red:'选项卡name',sel:'——',def:"——"},
      {attr:'label',type:'string/h（）渲染函数',red:'选项卡显示的标题，可使用h()渲染函数的内容自定义标题',sel:'——',def:"——"},
      {attr:'icon',type:'string',red:'选项卡的图标		',sel:'——',def:"——"},
      {attr:'disabled',type:'Boolean',red:'禁用选项卡',sel:'——',def:"false"},
      {attr:'closable',type:'Boolean',red:'是否可以关闭	',sel:'——',def:"false"},
      {attr:'lazy',type:'Boolean',red:'是否延迟渲染	',sel:'——',def:"false"},
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped>

</style>