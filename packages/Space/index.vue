<template>
      <render />
</template>
<script lang="ts">
export default {
  name: "mSpace",
};
</script>

<script setup lang="ts">
import { h, useSlots, ref, computed,unref,withDefaults } from "vue";



interface Props{
  inline?:boolean,
  size?:[number,number],
  alignItems?:string,
  direction?:'horizontal'| 'vertical',

}


const props =withDefaults(defineProps<Props>(),{
  inline:true,
  size:[10, 10],
  alignItems:'center',
  direction:'horizontal'
}) 
  
const $slot = useSlots();
const slotList = ref([]);
const align = ref(props.inline ? props.alignItems : "left");
const styles = computed(() => {
  return {
    gap:
      props.size.length == 2
        ? `${props.size[0]}px ${props.size[1]}px`
        : `${props.size[0]}px`,
    margin: `${props.direction==='horizontal'?`0px ${props.size[1] / 2}px `:`${props.size[0] / 2}px 0px`}`,
    width: props.inline ? "100%" : "fit-content",
  };
});


// verticalSize:垂直
// horizontalSize:水平

// style: `margin-bottom:${
//   arr.length - 1 == index ? 0 : props.size
// }px`,
$slot.default().forEach((item, index, arr) => {
  slotList.value.push(
    h(
      "div",
      {
        className: "m-space-item",
        style: unref(styles),
      },
      item
    )
  );
});


const render=()=>{
  return h('div',{
        className: "m-space",
        style: {
          display:props.direction ==='horizontal'?'inline-flex': 'flex',
          "flex-direction": props.direction ==='horizontal'? "inherit":"column",
        },
      },unref(slotList))
}

</script>

<style lang="scss">
.m-space{
  
  .m-space-item{

  }
}
</style>