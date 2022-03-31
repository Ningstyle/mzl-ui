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
      {attr:'type',type:'String',red:'按钮类型',sel:'default / primary / success / danger / warning / dashed / text / custom',def:"default"},
      {attr:'size',type:'String',red:'按钮尺寸',sel:'default / medium / small / mini',def:"default"},
      {attr:'round',type:'Boolean',red:'是否为圆角类型的按钮',sel:'true / false',def:"false"},
      {attr:'disabled',type:'Boolean',red:'是否为禁用状态的按钮',sel:'true / false ',def:"false"},
      {attr:'customColor',type:'String',red:'type 为 custom 时自定义按钮的颜色色值。需要注意的是type为 default、dashed、text 类型的按钮不支持',sel:'——',def:"——"},
      {attr:'loading',type:'Boolean',red:'是否为加载状态的按钮，加载状态的icon仅支持这六个(m-icon-loading1 / m-icon-loading2 / m-icon-loading3 / m-icon-loading4 / m-icon-loading5 / m-icon-loading6)，通过 leftIcon / rightIcon 参数配置并确定位置',sel:'true / false ',def:"false"},
      {attr:'leftIcon',type:'String',red:'决定按钮类型为图标按钮，并且icon展示在左侧',sel:'参考图标库',def:"——"},
      {attr:'rightIcon',type:'String',red:'决定按钮类型为图标按钮，并且icon展示在右侧',sel:'参考图标库',def:"——"}
    ]
  }
})
const {options} = state
</script>

<style lang="scss" scoped>

</style>