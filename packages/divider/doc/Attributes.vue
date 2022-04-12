<template>
    <m-table :options="state"></m-table>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({
        fileds: [
            {
                field: 'attr',
                title: '属性',
                align: 'center'
            },
            {
                field: 'type',
                title: '类型',
                align: 'center'
            },
            {
                field: 'red',
                title: '说明',
                align: 'center',
            },
            {
                field: 'field',
                title: '可选值',
                align: 'center'
            },
            {
                field: 'def',
                title: '默认值',
                align: 'center'
            }
        ],
        datas: [
            { attr: 'direction', type: 'string', red: '设置分割线方向', field: 'horizontal | vertical', def: "horizontal" },
            { attr: 'position', type: 'String', red: '设置分割线文案的位置', field: 'left | right | center', def: "left" },
            { attr: 'lineStyle', type: 'string', red: '设置分隔符样式', field: 'solid | dashed | dotted | groove', def: "solid" }
        ]
})
</script>