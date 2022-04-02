<!-- html -->
<template>
  <m-menu :options="menuOptions" theme="black" type="horizontal"></m-menu>
</template>

<!-- js -->
<script setup>
import { reactive } from "vue";
const state = reactive({
  menuOptions: [
    {
      title: "菜单1",
    },
    {
      title: "菜单2",
      children: [
        {
          title: "菜单2-1",
        },
        {
          title: "菜单2-2",
        },
        {
          title: "菜单2-3",
          children: [
            {
              title: "菜单2-3-1",
              children: [
                {
                  title: "菜单2-3-1-1",
                },
                {
                  title: "菜单2-3-1-2",
                },
              ],
            },
            {
              title: "菜单2-3-2",
            },
          ],
        },
      ],
    },
    {
      title: "菜单3",
      children: [
        {
          title: "菜单3-1",
        },
        {
          title: "菜单3-2",
        },
      ],
    },
    {
      title: "菜单4",
      children: [
        {
          title: "菜单4-1",
          children: [
            {
              title: "菜单4-1-1",
            },
            {
              title: "菜单4-1-2",
            },
          ],
        },
      ],
    },
    {
      title: "菜单5",
      children: [
        {
          title: "菜单3-1",
        },
      ],
    },
    {
      title: "菜单6",
    },
  ],
});
const { menuOptions } = state;
</script>