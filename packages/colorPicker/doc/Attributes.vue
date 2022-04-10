<template>
  <m-table :options="options" size="small"></m-table>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({
  options: {
    fileds: [
      { field: 'attr', title: '参数', align: 'center' },
      { field: 'type', title: '类型', align: 'center' },
      { field: 'red', title: '说明', align: 'center', width: '350px' },
      { field: 'sel', title: '可选值', align: 'center' },
      { field: 'def', title: '默认值', align: 'center' }
    ],
    datas: [
      {
        attr: 'v-model',
        type: 'string',
        red: '绑定值',
        sel: '——',
        def: '——'
      },
      {
        attr: 'defaultColor',
        type: 'String',
        red: '默认显示的颜色',
        sel: '——',
        def: '——'
      },
      {
        attr: 'autoClose',
        type: 'Boolean',
        red: '选择完颜色之后是否自动关闭颜色面板',
        sel: '——',
        def: 'false'
      },
      {
        attr: 'customClass',
        type: 'String',
        red: '自定义组件类名',
        sel: '——',
        def: '——'
      }
    ]
  }
})
const { options } = state
</script>

<style lang="scss" scoped></style>
