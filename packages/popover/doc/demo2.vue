<!-- html -->
<template>
  <m-popover
    trigger="click"
    placement="right"
    width="600"
    @after-enter="AfterEneter"
  >
    <div style="width:800px">
      <m-table :options="options" size="default">
        <template #head-job="item">
          <m-dropdown
            :title="item.scope.title"
            :options="dorpoptions1"
            @change="dropchange1"
            trigger="hover"
            size="mini"
          ></m-dropdown>
        </template>
        <template #id="item">
          <div>{{ item.scope.row.id }}</div>
        </template>
        <template #action="item">
          <m-button
            type="text"
            leftIcon="m-icon-edit"
            size="small"
            :disabled="item.scope.rowIndex % 2 == 0"
            >编辑</m-button
          >
          <m-button
            type="text"
            leftIcon="m-icon-ashbin"
            style="color: #ec3437"
            size="small"
            >删除</m-button
          >
        </template>
      </m-table>
    </div>
    <!--  -->
    <template #reference>
      <m-button size="medium">click激活</m-button>
    </template>
  </m-popover>
</template>

<!-- js -->
<script setup>
import { reactive, ref } from "vue";
const state = reactive({
  options: {
    fileds: [
      {
        field: "id",
        title: "ID",
        align: "center",
      },
      {
        field: "name",
        title: "姓名",
        align: "center",
      },
      {
        field: "job",
        title: "职业",
        align: "center",
      },
      {
        field: "address",
        title: "地址",
      },
      {
        field: "from",
        title: "籍贯",
      },
      {
        field: "action",
        title: "操作",
        width: "200px",
        align: "center",
      },
    ],
    datas: [
      {
        id: 10,
        name: "王小二",
        job: "放羊娃",
        address: "在那遥远的小山村",
        from: "民间流传故事",
      },
      {
        id: 13,
        name: "猪八戒",
        job: "徒弟",
        address: "高老庄",
        from: "西游记神话故事",
      },
      {
        id: 2,
        name: "刘老四",
        job: "农民",
        address: "可能在中国",
        from: "想象出来的",
      },
      {
        id: 11,
        name: "白骨精",
        job: "妖精",
        address: "西游记",
        from: "西游记神话故事",
      },
    ],
  },
  dorpoptions1: [
    { label: "放羊娃", icon: "m-icon-file" },
    { label: "徒弟", icon: "m-icon-keyboard-9" },
    { label: "农民", icon: "m-icon-link" },
    { label: "妖精", icon: "m-icon-file" },
  ],
});
const dropchange1 = (item, index) => {
  console.log(item, index);
};
const { dorpoptions1,options } = state;
</script>