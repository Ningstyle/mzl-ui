<template>
  <div class="mzl-progress">
    <div v-if="progressType === 'line'" class="mzl-progress-default">
      <div :class="backClass" :style="{ height: progressDefaultStyle.height }">
        <div
          :class="speedClass"
          :style="{
            width: progressDefaultStyle.width,
            lineHeight: progressDefaultStyle.lineHeight,
            backgroundColor: progressDefaultStyle.backgroundColor,
            animationDuration: progressDefaultStyle.animationDuration,
          }"
        >
          <span v-show="isShowText">
            <slot>
              {{ formatPercent.text }}
            </slot>
          </span>
        </div>
      </div>
      <div class="mzl-progress-status" v-show="!isShowText">
        <span>
          <slot>
            {{ formatPercent.text }}
          </slot>
        </span>
      </div>
    </div>
    <div
      v-else
      class="mzl-progress-default-circle"
      :style="{ width: `${circleSize}px`, height: `${circleSize}px` }"
    >
      <svg
        :style="{ width: `${circleSize}px`, height: `${circleSize}px` }"
        viewbox="0 0 100 100"
      >
        <circle
          stroke="#dcdcdc"
          :style="progressDefaultStyle"
          :stroke-dasharray="formatPercent.bgCircle"
          :stroke-dashoffset="formatPercent.dashoffset"
        ></circle>
        <circle
          :class="speedClass"
          :stroke="progressBg"
          :style="progressDefaultStyle"
          :stroke-dasharray="formatPercent.progressCircle"
          :stroke-dashoffset="formatPercent.dashoffset"
        ></circle>
      </svg>

      <div v-if="isShowText" class="mzl-progress-circle-slot" :style="progressDashboardStyle">
        <slot>
          {{ progressCircleText }}
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import {
  defineProps,
  reactive,
  ref,
  computed,
  useSlots,
  onMounted,
  watch,
  onUpdated,
} from "vue";
export default {
  name: "mProgress",
};
</script>
<script setup>
const props = defineProps({
  // 百分比
  percent: {
    type: Number,
    default: 0,
  },
  // circle-&-line
  progressType: {
    type: String,
    default: "line",
  },
  // line-progress-height
  progressHeight: {
    type: Number,
    default: 16,
  },
  // circle-width-height
  circleSize: {
    type: Number,
    default: 200,
  },
  // circle-height
  circleHeight: {
    type: Number,
    default: 8,
  },
  // is display progress text
  isShowText: {
    type: Boolean,
    default: false,
  },
  // SUCCESS
  // FAIL
  // OTHER
  currentStatus: {
    type: String,
    default: "",
  },
  // progress background-color
  bgColor: {
    type: [String, Function],
    default: "",
    // #09b63d
  },
  // progress animation durition
  progressSpeed: {
    type: Number,
    default: 3,
  },
  // is display animation progress
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // is display progress borderRadius
  roundCorner: Boolean,
  // set define text percent
  setPercentText: {
    type: Function,
    default: (percent) => `${percent >= 100 ? 100 : percent}%`,
  },
});
const progressCircleText = computed(() => {
  return props.percent >= 100 ? 100 + "%" : props.percent + "%";
});
const backClass = computed(() => {
  return ["mzl-progress-back", props.roundCorner ? "mzl-progress-b-r" : ""];
});
const speedClass = computed(() => {
  return props.progressType === "line"
    ? [
        "mzl-progress-speed",
        props.isAnimation ? "mzl-progress-animation" : "",
        props.roundCorner ? "mzl-progress-b-r" : "",
      ]
    : [
        "mzl-progress-circle",
        props.isAnimation ? "mzl-progress-circle-animation" : "",
        props.roundCorner ? "mzl-progress-circle-b-r" : "",
      ];
});
let girth = "";
const formatPercent = computed(() => {
  if (props.progressType === "line") {
    return {
      text: props.setPercentText(props.percent),
      width: props.percent >= 100 ? 100 + "%" : props.percent + "%",
    };
  } else {
    let circlePercent = props.percent >= 100 ? 100 : props.percent;
    const percentCircle = circlePercent / 100;
    const perimeter =
      Math.PI * 2 * (props.circleSize / 2 - props.circleHeight / 2);
    girth = perimeter;
    if (props.progressType === "dashboard") {
      return {
        bgCircle: `${perimeter / 2}`,
        progressCircle: `${(perimeter / 2) * percentCircle},${perimeter / 2}`,
        dashoffset: `-${perimeter / 2}`,
      };
    } else {
      return circlePercent >= 100
        ? {
            bgCircle: perimeter,
            progressCircle: `${perimeter * percentCircle} 0`,
          }
        : {
            bgCircle: perimeter,
            progressCircle: `${perimeter * percentCircle} ${
              perimeter * (1 - percentCircle)
            }`,
          };
    }
  }
});
const progressDashboardStyle = computed(()=>{
  if (props.progressType === "dashboard") {
    return {
      top: '40%'
    }
  }
  return {}
})
const progressDefaultStyle = computed(() => {
  if (props.progressType === "line") {
    return {
      width: formatPercent.value.width,
      height: props.progressHeight + "px",
      lineHeight: props.progressHeight - 1 + "px",
      backgroundColor: progressBg.value,
      animationDuration: props.progressSpeed + "s",
    };
  } else {
    const styleObj = {
      cx: props.circleSize / 2,
      cy: props.circleSize / 2,
      r: props.circleSize / 2 - props.circleHeight / 2,
      strokeWidth: props.circleHeight,
      fill: "none",
      transform: `matrix(0,-1,1,0,0,${props.circleSize})`,
      animationDuration: props.progressSpeed + "s",
    }
    if (props.progressType === 'dashboard') {
      delete styleObj.transform
    }
    return styleObj
  }
});
const progressBg = computed(() => {
  let color;
  if (props.bgColor && typeof props.bgColor === 'string') {
    return props.bgColor;
  } else if (props.bgColor && typeof props.bgColor === 'function') {
    return props.bgColor(props.percent)
  } else {
    switch (props.currentStatus) {
      case "SUCCESS":
        color = "#09b63d";
        break;
      case "FAIL":
        color = "#ec3437";
        break;
      case "OTHER":
        color = "#f57b29";
        break;
      default:
        color = "#0e80eb";
    }
    return color;
  }
});
onUpdated(()=>{
  const { progressType, isAnimation } = props;
  if (progressType === "circle" && isAnimation) {
    findNoLinkSheet();
    addKeyframes();
  }
})
const animationArr = `100% {stroke-dasharray: ${
  formatPercent.value
};stroke-dashoffset: ${-girth};}`;
let sheetsIndex = "";
const addKeyframes = () => {
  const styleSheets = document.styleSheets;
  if (
    styleSheets[0].cssRules[0][0] &&
    styleSheets[0].cssRules[0][0].parentRule &&
    styleSheets[0].cssRules[0][0].parentRule.name === "rotateAnimation"
  ) {
    return;
  }
  const Keyframes = `@keyframes rotateAnimation {${animationArr}}`;
  if (styleSheets[sheetsIndex].appendRule) {
    styleSheets[sheetsIndex].insertRule = styleSheets[sheetsIndex].appendRule;
  }
  styleSheets[sheetsIndex].insertRule(Keyframes);
};
const findNoLinkSheet = () => {
  const styleSheets = document.styleSheets;
  let ssLength = styleSheets.length;
  for (let i = 0; i < ssLength; i++) {
    try {
      styleSheets[i].cssRules || styleSheets[i].rules;
      if (!styleSheets[i].cssRules && !styleSheets[i].rules) {
        continue;
      }
    } catch {
      continue;
    }
    sheetsIndex = i;
    break;
  }
};
</script>

