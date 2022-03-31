<template>
  <div class="tabs">
    <!-- Nav -->
    <m-tabs-nav
      :panes="panes"
      :currentName="currentName"
      :active_color="props.active_color"
      :type="props.type"
      :color="props.color"
      :addable="props.addable"
      @onTabClick="handleTabClick"
    ></m-tabs-nav>
    <!-- 内容区 -->
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mTabs",
};
</script>

<script setup>
import mTabsNav from "./nav.vue";
import {
  reactive,
  ref,
  watch,
  onMounted,
  useSlots,
  provide,
  getCurrentInstance,
  onUpdated,
  Fragment,
} from "vue";
//父组件传入
const props = defineProps({
  // 当前选择的tab
  modelValue: {
    type: [String, Number],
    default: "",
  },
  activeName: {
    type: [String, Number],
    default: "",
  },
  //样式  card或者line
  type: {
    type: String,
    default: "line",
  },
  //选中时字体和指示器的颜色
  active_color: {
    type: String,
    default: "",
  },
  addable:{
     type:Boolean,
     default:false
  },
  
  closable:{
     type:Boolean,
     default:false
  },
  //未选中字体颜色
  color: {
    type: String,
    default: "",
  },
  beforeLeave:{
    type:Function,
     default:() => true,
  }
});
// 事件
const emits = defineEmits(["update:modelValue","update:activeName","onTabclick","onChangeTab","onTabAdd","onTabRemove"]);
//获取组件实例
const instance = getCurrentInstance();
//panes
const panes = ref([]);
//panemap
const paneStatesMap = {};
const currentName = ref(props.modelValue ||props.activeName || "0");

//给子组件传递tabs上下文
provide("tabsContext", {
  emits,
  currentName,
  props,
  updatePaneState: (pane) => (paneStatesMap[pane.uid] = pane),
});

//#region 更新界面
//从子元素中获取pane列表
function getTabPanes(content, paneInstanceList = []) {
  const children = content.children || [];
  children.forEach((node) => {
    let type = node.type.name || node.type;
    if (type === "mTabPane" && node.component) {
      paneInstanceList.push(node.component);
    } else if (type === Fragment || type === "template") {
      getTabPanes(node, paneInstanceList);
    }
  });
  return paneInstanceList.map((paneComponent, index) => {
    const pane = paneStatesMap[paneComponent.uid];
    pane.index = `${index}`;
    return pane;
  });
}
/** 检查页面是否更改
 * paneInstanceList 当前pane的列表
 * 返回true则已更改
 */
function checkPanesChanged(paneInstanceList) {
  return !(
    // 如果长度一致
    (
      paneInstanceList.length === panes.value.length &&
      // 如果所有元素一致
      paneInstanceList.every(
        (pane, index) => pane.uid === panes.value[index].uid 
      )
    )
  );
}

// 更新Pane实例列表，用于更新tabNav
function updatePaneInstances() {
  //如果插槽未插入任何数据，则panes重置并return
  if (!useSlots().default) {
    panes.value = [];
    return;
  }
  /**获取所有的子元素（组件）
   * instance.subTree.children
   * 这里不使用useSlots().default()获取的原因是需要获取组件的uid
   * 可以很方便的对比组件变化，若使用name或者其他进行对比的话，若用户未传递
   * 将造成很大的问题，而uid则是每个组件唯一的标识
   * 使用index索引值也不可行，若组件顺序发生变化，就无法判断了，用uid对应index的方式可以很好的判断
   * 从children中获取class==="tabs-content"下的子元素，也就是当前默认插槽下的子元素
   * 这里需要注意，注释也算一个子元素,所以不要在组件根元素外写注释
   */
  const content = instance.subTree.children.find(
    ({ props }) => props?.class === "tabs-content"
  );
  if (!content) return;
  //拿到当前所有的tabpane
  const paneInstanceList = getTabPanes(content);
  //判断界面是否需要修改
  if (!checkPanesChanged(paneInstanceList)) return;
  //如果没有指定显示的tab，则默认选择第一个
  if (currentName.value === "0")
    setCurrentName(paneInstanceList[0].props.name || "0")
   
  // //更新数据
  panes.value = paneInstanceList;
}
onMounted(() => {
  updatePaneInstances();
});
onUpdated(() => {
  updatePaneInstances();
});
//#endregion

function changeCurrentName (tabName) {
    currentName.value = tabName;
    emits("update:modelValue",tabName)
    emits("update:activeName",tabName)
    emits("onChangeTab",tabName)
}

function setCurrentName(tabName) {
  if (currentName.value === tabName) return
  const canLeave = props.beforeLeave?.(currentName.value,tabName)
  if(!!canLeave && (typeof canLeave === 'object' || typeof canLeave === 'function') && typeof canLeave.then === 'function'){
    canLeave.then(()=>{
        changeCurrentName(tabName)
    },()=>{})
  } else if (canLeave !== false) {
    changeCurrentName(tabName)
  }
}
watch(() =>props.activeName,(modelValue)=>{
    setCurrentName(modelValue)
})
watch(() =>props.modelValue,(modelValue)=>{
    setCurrentName(modelValue)
})

function handleTabClick(pane, tabName) {
  setCurrentName(tabName)
  emits("onTabclick",tabName)
}
</script>

<style lang="scss" scoped>
.tabs {
  display: block;
  .tabs-content {
    // float: left;
    &::before,
    &::after{
      content: "";
      display: table;
      clear: both;
    }
  }
    &::before,
    &::after{
      content: "";
      display: table;
      clear: both;
    }
}
</style>>

