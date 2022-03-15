<template>
  <div :class="[`mzl-group-input-${size}`]" :style="{'min-width':'auto'}">
    <div :class="isClass" :style="isStyle" style="">
      <i :class="['left-icon','iconfont',leftIcon]" v-if="!showPassword&&leftIcon!=''"></i>
      <input :type="inptype" @focus="focus" @blur="blur" :value="modelValue"  @input="iptChange" :disabled="disabled" @change="change" :placeholder="placeholder" :autofocus="autofocus" :readonly="readonly" :form="form"/>
       <transition name="slide-fade">
        <i class="clearable-icon iconfont m-icon-close" v-if="!showPassword&&clearable&&modelValue!=''" @click="clear"></i>
      </transition>
      <i :class="['right-icon','iconfont',rightIcon]" v-if="!showPassword&&rightIcon!=''"></i>
      <i v-if="showPassword"  :class="['password-icon','iconfont m-icon-browse']" @click="showPwd(type)"></i>
    </div>
    <slot name="btn"/>
  </div>
</template>
<script>
import { reactive, ref,computed, useSlots} from 'vue'
export default {
  name:"mInput"
}
</script>
<script setup>
const emit = defineEmits(['update:modelValue','clear','focus','blur','input','change'])
const props = defineProps({
  modelValue:String|Number,
  disabled:Boolean,
  clearable:Boolean,
  showPassword:Boolean,
  type:String,
  size:{
    type:String,
    default:'default'
  },
  leftIcon:{
    type:String,
    default:""
  },
  rightIcon:{
    type:String,
    default:""
  },
  placeholder:String,
  //当页面加载时 <input> 元素自动获得焦点
  autofocus:Boolean,
  focusColor:{
    type:String,
    default:'#0e80eb'
  },
  readonly:Boolean,
  form:String
})
const slot = useSlots()
const isStyle = ref({})
const inptype = ref(props.type)
let focusStyle = {
  'width':!!slot.btn?'auto':'100%',
  'float':!!slot.btn?'left':'auto',
  'border-radius':!!slot.btn?'4px 0 0 4px':'4px',
  'border-color':'#dcdfe6f6'
}
isStyle.value = focusStyle
const focus  = (e) =>{
  focusStyle['border-color'] = "#0e80eb"
  isStyle.value = {
  'width':!!slot.btn?'auto':'100%',
  'float':!!slot.btn?'left':'auto',
  'border-radius':!!slot.btn?'4px 0 0 4px':'4px',
  'border-color':props.focusColor
}
  emit('focus',e)
}
const blur  = (e) =>{
  isStyle.value = {
    'width':!!slot.btn?'auto':'100%',
    'float':!!slot.btn?'left':'auto',
    'border-radius':!!slot.btn?'4px 0 0 4px':'4px',
  }
  emit('blur',e)
}
const iptChange = (e) => {
  emit('update:modelValue', e.target.value)
  emit('input',e.target.value)
}
const change = (e) =>{
  emit('change',e)
}
const clear = (e) =>{
  emit('update:modelValue', "")
  emit('clear')
}
// 显示密码
const showPwd = (e) =>{
  if(inptype.value=='text'){
    inptype.value = 'password'
  }else{
    inptype.value = 'text'
  }
  
  console.log(e);
}
const isClass = computed(()=>{
  return [
    props.clearable?'mzl-input-clearable':props.size=='default'?'mzl-input-default':`mzl-input-${props.size}`,
    props.leftIcon!=""?`mzl-input-left-icon-${props.size}`:!props.clearable?props.rightIcon!=""?`mzl-input-right-icon-${props.size}`:'':'',
    props.disabled?'mzl-input-disabled':'',
    props.type=='password'?props.showPassword?`mzl-input-password-showpassword-${props.size}`:`mzl-input-password-${props.size}`:''
  ]
})
</script>
<style scoped lang="scss">
.mzl-input-default,.mzl-input-password-default,.mzl-input-password-showpassword-default,.mzl-group-input-default{
  width:100%;
  height:35px;
  border:1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
  input{
    width:100%;
    font-size:14px;
    outline:none;
    border:0;
    margin:0;
    padding:10px 10px 10px 10px;
    box-sizing: border-box;
    color:#606266;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 14px;
  }
  i.password-icon{
    position:absolute;
    right:10px;
    top:11px;
    color:#94969b;
    transition: all .2s ease;
    cursor: pointer;
  }
}
.mzl-input-password-showpassword-default{
  input{
    padding-right:30px
  }
}
.mzl-input-clearable{
  width:100%;
  height:35px;
  border:1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
  input{
    width:100%;
    font-size:14px;
    outline:none;
    border:0;
    margin:0;
    padding:10px 30px 10px 10px;
    box-sizing: border-box;
    color:#606266;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 14px;
  }
  .clearable-icon{
    position:absolute;
    right:10px;
    top:10px;
    color:#94969b;
    transition: all .2s ease;
    cursor: pointer;
  }
}
.mzl-input-small,.mzl-input-password-small,.mzl-input-password-showpassword-small,.mzl-group-input-small{
  width:100%;
  height:30px;
  border:1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
  input{
    width:100%;
    font-size:13px;
    outline:none;
    border:0;
    margin:0;
    padding:7px 30px 7px 10px;
    box-sizing: border-box;
    color:#606266
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 13px;
  }
  i.password-icon{
    position:absolute;
    right:10px;
    top:8px;
    color:#94969b;
    transition: all .2s ease;
    cursor: pointer;
  }
}
.mzl-input-password-showpassword-small{
  input{
    padding-right:30px
  }
}
.mzl-input-mini,.mzl-input-password-mini,.mzl-input-password-showpassword-mini,.mzl-group-input-mini{
  width:100%;
  height:28px;
  border:1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius:4px;
  transition: all .2s ease;
  position: relative;
  box-sizing: border-box;
  input{
    width:100%;
    font-size:12px;
    outline:none;
    border:0;
    margin:0;
    padding:6px 10px 6px 10px;
    box-sizing: border-box;
    color:#606266;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 12px;
  }
  i.password-icon{
    position:absolute;
    right:10px;
    top:7px;
    color:#94969b;
    transition: all .2s ease;
    cursor: pointer;
  }
}
.mzl-input-password-showpassword-mini{
  input{
    padding-right:30px
  }
}
.mzl-input-left-icon-default{
  height:35px;
  input{
    padding:10px 25px 10px 32px;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 14px;
  }
  .left-icon{
    position:absolute;
    left:10px;
    top:11px;
    color:#94969b;
  }
}
.mzl-input-left-icon-small{
  height:30px;
  input{
    padding:7px 25px 7px 32px;
    font-size: 13px;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 13px;
  }
  .left-icon{
    position:absolute;
    left:10px;
    top:8px;
    font-size:13px;
    color:#94969b;
  }
  .clearable-icon{
    font-size:13px;
    top:8px;
  }
}
.mzl-input-left-icon-mini{
  height:28px;
  input{
    padding:6px 25px 6px 32px;
    font-size: 12px;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 12px;
  }
  .left-icon{
    position:absolute;
    left:10px;
    top:7px;
    font-size:12px;
    color:#94969b;
  }
  .clearable-icon{
    font-size:12px;
    top:7px;
  }
}
.mzl-input-right-icon-default{
  height:35px;
  input{
    padding:10px 32px 10px 10px;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
  }
  .right-icon{
    position:absolute;
    right:10px;
    top:11px;
    color:#94969b;
  }
}
.mzl-input-right-icon-small{
  height:30px;
  input{
    padding:7px 32px 7px 10px;
    font-size: 13px;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 13px;
  }
  .right-icon{
    position:absolute;
    right:10px;
    top:8px;
    font-size:13px;
    color:#94969b;
  }
}
.mzl-input-right-icon-mini{
  height:28px;
  input{
    padding:6px 32px 6px 10px;
    font-size: 12px;
  }
  input::placeholder { /* 大部分现代浏览器 */
    color:    #c6c8cc;
    font-size: 12px;
  }
  .right-icon{
    position:absolute;
    right:10px;
    top:7px;
    font-size:12px;
    color:#94969b;
  }
}
.mzl-input-disabled{
  input{
    cursor: no-drop;
    color:#c3bfbf;
  }
  .clearable-icon{
    display:none
  }
  .left-icon{
    position:absolute;
    left:10px;
    top:10px;
    color:#c6c8cc;
  }
  .right-icon{
    position:absolute;
    right:10px;
    top:10px;
    color:#c6c8cc;
  }
}
.mzl-group-input-default{
	border: none;
	height: auto;
}
.mzl-group-input-small{
	border: none;
	height: auto;
	.mzl-input-clearable{
		height: 30px;
		.clearable-icon{
			top:7px;
			font-size: 13px;
		}
	}
}
.mzl-group-input-mini{
	border: none;
	.mzl-input-clearable{
		height: 28px;
		.clearable-icon{
			top:8px;
			font-size: 12px;
		}
	}
}
.mzl-group-input-default :deep(.mzl-button){
  padding:9px 20px !important;
	border-radius: 0 2px 2px 0;
}
.mzl-group-input-small :deep(.mzl-button){
  padding:6.6px 15px !important;
	border-radius: 0 2px 2px 0;
}
.mzl-group-input-mini :deep(.mzl-button){
	padding:7px 15px !important;
  font-size: 12px;
	border-radius: 0 2px 2px 0;
	i{
		font-size: 12px;
	}
}
input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #c6c8cc;
}
input:-moz-placeholder { /* Mozilla Firefox 4 ~ 18 */
   color:    #c6c8cc;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #c6c8cc;
}
input:-ms-input-placeholder { /* Internet Explorer 10 ~ 11 */
   color:    #c6c8cc;
}
input::-ms-input-placeholder { /* Microsoft Edge */
   color:    #c6c8cc;
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>