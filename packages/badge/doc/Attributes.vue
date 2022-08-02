<template>
    <m-table :options="options"></m-table>
</template>

<script setup>
import { reactive, toRef } from 'vue'
const state = reactive({
    options: {
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
                field: 'def',
                title: '默认值',
                align: 'center'
            }
        ],
        datas: [
            { attr: 'value', type: 'string | number', red: '显示值', def: "''" },
            { attr: 'max', type: 'string', red: '最大值，超过最大值会显示 {max}+。 只有当 value 是数字类型时才会工作', def: "99" },
            { attr: 'isDot', type: 'boolean', red: '是否显示小圆点', def: "false" },
            { attr: 'hidden', type: 'boolean', red: '是否隐藏 Badge', def: "false" },
            { attr: 'type', type: 'primary | success | danger | warning | info', red: '徽章类型', def: "'danger'" }
        ]
    }
})
const options = toRef(state, 'options') 
</script>