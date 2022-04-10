<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({
  options: {
    fileds: [
      { field: 'name', title: '事件名', align: 'center' },
      { field: 'red', title: '说明', align: 'center', width: '350px' },
      { field: 'attr', title: '回调参数', align: 'center' },
      { field: 'exm', title: '示例', align: 'center', width: '350px' }
    ],
    datas: [
      {
        name: 'change',
        red: '颜色改变事件',
        attr: '(value: colorString)',
        exm: 'change = (color) =>{console.log(color)}'
      }
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped></style>
