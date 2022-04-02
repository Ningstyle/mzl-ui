<template>
  <div class="mzl-menu-div-box" :style="{ width: index != 0 ? '100%' : '' }">
    <li
      @mouseover="toggler(items)"
      @mouseleave="hide(items)"
      :data-key="dataKey"
      @click.stop="handelClick(items)"
      :style="itemLiStyle"
      :class="{
        activeMenuItem: items.isActive,
        menitemDisabled: items.disabled,
      }"
    >
      <div class="mzl-menu-item-title-box">
        <span class="menu-icon" :class="spanClass" :style="activeColots">
          <i :class="items.icon" v-if="items.icon"></i>
        </span>
        <span class="menu-title" :class="spanClass" :style="activeColots">{{
          items.title
        }}</span>
        <span
          class="menu-icon-arrow"
          v-if="items.children && items.children.length"
          :class="spanClass"
          :style="activeColots"
        >
          <i :class="iconClass"></i>
        </span>
      </div>
      <!-- v-show="items.isOpen" v-if="items.children&&items.children.length" -->
      <transition name="slide-fade">
        <div
          class="mzl-menu-item-position-box"
          :style="mentItemStyle"
          v-show="items.isOpen"
          v-if="items.children && items.children.length"
        >
          <template v-for="(item, i) in items.children" :key="i">
            <menu-item
              :items="item"
              :index="index + (i + 1)"
              :option="option"
              :data-key="dataKey + '-' + i"
              @change="emit('change', $event)"
              :theme="theme"
              :type="type"
            ></menu-item>
          </template>
        </div>
      </transition>
    </li>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const emit = defineEmits(["change"]);
const props = defineProps({
  items: {
    type: Object,
    default: () => {},
  },
  index: Number,
  option: {
    type: Array,
    default: () => [],
  },
  dataKey: String | Number,
  theme: {
    type: [Object, String],
  },
  type: String,
});
const float = ref(props.type == "horizontal" ? "initial" : "left");
const themes = ref({
  bgColor:
    typeof props.theme == "string"
      ? props.theme == "black"
        ? "#20222a"
        : "#fff"
      : props.theme.bgColor,
  activeBgColor:
    typeof props.theme == "string"
      ? props.theme == "black"
        ? "#000"
        : "#eaeaea"
      : props.theme.activeBgColor,
  color:
    typeof props.theme == "string"
      ? props.theme == "black"
        ? "#fff"
        : "#333"
      : props.theme.color,
  activeColor: props.theme.activeColor,
});
const meunIconRotate = ref(false);
const tabkey = ref("");
const mentItemStyle = computed(() => {
  return {
    left: props.index === 0 ? "0" : "242px",
    top: props.index == 0 ? "61px" : "0px",
  };
});
const itemLiStyle = computed(() => {
  return {
    height: props.index == 0 ? "58px" : "40px",
    "line-height": props.index == 0 ? "58px" : "40px",
    padding:
      props.index == 0
        ? "0 20px"
        : !props.items.icon
        ? "0 10px 0 5px"
        : "0 10px 0 10px",
  };
});
const iconClass = computed(() => {
  return {
    "m-icon-arrow-down-bold": props.index == 0,
    "m-icon-arrow-right": props.index != 0,
    menuIconRotate: props.index == 0 && meunIconRotate.value,
    menuItemIconRotate: props.index != 0 && meunIconRotate.value,
  };
});
const activeColots = computed(() => {
  return {
    color: props.items.isActive ? themes.value.activeColor : "",
  };
});
const spanClass = computed(() => {
  return {
    menitemDisabled: props.items.disabled,
  };
});
const IconRotate = (flag) => {
  meunIconRotate.value = flag;
};
props.items.key = props.dataKey;
const getParents = (option, key) => {
  for (var i in option) {
    if (option[i].key == key) {
      return [option[i]];
    }
    if (option[i].children) {
      var ro = getParents(option[i].children, key);
      if (ro !== undefined) {
        return ro.concat(option[i]);
      }
    }
  }
};
let timer = null;
let timer1 = null;
const toggler = (item) => {
  if (props.type == "vertical") {
    if (item.children && item.children.length) {
      clearTimeout(timer);
      clearTimeout(timer1);
      timer = setTimeout(() => {
        item.isOpen = true;
      }, 50);
      IconRotate(true);
    }
  }
};
const hide = (item) => {
  if (props.type == "vertical") {
    clearTimeout(timer);
    clearTimeout(timer1);
    timer1 = setTimeout(() => {
      item.isOpen = false;
    }, 50);
    if (item.children && item.children.length) {
      IconRotate(false);
    }
  }
};
const setActive = (options) => {
  options.forEach((v, i) => {
    v.isActive = false;
    if (v.children && v.children.length) {
      setActive(v.children);
    }
  });
};
const handelClick = (item) => {
  if (!item.disabled) {
    tabkey.value = item.key;
    setActive(props.option);
    getParents(props.option, item.key).forEach((v, i) => {
      v.isActive = true;
    });
    getParents(props.option, item.key)[
      getParents(props.option, item.key).length - 1
    ].isOpen = false;
    emit("change", item);
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0.5;
}
.mzl-menu-div-box {
  box-sizing: border-box;
  height: 100%;
  float: v-bind(float);
  padding: 0;
  li {
    width: 100%;
    list-style: none;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 60px;
    cursor: pointer;
    transition: all 0.1s ease;
    font-size: 14px;
    position: relative;
    .mzl-menu-item-title-box {
      span {
        color: v-bind("themes.color");
      }
      span.menu-icon {
        color: v-bind("themes.color");
        margin-right: 8px;
      }
      span.menu-icon-arrow {
        margin-left: 8px;
        i {
          float: right;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        i.menuIconRotate {
          transform: rotate(180deg);
        }
        i.menuItemIconRotate {
          transform: rotate(90deg);
        }
      }
      span.menitemDisabled {
        opacity: 0.3;
      }
    }
    &:hover {
      background: v-bind("themes.activeBgColor");
    }
    .mzl-menu-item-position-box {
      width: 240px;
      position: absolute;
      top: 60px;
      left: 240px;
      z-index: 9999;
      background: v-bind("themes.bgColor");
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  li.activeMenuItem {
    background: v-bind("themes.activeBgColor");
  }
  li.menitemDisabled {
    &:hover {
      background-color: rgba(0, 0, 0, 0);
      cursor: no-drop;
    }
  }
}
</style>