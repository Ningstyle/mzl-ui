<template>
  <div class="m-space" ref="spaceRef">
    <!-- <slot></slot> -->
  </div>
</template>
<script>
import { h, useSlots, ref, computed } from "vue";
export default {
  name: "mSpace",
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Object,
      default: [10, 10],
    },
    alignItems: {
      type: String,
      default: "center",
    },
  },
  setup(props) {
    const $slot = useSlots();
    const slotList = ref([]);
    const align = ref(props.inline ? props.alignItems : "left");
    const styles = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        gap:
          props.size.length == 2
            ? `${props.size[0]}px ${props.size[1]}px`
            : `${props.size[0]}px`,
        "flex-direction": props.inline ? "inherit" : "column",
        "align-items": align.value,
        "flex-wrap": "wrap",
        margin: `${props.size[0] / 2}px 0px`,
        width: props.inline ? "100%" : "fit-content",
      };
    });

    // style: `margin-bottom:${
    //   arr.length - 1 == index ? 0 : props.size
    // }px`,
    $slot.default().forEach((item, index, arr) => {
      slotList.value.push(
        h(
          "div",
          {
            className: "m-space-item",
            style: "width:fit-content",
          },
          item
        )
      );
    });
    return () => [
      h(
        "div",
        {
          className: "m-space-box",
          style: styles.value,
        },
        slotList.value
      ),
    ];
  },
};
</script>