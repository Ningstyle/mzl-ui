<template>
  <div
    :class="[selectClass, customClass]"
    :style="[
      customClass ? {} : { width: parseInt(width) < 100 ? '100px' : width },
    ]"
    v-click-outside
  >
    <div :class="selectInputClass">
      <input
        type="text"
        :readonly="!searchable"
        :placeholder="selVal == '' ? placeholder : selVal"
        :style="[customClass ? {} : customStyle]"
        :class="[selVal == '' ? 'mzl-select-input' : 'mzl-select-input-value']"
        :disabled="disabled"
        @input="input"
        :value="selVal"
      />
      <i :class="iconClass" :style="[{ transform: rotate }, fixIcon]"></i>
    </div>
    <transition name="slide-fade">
      <div class="mzl-select-option" v-if="isShow">
        <div class="mzl-select-option-find">
          <ul>
            <li
              class="mzl-select-option-li"
              v-for="(item, index) in optionsData"
              :key="index"
              @click="selChange(item, index)"
              :class="{
                'mzl-select-active':
                  activeIndex == index ||
                  selVal == item[labelFiled] ||
                  item.selected,
                'mzl-select-disabled': item.disabled,
              }"
            >
              {{ item[labelFiled] }}
              <i
                class="iconfont m-icon-select-bold"
                v-if="multiple && item.selected"
              ></i>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "mSelect",
};
</script>
<script setup>
import {
  ref,
  computed,
  reactive,
  onMounted,
  watch,
  nextTick,
  onUpdated,
} from "vue";
const emit = defineEmits(["update:modelValue", "change"]);
const props = defineProps({
  modelValue: String | Array,
  placeholder: String,
  customClass: String,
  disabled: Boolean,
  searchable: Boolean,
  size: {
    type: String,
    default: "default",
  },
  width: {
    type: String,
    default: "260px",
  },
  height: {
    type: String,
    default: "",
  },
  options: {
    type: Array,
    default: () => {
      return [];
    },
  },
  //默认需要显示的label字段
  labelFiled: {
    type: String,
    default: "label",
  },
  //默认需要显示的value字段
  valueFiled: {
    type: String,
    default: "value",
  },
  multiple: Boolean,
});
props.options.forEach((item, index) => {
  if (!props.multiple) {
    item.selected = false;
  } else {
    props.modelValue.forEach((item1, index1) => {
      if (item[props.valueFiled] == item1) {
        item.selected = true;
      }
    });
    console.log();
  }
});

const activeIndex = ref(-1);
const isShow = ref(false);
const rotate = ref("rotate(0deg)");
const optionsData = ref(props.options || []);
const selVal = ref(
  props.multiple
    ? props.modelValue
    : props.modelValue != ""
    ? props.options.filter((item) => {
        return item[props.valueFiled] == props.modelValue;
      })[0][props.labelFiled]
    : ""
);
/*1.增加选择框width和height属性的大小限制 高度最小是25px,width属性最小是100px
 *2.动态计算下拉图标的行高
 */
const fixIcon = reactive({});

// icon class
const iconClass = computed(() => {
  return ["select-icon iconfont m-icon-arrow-down"];
});

//根据自定义的组件尺寸适配组件里面的下拉框相对位置以及图标居中
const customStyle = computed(() => {
  let styles = {};
  if (props.height) {
    let height = parseInt(props.height) < 25 ? "25px" : props.height;
    styles.height = height;
    fixIcon.lineHeight = height;
    fixIcon.top = 0;
    fixIcon.height = "100%";
  }
  return styles;
});

// selece class
const selectClass = computed(() => {
  return [
    `mzl-select-${props.size}`,
    props.disabled ? `mzl-select-${props.size}-disabled` : "",
  ];
});
// select input class
const selectInputClass = computed(() => {
  return [
    "mzl-select-input-box",
    `mzl-select-input-${props.size}`,
    props.disabled ? `mzl-select-input-${props.size}-disabled` : "",
  ];
});
const blur = (e) => {
  isShow.value = false;
  rotate.value = "rotate(0deg)";
};

