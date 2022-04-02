<!-- html -->
<template>
  <m-tree :options="treeOptions" :defaultOpenNodes="['0-2']"></m-tree>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  treeOptions: [
    {
      label: "一级",
      value: "",
      children: [
        {
          label: "一级1",
          value: "",
        },
        {
          label: "一级2",
          value: "",
          disabled: true,
        },
        {
          label: "一级3",
          value: "",
          children: [
            {
              label: "一级3-1",
              value: "",
            },
            {
              label: "一级3-2",
              value: "",
              disabled: true,
              children: [
                {
                  label: "一级3-2-1",
                  value: "",
                },
                {
                  label: "一级3-2-2",
                  value: "",
                },
                {
                  label: "一级3-2-3",
                  value: "",
                },
              ],
            },
            {
              label: "一级3-3",
              value: "",
            },
          ],
        },
      ],
    },
    {
      label: "二级",
      value: "",
      children: [
        {
          label: "二级1",
          value: "",
        },
        {
          label: "二级2",
          value: "",
        },
        {
          label: "二级3",
          value: "",
          children: [
            {
              label: "二级3-1",
              value: "",
              children: [
                {
                  label: "二级3-1-1",
                  value: "",
                },
                {
                  label: "二级3-1-2",
                  value: "",
                },
                {
                  label: "二级3-1-3",
                  value: "",
                },
              ],
            },
            {
              label: "二级3-2",
              value: "",
            },
            {
              label: "二级3-3",
              value: "",
            },
          ],
        },
      ],
    },
    {
      label: "三级",
      value: "",
      children: [
        {
          label: "三级1",
          value: "",
        },
        {
          label: "三级2",
          value: "",
        },
        {
          label: "三级3",
          value: "",
          children: [
            {
              label: "三级3-1",
              value: "",
            },
            {
              label: "三级3-2",
              value: "",
            },
            {
              label: "三级3-3",
              value: "",
            },
          ],
        },
      ],
    },
  ],
});
const { treeOptions } = state;
</script>