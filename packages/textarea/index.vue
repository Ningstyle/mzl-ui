<template>
  <div :class="['mzl-textarea-default',customClass,{'mzl-textarea-disabled':disabled}]">
    <textarea :form="form" :cols="cols" :rows="rows" :placeholder="placeholder" :maxlength="maxlength" :value="modelValue" @input="input" ref="textareaMzl" :disabled="disabled" :style="tStyle" @focus="focus" @blur="blur" :readonly="readonly"></textarea>
    <div class="max-length-box" v-if="maxlength!=undefined&&maxlength>0">{{`${n}/${maxlength}`}}</div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default{
  name:"mTextarea"
}
</script>
<script setup>
const emit = defineEmits(['update:modelValue','focus','blur','input'])
const props = defineProps({
  modelValue:String,
  customClass:String,
  placeholder:String,
  disabled:Boolean,
  resize:{
    type:Boolean,
    default:true
  },
  form:String,
  rows:{
    type:Number,
    default:4
  },
  cols:{
    type:Number,
    default:50
  },
  readonly:Boolean,
  maxlength:Number,
  focusColor:{
    type:String,
    default:"#0e80eb"
  }
})
const textareaMzl = ref(null)
const n = ref(props.modelValue.length||0)
const tStyle = ref({'resize':props.resize?'auto':'none','border-color':''})
const input = ()=>{
  emit('update:modelValue',textareaMzl.value.value)
  n.value = textareaMzl.value.value.length
  if(n.value>=props.maxlength){
    n.value = props.maxlength
  }
  emit('input',textareaMzl.value.value)
}
const focus = (e)=>{
  emit('focus',e.target.value)
  tStyle.value['border-color'] = props.focusColor
}
const blur = (e)=>{
  emit('blur',e.target.value)
  tStyle.value['border-color'] = ""
}
</script>

<style lang="scss" scoped>
.mzl-textarea-default{
  width:auto;
  height:auto;
  display: inline-block;
  overflow: hidden;
  position: relative;
  textarea{
    padding:0;
    outline: none;
    border:1px solid #dcdfe6f6;
    transition: all .2s ease;
    border-radius: 3px;
    padding:8px 8px 10px 8px;
    box-sizing: border-box;
    font-size:14px;
    color:#606266;
    font-family: auto;
    &:focus,&:active,&:focus-visible{
      border:1px solid #0e80eb
    }
    &:focus-visible{
      border:1px solid #0e80eb
    }
  }
  .max-length-box{
    font-size:14px;
    color:#606266;
    position: absolute;
    bottom:10px;
    right:10px;
  }
  textarea::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 13px;
  }
  textarea::-webkit-scrollbar {
    width: 5px;
    height: 1px;
  }
    
  textarea::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #d5d5d6;
  }
    
  textarea::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #fff;
  }
}
.mzl-textarea-disabled{
  textarea{
    cursor: no-drop;
    color:#c3bfbf;
    &:focus,&:active,&:focus-visible{
      border:1px solid #dcdfe6f6
    }
    &:focus-visible{
      border:1px solid #dcdfe6f6
    }
  }
  .max-length-box{
    color:#c3bfbf
  }
}
</style>