const input = (e) => {
  selVal.value = e.target.value;
  optionsData.value = [];
  let filterList = props.options.filter((item) => {
    return item[props.labelFiled].indexOf(e.target.value) != -1;
  });
  filterList.forEach((item, index) => {
    optionsData.value.push(item);
  });
};
const vClickOutside = {
  beforeMount(el) {
    let handler = (e) => {
      if (!props.disabled) {
        if (!props.multiple) {
          if (
            el.contains(e.target) &&
            e.target.className.indexOf("mzl-select-option-li") == -1
          ) {
            if (!isShow.value) {
              isShow.value = !isShow.value;
              if (isShow.value) {
                rotate.value = "rotate(180deg)";
              } else {
                rotate.value = "rotate(0deg)";
              }
            }
          } else {
            if (isShow.value) {
              blur();
            }
          }
        } else {
          if (el.contains(e.target)) {
            if (!isShow.value) {
              isShow.value = !isShow.value;
              if (isShow.value) {
                rotate.value = "rotate(180deg)";
              } else {
                rotate.value = "rotate(0deg)";
              }
            }
          } else {
            if (isShow.value) {
              blur();
            }
          }
        }
      }
    };
    el.handler = handler;
    if (typeof document !== "undefined") {
      document.addEventListener("click", handler);
    }
  },
  unmounted(el) {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", el.handler);
    }
  },
};
// 选择事件
let labels = [];
let indexs = [];
const selChange = (item, index) => {
  if (!props.multiple) {
    if (!item.disabled) {
      activeIndex.value = index;
      selVal.value = item[props.labelFiled];
      emit("update:modelValue", item[props.valueFiled]);
      emit("change", { lable: item.label, value: item.value, index: index });
      blur();
    }
  } else {
    if (!item.disabled) {
      Array.prototype.indexOf = function (val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == val) return i;
        }
        return -1;
      };
      item.selected = !item.selected;
      if (item.selected) {
        selVal.value.push(item[props.valueFiled]);
        labels.push(item.label);
        indexs.push(index);
      } else {
        selVal.value.splice(selVal.value.indexOf(item[props.valueFiled]), 1);
        labels.splice(labels.indexOf(item.label), 1);
        indexs.splice(indexs.indexOf(index), 1);
      }
      emit("update:modelValue", selVal.value);
      emit("change", { lable: labels, value: selVal.value, index: indexs });
    }
  }
};
</script>

<style lang="scss" scoped>
// 默认
.mzl-select-input-box,
.mzl-select-default {
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
  .mzl-select-multiple {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .mzl-select-input-default {
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    input {
      height: 100%;
      width: 100%;
      font-size: 14px;
      outline: none;
      border: 0;
      margin: 0;
      padding: 10px 30px 10px 10px;
      box-sizing: border-box;
      border-radius: 4px;
      color: #606266;
      cursor: pointer;
      border: 1px solid #dcdfe6f6;
      transition: all 0.2s ease;
      &:focus {
        border-color: #0e80eb;
      }
    }
    .mzl-select-input::placeholder {
      color: #c6c8cc;
      font-size: 14px;
    }
    .mzl-select-input-value::placeholder {
      color: #626262;
      font-size: 14px;
    }
    .select-icon {
      position: absolute;
      right: 10px;
      top: 11px;
      color: #94969b;
      transition: all 0.2s ease;
      cursor: pointer;
      transform-origin: 50% 50%;
    }
    .select-icon-tranfromOut {
      transform: rotate(180deg);
    }
    .select-icon-tranfromIn {
      transform: rotate(0deg);
    }
  }
  .mzl-select-option {
    min-width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
    top: 100%;
    z-index: 99;
    .mzl-select-option-find {
      width: 100%;
      max-height: 211px;
      height: auto;
      position: relative;
      margin-top: 13px;
      padding: 4px 0px;
      box-sizing: border-box;
      background-color: #ffffff;
      border: 1px solid #dcdfe6f6;
      border-radius: 3px;
      transition: all 0.1s ease;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      &:before {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -15.7px;
        right: 50.27%;
        padding: 0;
        border-bottom: 8px solid #ffffff;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        display: block;
        content: "";
        z-index: 12;
      }
      &:after {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -18px;
        right: 50%;
        padding: 0;
        border-bottom: 9px solid #dcdfe6f6;
        border-top: 9px solid transparent;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        display: block;
        content: "";
        z-index: 10;
      }
      ul {
        width: 100%;
        max-height: 205px;
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: thin;
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          padding: 0 12px;
          line-height: 40px;
          font-size: 14px;
          cursor: pointer;
          color: #626262;
          user-select: none;
          white-space: nowrap;
          i {
            float: right;
          }
          &:hover {
            background: rgba(96, 98, 102, 0.1);
          }
        }
        li.mzl-select-active {
          color: #0e80eb;
        }
        li.mzl-select-disabled {
          color: #9d9d9d;
          cursor: no-drop;
          &:hover {
            background-color: #fff;
          }
        }
      }
      ul::-webkit-scrollbar {
        width: 5px;
        height: 1px;
      }

      ul::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #d5d5d6;
      }

      ul::-webkit-scrollbar-track {
        border-radius: 8px;
        background: #fff;
      }
    }
  }
}

