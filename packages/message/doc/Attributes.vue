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
        attr: 'text',
        type: 'String|VNode',
        red: '消息提示文本内容',
        sel: '——',
        def: '——'
      },
      {
        attr: 'type',
        type: 'String',
        red: '消息提示类型',
        sel: 'info / warn / error / success / custom',
        def: 'info'
      },
      {
        attr: 'icon',
        type: 'String',
        red: '消息提示Icon图标',
        sel: '参考图标库',
        def: '——'
      },
      {
        attr: 'timeout',
        type: 'Number',
        red: '消息提示框消失时间（单位：毫秒ms）',
        sel: '——',
        def: '2500'
      },
      {
        attr: 'textColor',
        type: 'String',
        red: '文本颜色，type 为 custom 时有效',
        sel: '——',
        def: '——'
      },
      {
        attr: 'bgColor',
        type: 'String',
        red: '背景颜色，type 为 custom 时有效',
        sel: '——',
        def: '——'
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
