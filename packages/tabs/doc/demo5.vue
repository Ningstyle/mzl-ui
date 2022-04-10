<!-- html -->
<template>
  <m-tabs
    v-model="activeName"
    @onTabRemove="handleRemove"
    @onTabAdd="handleAdd"
    addable
    closable
  >
    <m-tab-pane
      v-for="tab in TabList"
      :key="tab.name"
      :label="tab.title"
      :name="tab.name"
    >
      {{ tab.content }}
    </m-tab-pane>
  </m-tabs>
</template>

<!-- js -->
<script setup>
import { ref } from "vue";

const activeName = ref("1");
const TabList = ref([
  {
    title: "Tab 1",
    name: "1",
    content: "Tab 1 content",
  },
  {
    title: "Tab 2",
    name: "2",
    content: "Tab 2 content",
  },
  {
    title: "Tab 3",
    name: "3",
    content: "Tab 3 content",
  },
]);

const handleAdd = () => {
  let length = TabList.value.length;
  const newTabName = `${length + 2}`;
  TabList.value.push({
    title: "new tab",
    name: newTabName,
    content: "New Tab content",
  });
  activeName.value = newTabName;
};

const handleRemove = (tabName) => {
  const tabs = TabList.value;
  let activeTab = activeName.value;
  if (activeTab === tabName) {
    tabs.forEach((tab, index) => {
      if (tab.name === tabName) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeTab = nextTab.name;
        }
      }
    });
  }
  activeName.value = activeTab;
  TabList.value = tabs.filter((tab) => tab.name !== tabName);
};
</script>