// small
.mzl-select-small {
  width: 100%;
  height: auto;
  margin: 0;
  position: relative;
  .mzl-select-input-small {
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    input {
      height: 100%;
      width: 100%;
      font-size: 13px;
      outline: none;
      border: 0;
      margin: 0;
      padding: 8px 28px 8px 8px;
      box-sizing: border-box;
      border-radius: 4px;
      color: #606266;
      cursor: pointer;
      border: 1px solid #dcdfe6f6;
      transition: all 0.2s ease;
      &:focus {
        border-color: #0e80eb;
      }
    }
    .mzl-select-input::placeholder {
      color: #c6c8cc;
      font-size: 14px;
    }
    .mzl-select-input-value::placeholder {
      color: #626262;
      font-size: 14px;
    }
    .select-icon {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #94969b;
      transition: all 0.2s ease;
      cursor: pointer;
      transform-origin: 50% 50%;
    }
    .select-icon-tranfromOut {
      transform: rotate(180deg);
    }
    .select-icon-tranfromIn {
      transform: rotate(0deg);
    }
  }
  .mzl-select-option {
    min-width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
    top: 100%;
    z-index: 99;
    .mzl-select-option-find {
      width: 100%;
      max-height: 211px;
      height: auto;
      position: relative;
      margin-top: 13px;
      padding: 4px 0px;
      box-sizing: border-box;
      background-color: #ffffff;
      border: 1px solid #dcdfe6f6;
      border-radius: 3px;
      transition: all 0.1s ease;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      &:before {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -15.7px;
        right: 50.27%;
        padding: 0;
        border-bottom: 8px solid #ffffff;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        display: block;
        content: "";
        z-index: 12;
      }
      &:after {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -18px;
        right: 50%;
        padding: 0;
        border-bottom: 9px solid #dcdfe6f6;
        border-top: 9px solid transparent;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        display: block;
        content: "";
        z-index: 10;
      }
      ul {
        width: 100%;
        max-height: 205px;
        overflow-y: scroll;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        list-style: none;
        scrollbar-width: thin;
        li {
          padding: 0 12px;
          line-height: 35px;
          font-size: 13px;
          cursor: pointer;
          color: #626262;
          user-select: none;
          white-space: nowrap;
          i {
            float: right;
          }
          &:hover {
            background: rgba(96, 98, 102, 0.1);
          }
        }
        li.mzl-select-active {
          color: #0e80eb;
        }
        li.mzl-select-disabled {
          color: #9d9d9d;
          cursor: no-drop;
          &:hover {
            background-color: #fff;
          }
        }
      }
      ul::-webkit-scrollbar {
        width: 5px;
        height: 1px;
      }

      ul::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #d5d5d6;
      }

      ul::-webkit-scrollbar-track {
        border-radius: 8px;
        background: #fff;
      }
    }
  }
}

