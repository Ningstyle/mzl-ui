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
      {attr:'text',type:'String',red:'加载文字',sel:'——',def:"加载中..."},
        {attr:'icon',type:'String',red:'加载状态图标',sel:'m-icon-loading1 / m-icon-loading2 / m-icon-loading3 / m-icon-loading4 / m-icon-loading5 / m-icon-loading6',def:"m-icon-loading1"},
        {attr:'img',type:'String',red:'自定义加载图片，设置后icon将失效',sel:'——',def:"——"},
        {attr:'target',type:'String',red:'绑定区域元素（class或id）,默认body不需要传',sel:'——',def:"body"},
        {attr:'textColor',type:'String',red:'文本颜色',sel:'——',def:"#ffffff"},
        {attr:'bgColor',type:'String',red:'背景颜色',sel:'——',def:"rgba(0, 0, 0, 0.6)"},
        {attr:'showIcon',type:'Boolean',red:'是否显示加载状态图标（icon有效）',sel:'true / false',def:"true"},
        {attr:'scrollLock',type:'Boolean',red:'加载中是否锁定滚动条',sel:'true / false',def:"true"}
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped>

</style>