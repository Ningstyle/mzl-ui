<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { ref,reactive } from "vue";
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
        {attr:'span',type:'number',red:'每行占用列数',sel:'——',def:"24"},
        {attr:'offset',type:'number',red:'偏移指定列数',sel:'——',def:"——"}
      ]
    }
  })
  const { options } = state
</script>

<style lang="scss" scoped>

</style>