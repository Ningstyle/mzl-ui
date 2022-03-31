<template>
  <div class="tabs_header " :class="typeClass">
    <div class="tab-nav-prev" v-if="scrollable" @click="scrollPrev">
      <i class="m-icon-arrow-left-bold"></i>
    </div>
    <div
      class="tab_add_btn"
      v-if="props.addable"
      @click="tabsContext.emits('onTabAdd')"
    >
      <i class="m-icon-add-bold add_icon"></i>
    </div>
    <div class="tab-nav-next" v-if="scrollable" @click="scrollNext">
      <i class="m-icon-arrow-right-bold"></i>
    </div>
    <div
      class="tabs_nav_scroll"
      ref="navScroll"
      v-resize="navScrollReSize"
      :style="{ 'margin-right': scrollable ? '30px' : '' }"
    >
      <div
        class="tabs_nav"
        ref="navWrap"
        :style="{ transform: `translate3d(${-navWrap_offset}px,0px,0px)` }"
      >
        <component
          :is="getLabelNode(pane)"
          v-resize="upDateBar"
          v-for="pane in props.panes"
          :key="pane.uid"
        />
      </div>
      <div
        class="active-bar"
        :style="active_bar_style"
        v-if="props.type != 'card'"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "mTabsNav",
};
</script>
<script setup>
/**
 * 代码有点乱，找机会重构
 * 还需要添加left，bottom，right布局方式
 */
import {
  computed,
  reactive,
  render,
  inject,
  ref,
  nextTick,
  watch,
  defineComponent,
  resolveDirective,
  withDirectives,
  onUpdated,
  h,
} from "vue";

const props = defineProps({
  panes: {
    type: Array,
    default: [],
  },
  currentName: {
    type: String,
  },
  active_color: {
    type: String,
  },
  color: {
    type: String,
  },
  addable: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "line",
  },
});
const tabsContext = inject("tabsContext");
//#region 计算属性
const typeClass = computed(() => {
  return props.type === "card" ? "tabs_header_card" : "tabs_header_line";
});
const active_bar_style = computed(() => {
  return {
    width: `${active_bar_info.offsetWidth}px`,
    transform: `translate3d(${active_bar_info.offsetLeft}px,0px,0px)`,
    "background-color": props.active_color,
  };
});
//#endregion
// 事件
const emits = defineEmits(["onTabClick"]);

const scrollable = ref(false);
const navWrap = ref(null);
const navScroll = ref(null);
const active_bar_info = reactive({
  width: 0,
  offsetLeft: 0,
});
const navWrap_offset = ref(0);

function getLabelNode(pane) {
  const close_btn = h("i", {
    class: { "m-icon-close": true, close_btn: true },
    style: { display: props.type==="line"||props.type===""||pane.active ? "inline-block" : "" },
    onClick: (event) => {
      tabsContext.emits("onTabRemove", pane.props.name || pane.index);
      event.stopPropagation();
    },
  });
 const icon=h("i",{class:[`${pane.props.icon}`,"tab-icon"]})
  const label = defineComponent({
    render() {
      return h(
        "div",
        {
          class: {
            nav_item: true,
            active: pane.active,
            disabled: pane.props.disabled,
            'is-closable':pane.active|| pane.props.disabled?"":pane.props.closable||tabsContext.props.closable?true:false
          },
          style: { color: pane.active ? props.active_color : props.color },
          onClick: pane.props.disabled
            ? null
            : ($event) => onTabClick(pane, $event),
        },
        [
          pane.props.icon?icon:"",
          pane.slots.label?.() || pane.props.label,
          pane.props.disabled?"":pane.props.closable||tabsContext.props.closable ? close_btn : "",
        ]
      );
    },
  });
  return label;
}

function getNavInfo() {
  return {
    displayOffsetRight: navWrap_offset.value + navScroll.value.offsetWidth,
    displayOffsetLeft: navWrap_offset.value,
    navScrollWidth: navScroll.value.offsetWidth,
    navWrapWidth: navWrap.value.offsetWidth,
    navItem: navWrap.value.querySelectorAll(".nav_item"),
  };
}
function scrollPrev() {
  if (navWrap_offset.value == 0) return;
  const {
    displayOffsetRight,
    displayOffsetLeft,
    navItem,
    navScrollWidth,
    navWrapWidth,
  } = getNavInfo();
  const offsetLeft = Array.from(navItem).reduce((pre, cur) => {
    return pre ? pre : cur.offsetLeft >= displayOffsetLeft ? cur.offsetLeft : 0;
  }, 0);
  if (offsetLeft < navScrollWidth) {
    navWrap_offset.value = 0;
  } else {
    navWrap_offset.value = offsetLeft - navScrollWidth;
  }
}
function scrollNext() {
  const { displayOffsetRight, navItem, navScrollWidth, navWrapWidth } =
    getNavInfo();
  if (displayOffsetRight >= navWrapWidth) {
    return;
  }
  const offsetLeft = Array.from(navItem).reduce((pre, cur) => {
    return cur.offsetLeft > displayOffsetRight ? pre : cur.offsetLeft;
  }, 0);
  navWrap_offset.value =
    navWrapWidth - offsetLeft <= navScrollWidth
      ? navWrapWidth - navScrollWidth
      : offsetLeft;
}

