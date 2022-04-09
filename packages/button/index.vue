<template>
  <button :class="isClass" :style="styles">
    <i :class="isIconClass" v-if="leftIcon"></i>
    <span
      :style="{
        'margin-left':
          $slot['default'] == undefined ? '0px' : leftIcon ? '4px' : '0px',
        'margin-right':
          $slot['default'] == undefined ? '0px' : rightIcon ? '4px' : '0px',
      }"
      ><slot
    /></span>
    <i :class="isIconClass" v-if="rightIcon"></i>
  </button>
</template>
<script>
export default {
  name: "mButton",
};
</script>
<script setup>
import { computed, useSlots } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disabled: Boolean,
  round: Boolean,
  size: {
    type: String,
    default: "default",
  },
  customColor: {
    type: String,
    default: "",
  },
  leftIcon: String,
  rightIcon: String,
  localing: Boolean,
});
const mBtnDeaultStyle = {
  background: props.customColor,
  border: props.customColor,
  color: "#fff",
};
const $slot = useSlots();
const isClass = computed(() => {
  return [
    props.size == "default"
      ? "mzl-button"
      : props.size == "medium"
      ? "mzl-button-medium"
      : props.size == "small"
      ? "mzl-button-small"
      : props.size == "mini"
      ? "mzl-button-mini"
      : "mzl-button",
    props.type ? (props.disabled ? "" : `mzl-button-${props.type}`) : "",
    props.disabled ? `mzl-button-${props.type}-disabled` : "",
    {
      "mzl-button-round": props.round,
    },
  ];
});
const isIconClass = computed(() => {
  return [
    "iconfont",
    props.leftIcon || props.rightIcon,
    props.localing
      ? props.leftIcon == "m-icon-loading1" ||
        props.leftIcon == "m-icon-loading2" ||
        props.leftIcon == "m-icon-loading3" ||
        props.leftIcon == "m-icon-loading4" ||
        props.leftIcon == "m-icon-loading5" ||
        props.leftIcon == "m-icon-loading6" ||
        props.rightIcon == "m-icon-loading1" ||
        props.rightIcon == "m-icon-loading2" ||
        props.rightIcon == "m-icon-loading3" ||
        props.rightIcon == "m-icon-loading4" ||
        props.rightIcon == "m-icon-loading5" ||
        props.rightIcon == "m-icon-loading6"
        ? "mzl-icon-loading"
        : ""
      : "",
  ];
});
const styles = computed(() => {
  return [
    props.customColor == ""
      ? {}
      : props.type == "default"
      ? {}
      : mBtnDeaultStyle,
  ];
});
</script>
<style>
@import url("../../styles/iconfont.css");
@import url("../../styles/main.css");
</style>
<style scoped lang="scss">
.mzl-button {
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
  }
  span {
    display: inline-block;
  }
}
.mzl-button-medium {
  padding: 8px 18px;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 14px;
  }
}
.mzl-button-small {
  padding: 7px 13px;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 13px;
  }
}
.mzl-button-mini {
  padding: 7px 13px;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.15s ease;
  user-select: none;
  overflow: hidden;
  line-height: 1;
  white-space: nowrap;
  i {
    font-size: 12px;
  }
}
.mzl-button-round {
  border-radius: 22px;
}
.mzl-button-default {
  border: 1px solid #d9d9d9;
  background: #fff;
  color: #333;
  &:hover {
    color: #0e80eb;
    border-color: #0e80eb;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.mzl-button-custom {
  color: #333;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.mzl-button-primary {
  border: 1px solid $primary;
  color: #fff;
  background-color: $primary;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.mzl-button-success {
  border: 1px solid #09b63d;
  color: #fff;
  background-color: #09b63d;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.mzl-button-danger {
  border: 1px solid #ec3437;
  background: #ec3437;
  color: #fff;
  &:hover {
    color: #fff;
    border-color: #ec3437;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.mzl-button-warning {
  border: 1px solid #f57b29;
  background: #f57b29;
  color: #fff;
  &:hover {
    color: #fff;
    border-color: #f57b29;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.mzl-button-text {
  border: 1px solid #fff;
  background: none;
  color: #0e80eb;
  &:hover {
    color: #0e80eb;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}
.mzl-button-dashed {
  border: 1px dashed #d9d9d9;
  background: #fff;
  color: #333;
  &:hover {
    color: #0e80eb;
    border-color: #0e80eb;
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
}

.mzl-button-default-disabled {
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
}
.mzl-button-primary-disabled {
  cursor: no-drop;
  border: 1px solid #0e80eb;
  background: #0e80eb;
  opacity: 0.5;
  color: #fff;
}
.mzl-button-success-disabled {
  cursor: no-drop;
  border: 1px solid #09b63d;
  background: #09b63d;
  opacity: 0.5;
  color: #fff;
}
.mzl-button-danger-disabled {
  cursor: no-drop;
  border: 1px solid #ec3437;
  background: #ec3437;
  opacity: 0.5;
  color: #fff;
}
.mzl-button-warning-disabled {
  cursor: no-drop;
  border: 1px solid #f57b29;
  background: #f57b29;
  opacity: 0.5;
  color: #fff;
}
.mzl-button-dashed-disabled {
  cursor: no-drop;
  border: 1px solid #d9d9d9;
  background: #fff;
  opacity: 0.5;
  color: #333;
}
.mzl-button-text-disabled {
  cursor: no-drop;
  border: 1px solid #fff;
  background: none;
  opacity: 0.5;
  color: #0e80eb;
}
.mzl-button-custom-disabled {
  cursor: no-drop;
  opacity: 0.5;
}

.mzl-icon-loading {
  animation: icon-loading 1.5s linear infinite;
  -webkit-animation: icon-loading 1.5s linear infinite;
}
@keyframes icon-loading {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>