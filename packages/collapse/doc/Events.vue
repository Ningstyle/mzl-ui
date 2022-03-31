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
      {name:"focus",red:'input在获取焦点时触发',attr:'(event: Event)',exm:'focus=(e)=>{console.log(e.target.value)}'},
      {name:"blur",red:'input在失去焦点时触发',attr:'(event: Event)',exm:'blur=(e)=>{console.log(e.target.value)}'},
      {name:"input",red:'input值变化时触发',attr:'(value: string | number)',exm:'input=(e)=>{console.log(e)}'},
      {name:"change",red:'用户获得焦点并按下回车时触发',attr:'(event: Event)',exm:'change=(e)=>{console.log(e.target.value)}'},
      {name:"clear",red:'可清空的input点击清空按钮时触发',attr:'——',exm:'——'},
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped>

</style>