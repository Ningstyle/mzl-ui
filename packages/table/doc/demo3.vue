<!-- html -->
<template>
  <m-table :options="options">
    <!-- 自定标表头job(职业)的插槽内容，展示为下拉菜单 -->
    <template #head-job="item">
      <m-dropdown :title="item.scope.title" :options="dorpoptions" @change="dropchange" size="mini" ></m-dropdown>
    </template>
    <!-- 自定义id列，插槽名为id，并接受item作为行数据 -->
    <template #id="item">
      <div style="color: #008dff">{{ item.scope.row.id }}</div>
    </template>
    <!-- 自定义操作列，插槽名为action，并接受item作为行数据 (操作类的列固定插槽名为action)-->
    <template #action="item">
      <m-button type="text" leftIcon="m-icon-edit" size="small" :disabled="item.scope.rowIndex % 2 == 0" >编辑</m-button >
      <m-button type="text" leftIcon="m-icon-ashbin" style="color: #ec3437" size="small" >删除</m-button >
    </template>
  </m-table>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  options:{
    fileds:[
      {field:'id',title:'ID',align:'center'},
      {field:'name',title:'姓名',align:'center'},
      {field:'job',title:'职业',align:'center'},
      {field:'address',title:'地址',align:'center'},
      {field:'from',title:'籍贯',align:'center'},
      {field:'action',title:'操作',align:'center'}
    ],
    datas:[
      {id:10,name:'王小二',job:'放羊娃',address:'在那遥远的小山村',from:"民间流传故事"},
      {id:13,name:'猪八戒',job:'徒弟',address:'高老庄',from:"西游记神话故事"},
      {id:2,name:'刘老四',job:'农民',address:'可能在中国',from:"想象出来的"},
      {id:11,name:'白骨精',job:'妖精',address:'西游记',from:"西游记神话故事"},
    ]
  },
  dorpoptions: [
    { label: "放羊娃", icon: "m-icon-file" },
    { label: "徒弟", icon: "m-icon-keyboard-9" },
    { label: "农民", icon: "m-icon-link" },
    { label: "妖精", icon: "m-icon-file" },
  ],
});
const dropchange = (item, index) => {
  console.log(item, index);
};
const { options, dorpoptions } = state;
</script>