<template>
  <div class="mzl-col-default"><slot></slot></div>
</template>
<script>
export default{
  name:"mCol"
}
</script>
<script setup>
import {ref} from 'vue'
const props = defineProps({
  span:{
    type:Number,
    default:24
  },
  offset:Number
})
const width = ref(props.span<=24?props.span%1==0?(100/24)*props.span+'%':'':'')
const offset = ref(props.offset<=24?props.offset%1==0?(100/24)*props.offset+'%':'':'')
</script>

<style lang="scss" scoped>
.mzl-col-default{
  width:v-bind(width);
  float: left;
  margin-left:v-bind(offset)
}
</style>