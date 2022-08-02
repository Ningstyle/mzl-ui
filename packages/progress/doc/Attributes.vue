<template>
  <m-table :options="options"></m-table>
</template>

<script setup>
import {reactive} from 'vue'
const state = reactive({
  options:{
    fileds:[
      {
        field:'attr',
        title:'参数',
        align:'center'
      },
      {
        field:'type',
        title:'类型',
        align:'center'
      },
      {
        field:'red',
        title:'说明',
        align:'center',
        width:'350px'
      },
      {
        field:'sel',
        title:'可选值',
        align:'center'
      },
      {
        field:'def',
        title:'默认值',
        align:'center'
      }
    ],
    datas:[
      {attr:'percent',type:'Number',red:'进度条百分比',sel:'0-100',def:"0"},
      {attr:'progressType',type:'String',red:'进度条类型，注意：dashboard大小由circle类型配置',sel:'circle / line / dashboard',def:"line"},
      {attr:'progressHeight',type:'Number',red:'line进度条高度',sel:'——',def:"8"},
      {attr:'circleSize',type:'Number',red:'circle进度条大小',sel:'——',def:"200"},
      {attr:'circleHeight',type:'Number',red:'circle进度条的高度。注意：最大为(circleSize/2)',sel:'——',def:"8"},
      {attr:'isShowText',type:'Boolean',red:'是否展示进度条文字内容',sel:'true / false',def:"false"},
      {attr:'currentStatus',type:'String',red:'进度条当前状态',sel:'SUCCESS / FAIL / OTHER',def:"——"},
      {attr:'bgColor',type:'String',red:'进度条背景颜色',sel:'——',def:"——"},
      {attr:'progressSpeed',type:'Number',red:'进度条动画速度',sel:'——',def:"3"},
      {attr:'isAnimation',type:'Boolean',red:'是否展示为动画进度条',sel:'true / false',def:"false"},
      {attr:'roundCorner',type:'Boolean',red:'进度条是否展示为圆角',sel:'true / false',def:"false"},
      {attr:'setPercentText',type:'Function',red:'自定义进度条文字内容',sel:'——',def:"——"},
    ]
  }
})
const {options} = state
</script>

<style lang="scss" scoped>

</style>