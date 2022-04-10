<template>
  <transition name="fade">
    <div v-if="isShow" ref="colorPicker" :class="['mzl-color-picker', customClass]">
      <!-- 显示颜色的小方块 -->
      <div class="mzl-color-picker-hd">
        <span class="hd-color-preview"></span>
        <span class="default-color-text" @click="setColor(props.defaultColor)">默认颜色</span>
      </div>
      <div class="mzl-color-picker-bd">
        <p>主题颜色</p>
        <ul class="t-color">
          <li
            v-for="(color, index) in tColor"
            :key="index"
            :style="{ backgroundColor: color }"
            @mouseenter="handleMouseEnter(color)"
            @mouseleave="handleMouseLeave"
            @click="setColor(color)"
          ></li>
        </ul>
        <ul class="color-panel">
          <li v-for="(item, index) of colorPanel" :key="index">
            <ul>
              <li
                v-for="(color, innerIndex) of item"
                :key="innerIndex"
                :style="{ backgroundColor: color }"
                @mouseenter="handleMouseEnter(color)"
                @mouseleave="handleMouseLeave"
                @click="setColor(color)"
              ></li>
            </ul>
          </li>
        </ul>
        <p>标准颜色</p>
        <ul class="t-color">
          <li
            v-for="(color, index) in bColor"
            :key="index"
            :style="{ backgroundColor: color }"
            @mouseenter="handleMouseEnter(color)"
            @mouseleave="handleMouseLeave"
            @click="setColor(color)"
          ></li>
        </ul>
        <p @click="showH5ColorPanel">更多颜色</p>
        <input type="color" hidden ref="h5ColorRef" v-model="h5Color" @change="setColor(h5Color)" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'mColorPicker'
}
</script>

<script setup>
import { ref, computed, onMounted, getCurrentInstance, nextTick } from 'vue'
const props = defineProps({
  modelValue: {
    type: String
  },
  defaultColor: {
    type: String,
    default: '#000000'
  },
  customClass: {
    type: String,
    require: false
  },
  autoClose: {
    type: Boolean,
    require: false,
    default: false
  }
})
const hoverColor = ref(null)
const showColor = computed(() => {
  return hoverColor.value ?? props.modelValue ?? props.defaultColor
})
const handleMouseEnter = (color) => {
  hoverColor.value = color
}
const handleMouseLeave = () => {
  hoverColor.value = null
}
const emit = defineEmits(['update:modelValue', 'change'])
const setColor = (color) => {
  emit('update:modelValue', color)
  emit('change', color)
  if (props.autoClose) {
    close()
  }
}

onMounted(() => {
  const colorPicker = ref()
  const vm = getCurrentInstance()
  window.addEventListener('click', (e) => {
    if (colorPicker && !vm.vnode.el.contains(e.target)) {
      close()
    }
  })
})

const h5Color = ref('')
const h5ColorRef = ref(null)
const showH5ColorPanel = () => {
  h5ColorRef.value.click()
}

// 主题颜色
const tColor = [
  '#000000',
  '#ffffff',
  '#eeece1',
  '#1e497b',
  '#4e81bb',
  '#e2534d',
  '#9aba60',
  '#8165a0',
  '#47acc5',
  '#f9974c'
]
// 颜色面板
const colorConfig = [
  ['#7f7f7f', '#f2f2f2'],
  ['#0d0d0d', '#808080'],
  ['#1c1a10', '#ddd8c3'],
  ['#0e243d', '#c6d9f0'],
  ['#233f5e', '#dae5f0'],
  ['#632623', '#f2dbdb'],
  ['#4d602c', '#eaf1de'],
  ['#3f3150', '#e6e0ec'],
  ['#1e5867', '#d9eef3'],
  ['#99490f', '#fee9da']
]

const colorPanel = computed(() => {
  const list = []
  for (let item of colorConfig) {
    list.push(gradient(item[1], item[0], 5))
  }
  return list
})

// 标准颜色
const bColor = [
  '#c21401',
  '#ff1e02',
  '#ffc12a',
  '#ffff3a',
  '#90cf5b',
  '#00af57',
  '#00afee',
  '#0071be',
  '#00215f',
  '#72349d'
]

// 计算渐变过渡颜色
const gradient = (startColor, endColor, step) => {
  // 讲 hex 转换为 rgb
  let sColor = hexToRgb(startColor)
  let eColor = hexToRgb(endColor)
  // 计算R\G\B每一步的差值
  let rStep = (eColor[0] - sColor[0]) / step
  let gStep = (eColor[1] - sColor[1]) / step
  let bStep = (eColor[2] - sColor[2]) / step
  let gradientColorArr = []
  // 计算每一步的hex值
  for (let i = 0; i < step; i++) {
    gradientColorArr.push(
      rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2]))
    )
  }
  return gradientColorArr
}

// 格式化 hex 颜色值
const parseColor = (hexStr) => {
  if (hexStr.length === 4) {
    hexStr = '#' + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3]
  } else {
    return hexStr
  }
}
// RGB 颜色 转 HEX 颜色
const rgbToHex = (r, g, b) => {
  let hex = ((r << 16) | (g << 8) | b).toString(16)
  return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
}
// HEX 转 RGB 颜色
const hexToRgb = (hex) => {
  hex = parseColor(hex)
  let rgb = []
  for (let i = 1; i < 7; i += 2) {
    rgb.push(parseInt('0x' + hex.slice(i, i + 2)))
  }
  return rgb
}

const isShow = ref(false)
const show = () => {
  isShow.value = true
}
const close = () => {
  isShow.value = false
}
const toggle = () => {
  isShow.value = !isShow.value
}

defineExpose({
  show,
  close,
  toggle
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.mzl-color-picker {
  min-width: 120px;
  width: 190px;
  padding: 8px;
  background: #fff;
  box-shadow: 0 0 5px rgb(0 0 0 / 15%);
  .mzl-color-picker-hd {
    display: flex;
    .hd-color-preview {
      flex: 1;
      background-color: v-bind(showColor);
    }
    .default-color-text {
      flex: 1;
      height: 32px;
      line-height: 32px;
      text-align: center;
      margin-left: 10px;
      border: 1px solid #d9d9d9;
      cursor: pointer;
    }
  }
  .mzl-color-picker-bd {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .t-color {
      li {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin: 0 2px;
      }
      li:hover {
        transform: scale(1.3);
        cursor: pointer;
      }
    }
    .color-panel {
      li {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin: 0 2px;
        ul {
          li {
            margin: 0;
          }
          li:hover {
            transform: scale(1.3);
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