// mini
.mzl-select-mini {
  width: 100%;
  height: auto;
  margin: 0;
  position: relative;
  .mzl-select-input-mini {
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    position: relative;
    input {
      height: 100%;
      width: 100%;
      font-size: 12px;
      outline: none;
      border: 0;
      margin: 0;
      padding: 7px 26px 7px 6px;
      box-sizing: border-box;
      border-radius: 4px;
      color: #606266;
      cursor: pointer;
      border: 1px solid #dcdfe6f6;
      transition: all 0.2s ease;
      &:focus {
        border-color: #0e80eb;
      }
    }
    .mzl-select-input::placeholder {
      color: #c6c8cc;
      font-size: 12px;
    }
    .mzl-select-input-value::placeholder {
      color: #626262;
      font-size: 12px;
    }
    .select-icon {
      position: absolute;
      right: 10px;
      top: 8px;
      color: #94969b;
      transition: all 0.2s ease;
      cursor: pointer;
      transform-origin: 50% 50%;
    }
    .select-icon-tranfromOut {
      transform: rotate(180deg);
    }
    .select-icon-tranfromIn {
      transform: rotate(0deg);
    }
  }
  .mzl-select-option {
    min-width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
    top: 100%;
    z-index: 99;
    .mzl-select-option-find {
      width: 100%;
      max-height: 185px;
      height: auto;
      position: relative;
      margin-top: 13px;
      padding: 4px 0px;
      box-sizing: border-box;
      background-color: #ffffff;
      border: 1px solid #dcdfe6f6;
      border-radius: 3px;
      transition: all 0.1s ease;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      &:before {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -15.7px;
        right: 50.27%;
        padding: 0;
        border-bottom: 8px solid #ffffff;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        display: block;
        content: "";
        z-index: 12;
      }
      &:after {
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -18px;
        right: 50%;
        padding: 0;
        border-bottom: 9px solid #dcdfe6f6;
        border-top: 9px solid transparent;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        display: block;
        content: "";
        z-index: 10;
      }
      ul {
        width: 100%;
        max-height: 179px;
        overflow-y: scroll;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        list-style: none;
        scrollbar-width: thin;
        li {
          padding: 0 12px;
          line-height: 32px;
          font-size: 12px;
          cursor: pointer;
          color: #626262;
          user-select: none;
          white-space: nowrap;
          i {
            float: right;
          }
          &:hover {
            background: rgba(96, 98, 102, 0.1);
          }
        }
        li.mzl-select-active {
          color: #0e80eb;
        }
        li.mzl-select-disabled {
          color: #9d9d9d;
          cursor: no-drop;
          &:hover {
            background-color: #fff;
          }
        }
      }
      ul::-webkit-scrollbar {
        width: 5px;
        height: 1px;
      }

      ul::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #d5d5d6;
      }

      ul::-webkit-scrollbar-track {
        border-radius: 8px;
        background: #fff;
      }
    }
  }
}

.mzl-select-default-disabled {
  cursor: no-drop;
  .mzl-select-input-default-disabled {
    cursor: no-drop;
    input {
      cursor: no-drop;
    }
    .mzl-select-input-value::placeholder {
      color: #c6c8cc;
      font-size: 14px;
    }
  }
}
.mzl-select-small-disabled {
  cursor: no-drop;
  .mzl-select-input-small-disabled {
    cursor: no-drop;
    input {
      cursor: no-drop;
      color: #c6c8cc;
    }
    .mzl-select-input-value::placeholder {
      color: #c6c8cc;
      font-size: 14px;
    }
  }
}
.mzl-select-mini-disabled {
  cursor: no-drop;
  .mzl-select-input-mini-disabled {
    cursor: no-drop;
    input {
      cursor: no-drop;
    }
    .mzl-select-input-value::placeholder {
      color: #c6c8cc;
      font-size: 12px;
    }
  }
}
input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #c6c8cc;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 ~ 18 */
  color: #c6c8cc;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c6c8cc;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10 ~ 11 */
  color: #c6c8cc;
}
input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #c6c8cc;
}
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