<style scoped lang="scss">
.mzl-progress-default {
  width: 100%;
  display: flex;
  align-items: center;
  color: #505050;
  font-size: 14px;
  .mzl-progress-back {
    height: 8px;
    display: flex;
    align-items: center;
    background-color: #dcdcdc;
    overflow: hidden;
    position: relative;
    flex-grow: 1;
    .mzl-progress-speed {
      position: absolute;
      left: 0;
      top: 0;
      background-color: #0e80eb;
      height: 100%;
      text-align: right;
      white-space: nowrap;
      transition: width 0.6s ease;
      display: inline-block;
      span {
        color: #fff;
        font-size: 12px;
        padding-right: 5px;
      }
    }
  }
  .mzl-progress-status {
    min-width: 50px;
    padding-left: 8px;
    line-height: 1;
  }
}
.mzl-progress-default-circle {
  display: inline-block;
  position: relative;
  .mzl-progress-circle-slot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
  }
}
.mzl-progress-circle {
  -webkit-transition: stroke-dasharray 0.25s;
  transition: stroke-dasharray 0.25s;
}
.mzl-progress-b-r {
  border-radius: 100px;
}
.mzl-progress-circle-b-r {
  stroke-linecap: round;
}
.mzl-progress-animation {
  animation: infiniteLine 3s ease-out infinite;
}
.mzl-progress-circle-animation {
  animation: rotateAnimation 1.5s linear infinite;
}
// @keyframes rotateAnimation {
//   100% {
//     stroke-dasharray: 51, 200;
//     stroke-dashoffset: -251;
//   }
// }

@keyframes infiniteLine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>