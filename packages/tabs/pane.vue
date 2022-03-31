<template>
  <div class="tab_pane" v-if="shouldRender" v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mTabPane",
};
</script>

<script setup>
import {
  inject,
  getCurrentInstance,
  markRaw,
  reactive,
  ref,
  useSlots,
  watch,
  onBeforeUnmount,
  computed,
} from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  label: {
    type: [String,Object],
    default: "",
  },
  icon:{
     type: String,
  },
  disabled:{
    type:Boolean,
    default:false
  },
   closable:{
     type:Boolean,
     default:false
  },
  lazy:{
     type:Boolean,
     default:false
  },
});
const instance = getCurrentInstance();
const index = ref("");
const loaded=ref(false)
const tabsContext = inject("tabsContext");

const active = computed(
  () => tabsContext.currentName.value === (props.name || index.value)
);

const shouldRender = computed(
  () => !props.lazy || loaded.value || active.value
)

watch(active,(val)=>{
  if (val) loaded.value = true
})
tabsContext.updatePaneState(
  reactive({
    uid: instance.uid,
    instance: markRaw(instance),
    slots:instance.slots,
    props,
    index,
    active,
  })
);
</script>

<style lang="scss" scoped>
.tab_pane {
  padding: 5px;
  &::before,
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>