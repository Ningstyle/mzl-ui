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
      {attr:'model-value / v-model',type:'Srting/number',red:'绑定数据，值为选项卡的name，若选项卡未设置name，则为选项卡的索引值',sel:'——',def:"'0'"},
      {attr:'activeName/v-model:activeName',type:'Srting/number',red:'同上',sel:'同上',def:"同上"},
      {attr:'type',type:'string',red:'选项卡类型	',sel:'line/card',def:"line"},
      {attr:'closable',type:'Boolean',red:'标签是否可关闭	',sel:'——',def:"false"},
      {attr:'addable',type:'Boolean',red:'标签是否可增加，设置后出现添加的按钮，需设置回调后，手动添加，回调请查看tabs事件',sel:'——',def:"false"},
      {attr:'before-leave',type:'Function(oldActiveName,activeName,)',red:'切换标签之前的钩子函数， 若返回 false 或者返回被 reject 的 Promise，则阻止切换。',sel:'——',def:"——"},
      
      {attr:'active_color',type:'string',red:'选中状态的字体颜色，以及指示器的颜色',sel:'——',def:"——"},
      {attr:'color',type:'Boolean',red:'未选中字体的颜色	',sel:'——',def:"——"},
     
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped>

</style>