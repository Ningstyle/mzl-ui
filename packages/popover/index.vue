<template>
  <div
    class="popover-box"
    @mouseenter="hoverTriggerEnterHandler"
    @mouseleave="hoverTriggerLeaveHandler"
  >
    <transition
      :name="transition"
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave"
    >
      <div
        v-show="!disabled && showPopover"
        :class="['popover-outbox', placement, popperClass]"
        :aria-hidden="disabled || !showPopover ? 'true' : 'false'"
      >
        <div class="popover-arrow" ref="popoverArrow"></div>
        <div :class="['popover-box-content']" :style="popoverStyles">
          <div v-if="title" v-text="title" class="popover-title"></div>
          <slot>{{ content }}</slot>
        </div>
      </div>
    </transition>
    <div
      ref="reference"
      class="reference-content"
      @click="clickTriggerHandler"
      @mousedown="focusTriggerHandler"
      @mouseup="blurTriggerHandler"
    >
      <slot name="reference"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "mPopover",
};
</script>
<script setup>
import { ref, reactive, getCurrentInstance, onMounted, computed } from "vue";
const emit = defineEmits(["after-enter", "after-leave"]);
const props = defineProps({
  width: {
    type: [String, Number],
  },
  placement: {
    //popover展示出的位置,可选值——top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
    type: [String],
    default: "top",
  },
  modelValue: {
    type: Boolean,
    default: true,
  },
  content: {
    type: [String],
  },
  popperClass: {
    //自定义类，给弹出框添加自定义样式
    type: [String],
  },
  title: {
    type: [String],
  },
  transition: {
    //popover过渡动画设置
    type: String,
    default: "slide-fade",
  },
  disabled: {
    type: [Boolean],
    default: false,
  },
  //trigger可选值——click,hover,manual,focus
  trigger: {
    type: [String],
    default: "click",
  },
});
const visible = ref(false);

const showPopover = computed(() => {
  if (props.trigger !== "manual") {
    return visible.value;
  } else {
    console.log(props.modelValue);
    //自定义触发
    return props.modelValue;
  }
});
const popoverStyles = computed(() => {
  let style = {};
  if (props.width ?? null) {
    style.width = props.width + "px";
  }
  return style;
});

//计算arrow的位置
const reference = ref(null);
const popoverArrow = ref(null);
onMounted(() => {
  console.log(reference.value.clientWidth);
  if (props.placement.includes("top") || props.placement.includes("bottom")) {
    let clientWidth = reference.value.clientWidth;
    popoverArrow.value.style.setProperty(
      "--geticonsite",
      clientWidth / 2 + "px"
    );
  } else if (
    props.placement.includes("left") ||
    props.placement.includes("right")
  ) {
    let clientHeight = reference.value.clientHeight;
    popoverArrow.value.style.setProperty(
      "--geticonsite",
      clientHeight / 2 + "px"
    );
  }
});

const timer = ref(null);
//点击触发
function clickTriggerHandler() {
  if (props.trigger.toLowerCase() == "click") {
    if (!props.disabled) {
      visible.value = !visible.value;
    }
  }
}
//聚焦触发
function focusTriggerHandler() {
  if (props.trigger.toLowerCase() == "focus") {
    if (!props.disabled) {
      visible.value = true;
    }
  }
}
//失焦消时
function blurTriggerHandler() {
  if (props.trigger.toLowerCase() == "focus") {
    if (!props.disabled) {
      visible.value = false;
    }
  }
}
//hover——鼠标移入触发
function hoverTriggerEnterHandler() {
  if (props.trigger.toLowerCase() == "hover") {
    if (!props.disabled) {
      clearTimeout(timer.value);
      visible.value = true;
    }
  }
}
//hover——鼠标移出,关闭popover tips:当鼠标移出时，有个300ms的延时，如果在期间再次移入，则清空定时器，并当再次移出时，重新计时
function hoverTriggerLeaveHandler() {
  if (props.trigger.toLowerCase() == "hover") {
    if (!props.disabled) {
      timer.value = setTimeout(() => {
        visible.value = false;
      }, 300);
    }
  }
}
//弹窗显示时触发
function handleAfterEnter() {
  emit("after-enter");
}
//弹窗消时时触发
function handleAfterLeave() {
  emit("after-leave");
}
//获取组件实例
</script>
<style scoped lang="scss">
.popover-box {
  --geticonsite: 0;
  display: inline-block;
  position: relative;
  .popover-outbox {
    min-width: 150px;
    padding: 18px 20px;
    background-color: #ffffff;
    position: absolute;
    z-index: 1001;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
  &-content {
    overflow: auto;
    .popover-title {
      color: #303133;
      font-size: 16px;
      line-height: 1;
      margin-bottom: 12px;
    }
  }
  .top {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 12px;
    .popover-arrow {
      position: absolute;
      top: 100%;
      left: 50%;
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid #ffffff;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
  .top-start {
    bottom: 100%;
    left: 0;
    margin-bottom: 12px;
    .popover-arrow {
      position: absolute;
      top: 100%;
      left: var(--geticonsite);
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid #ffffff;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
  .top-end {
    bottom: 100%;
    right: 0;
    margin-bottom: 12px;
    .popover-arrow {
      position: absolute;
      top: 100%;
      right: var(--geticonsite);
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid #ffffff;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
  .bottom {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 12px;
    .popover-arrow {
      position: absolute;
      bottom: 100%;
      left: 50%;
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid #ffffff;
      border-right: 6px solid transparent;
    }
  }
  .bottom-start {
    top: 100%;
    left: 0;
    margin-top: 12px;
    .popover-arrow {
      position: absolute;
      bottom: 100%;
      left: var(--geticonsite);
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid #ffffff;
      border-right: 6px solid transparent;
    }
  }
  .bottom-end {
    top: 100%;
    right: 0;
    margin-top: 12px;
    .popover-arrow {
      position: absolute;
      bottom: 100%;
      right: var(--geticonsite);
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateX(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid #ffffff;
      border-right: 6px solid transparent;
    }
  }
  .left {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 12px;
    .popover-arrow {
      position: absolute;
      left: 100%;
      top: 50%;
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid #ffffff;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
  .left-start {
    right: 100%;
    background-color: #ffffff;
    top: 0;
    margin-right: 12px;
    .popover-arrow {
      position: absolute;
      left: 100%;
      top: var(--geticonsite);
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid #ffffff;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
  .left-end {
    right: 100%;
    background-color: #ffffff;
    bottom: 0;
    margin-right: 12px;
    .popover-arrow {
      position: absolute;
      left: 100%;
      bottom: var(--geticonsite);
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid #ffffff;
      border-bottom: 6px solid transparent;
      border-right: 6px solid transparent;
    }
  }
  .right {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 12px;
    .popover-arrow {
      position: absolute;
      right: 100%;
      top: 50%;
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #ffffff;
    }
  }
  .right-start {
    --geticonsite: 0;
    left: 100%;
    top: 0;
    margin-left: 12px;
    .popover-arrow {
      position: absolute;
      right: 100%;
      top: var(--geticonsite);
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #ffffff;
    }
  }
  .right-end {
    left: 100%;
    bottom: 0;
    margin-left: 12px;
    .popover-arrow {
      position: absolute;
      right: 100%;
      bottom: var(--geticonsite);
      content: "";
      display: block;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-left: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid #ffffff;
    }
  }
  .reference-content {
    display: inline-block;
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.6, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>