function navScrollReSize() {
  navWrap.value.offsetWidth > navScroll.value.offsetWidth
    ? (scrollable.value = true)
    : (scrollable.value = false);
  if (!scrollable.value || !navWrap_offset.value) return;
  const { displayOffsetRight, navScrollWidth, navWrapWidth } = getNavInfo();
  if (navScrollWidth >= navWrapWidth) {
    navWrap_offset.value = 0;
  } else if (displayOffsetRight >= navWrapWidth - navWrap_offset.value) {
    const newOffset = navWrapWidth - navScrollWidth;
    if (navWrap_offset.value > newOffset) navWrap_offset.value = newOffset;
  }
}

function update() {
  if (!navWrap.value || !navScroll) return;
  navScrollReSize();
  upDateBar();
}

watch(
  () => props.currentName,
  () => {
    scrollToActiveTab();
  }
);

async function scrollToActiveTab() {
  await nextTick();
  const { displayOffsetRight, displayOffsetLeft, navScrollWidth } =
    getNavInfo();
  const mLabels = navWrap.value.querySelector(".active");
  if (displayOffsetLeft > mLabels.offsetLeft) {
    navWrap_offset.value = mLabels.offsetLeft;
  } else if (displayOffsetRight < mLabels.offsetLeft + mLabels.offsetWidth) {
    navWrap_offset.value =
      mLabels.offsetLeft + mLabels.offsetWidth - navScrollWidth;
  }
}

function upDateBar() {
  const mLabels = navWrap.value.querySelector(".active");
  if(!mLabels) return
  let offsetLeft = mLabels.offsetLeft;
  active_bar_info.offsetWidth = mLabels.offsetWidth;
  active_bar_info.offsetLeft = offsetLeft - navWrap_offset.value;
}
function onTabClick(pane) {
  const tabName = pane.props.name || pane.index;
  emits("onTabClick", pane, tabName);
}
//#region  自定义指令 用于监听元素的大小变化，
const vResize = {
  mounted(el, binding) {
    function reSize(fn) {
      let t = null;
      return (params) => {
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(() => {
          fn(el);
        }, 10);
      };
    }
    el._resizer = new window.ResizeObserver(reSize(binding.value));
    el._resizer.observe(el);
  },
  unmounted(el) {
    el._resizer.disconnect();
  },
};
//#endregion

onUpdated(() => {
  update();
});
</script>

<style lang="scss" scoped>
// 切换按钮
.tabs_header {
  font-size: 14px;
  .tab-nav-prev,
  .tab-nav-next,
  .tab_add_btn {
    color: #969696;
    cursor: pointer;
    text-align: center;

    height: 40px;
    width: 30px;
    line-height: 40px;
    background-color: #ffffff;
    .add_icon {
      width: 20px;
      height: 20px;
      border: solid 1px #cacaca;
      border-radius: 3px;
      line-height: 20px;
      text-align: center;
      &:hover {
        color: #0e80eb;
        background-color: rgba($color: #000000, $alpha: 0.03);
      }
    }
  }

  .tab-nav-prev {
    float: left;
  }
  .tab-nav-next,
  .tab_add_btn {
    float: right;
  }
}

.tabs_header_line {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  .tabs_nav_scroll {
    overflow: hidden;
    display: block;
    line-height: 40px;
  }
  .tabs_nav {
    white-space: nowrap;
    width: auto;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    transition: all 500ms ease-in-out;
    &::before,
    &::after {
      content: "";
      display: table;
      clear: both;
    }

    .active {
      color: #0e80eb;
    }
   
  }
  &::after {
    content: "";
    display: block;
    height: 2px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #f0f0f0;
  }
  .active-bar {
    position: absolute;
    height: 2px;
    bottom: 0;
    background-color: #0e80eb;
    transition: all 500ms ease-in-out;
    z-index: 1;
  }
}
.nav_item {
  cursor: pointer;
  display: inline-block;
  padding: 0 20px;
  
  .tab-icon{
    text-align: center;
    line-height: 40px;
    margin-right: 5px;
  }
  .close_btn {
    display: none;
    font-size: 12px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-left: 5px;
    transition: all 200ms ease-in-out;
    &:hover {
      color: #ffffff;
      border-radius: 50%;
      background-color: rgba($color: #000000, $alpha: 0.2);
    }
  }
 
  &:hover .close_btn {
    display: inline-block;
  }
   
}
.disabled {
      color: #cacaca;
   }
.tabs_header_card {
  border-bottom: solid 1px #d4d4d4;
  box-sizing: border-box;
  .tabs_nav_scroll {
    overflow: hidden;
    margin-bottom: -1px;
  }
  .tabs_nav {
    white-space: nowrap;
    display: inline-block;
    border-radius: 5px 5px 0 0;
    transition: all 500ms ease-in-out;
    border: solid 1px #d4d4d4;
    border-bottom: 0;
  }
  .nav_item {
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    border-right: solid 1px #d4d4d4;
    cursor: pointer;
    display: inline-block;
    padding: 0 15px;
    
     
  }
  .is-closable{
    padding: 0 25px;
    &:hover{
      padding: 0 10px 0 15px;
     
    }
  }
  .active {
    padding: 0 30px;
    color: #0e80eb;
    border-bottom: solid 2px #ffffff;
  }
}

.is_left{
  float: left;
  .tabs_nav{
    border: 0;
  }
  .nav_item{
    padding:0 15px;
    display: block;
    border: 0;
  }
  .active {
    padding:0 15px;
    border: 0;
  }
  .tabs_header_card{
    border-bottom: 0;
  }
}
</style>