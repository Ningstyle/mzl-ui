<template>
	<div :class="selectClass">
		<div :class="selectInputClass" @click="handleSelect">
			<input type="text" :readonly="!searchable" :placeholder="selVal==''?placeholder:selVal" @blur="blur" ref="selInp" :class="[selVal==''?'mzl-select-input':'mzl-select-input-value']" :disabled="disabled" @input="input" v-model="selVal">
			<i :class="iconClass"></i>
		</div>
		<div class="mzl-select-option" :style="optionStyles">
			<div class="mzl-select-option-find" :style="isOpenStyles">
				<ul>
					<li class="mzl-select-option-li" v-for="(item,index) in optionsData" :key="index" @mousedown="selChange(item,index)" :class="{'mzl-select-active':activeIndex == index||selVal==item[labelFiled]||item.selected,'mzl-select-disabled':item.disabled}">{{item[labelFiled]}} <i class="iconfont m-icon-select-bold" v-if="multiple&&item.selected"></i></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"m-select"
	}
</script>
<script setup>
	import { ref, computed, reactive,onMounted,watch} from 'vue'
	const emit = defineEmits(['update:modelValue','change'])
	const props = defineProps({
		modelValue:String|Array,
		placeholder:String,
		multiple:Boolean,
		disabled:Boolean,
		searchable:Boolean,
		size:{
			type:String,
			default:"default"
		},
		options:{
			type:Array,
			default:()=>{
				return []
			}
		},
		//默认需要显示的label字段
		labelFiled:{
			type:String,
			default:'label'
		},
		//默认需要显示的value字段
		valueFiled:{
			type:String,
			default:'value'
		},
		multiple:Boolean
	})
	props.options.forEach((item,index)=>{
		item.selected = false
	})
	const flag = ref(false)
	const activeIndex = ref(-1)
	const selInp = ref(null)
	const optionsData = ref(props.options||[])
	const selVal = ref(props.modelValue!=""?props.options.filter(item=>{return item[props.valueFiled] == props.modelValue})[0][props.labelFiled]:"")
	let state = reactive({
		isOpenStyles:{
			'height':'0px'
		},
		optionStyles:{
			'display':'none'
		}
	})
	// icon class
	const iconClass = computed(()=>{
		return [
			'select-icon iconfont m-icon-arrow-down',
			flag.value?'select-icon-tranfromOut':'select-icon-tranfromIn'
		]
	})
	// selece class
	const selectClass = computed(()=>{
		return [
			`mzl-select-${props.size}`,
			props.disabled?`mzl-select-${props.size}-disabled`:"",
		]
	})
	// select input class
	const selectInputClass = computed(()=>{
		return [
			`mzl-select-input-${props.size}`,
			props.disabled?`mzl-select-input-${props.size}-disabled`:"",
		]
	})
	// isopen styles

	const blur = (e) => {
		if(!props.multiple){
			flag.value = false
			new Promise((resolve, reject) => {
				setTimeout(()=>{
					optionStyles.display = 'none'
				},60)
				resolve();
			}).then(() => {
				isOpenStyles.height = '0px'
			});
		}
		
	}
	
	const input = (e)=>{
		selVal.value = e.target.value
		optionsData.value = []
		let filterList = props.options.filter(item=>{return item[props.labelFiled].indexOf(e.target.value)!=-1})
		filterList.forEach((item,index)=>{
			optionsData.value.push(item)
		})	
	}
	const handleSelect = () =>{
		if(!props.disabled){
			flag.value = !flag.value
			if(flag.value){
				selInp.value.focus()
				const n = new Promise((resolve, reject) => {
					setTimeout(()=>{
						isOpenStyles.height = props.size=="mini"?'185px':'211px'
					},20)
					resolve();
				}).then(() => {
						optionStyles.display = 'block'
				});
				
			}else{
				new Promise((resolve, reject) => {
					setTimeout(()=>{
						optionStyles.display = 'none'
					},60)
					resolve();
				}).then(() => {
					isOpenStyles.height = '0px'
				});
			}
		}
	}
	// 选择事件
	const selChange = (item,index) =>{
		if(!props.multiple){
			if(!item.disabled){
				activeIndex.value = index
				selVal.value = item[props.labelFiled]
				emit('update:modelValue', item[props.valueFiled])
				emit('change',item,index)
				flag.value = false
				new Promise((resolve, reject) => {
					setTimeout(()=>{
						optionStyles.display = 'none'
					},60)
					resolve();
				}).then(() => {
					isOpenStyles.height = '0px'
				});
			}
		}else{
			if(!item.disabled){
				item.selected = !item.selected
			}
		}
	}

	const {isOpenStyles, optionStyles} = state
</script>

<style lang="scss" scoped>
	// 默认
.mzl-select-default{
	width:100% ;
	height: auto;
	margin:0;
	position: relative;
	.mzl-select-input-default{
		width:100% ;
		height: auto;
		margin:0;
		box-sizing: border-box;
		position: relative;
		input{
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
			&:focus{
				border-color: #0e80eb;
			}
		}
		.mzl-select-input::placeholder {
		  color:    #c6c8cc;
		  font-size: 14px;
		}
		.mzl-select-input-value::placeholder{
			color:    #626262;
			font-size: 14px;
		}
		.select-icon{
			position: absolute;
			right: 10px;
			top: 11px;
			color: #94969b;
			transition: all 0.2s ease;
			cursor: pointer;
			transform-origin:50% 50%;
		}
		.select-icon-tranfromOut{
			transform: rotate(180deg);
		}
		.select-icon-tranfromIn{
			transform: rotate(0deg);
		}
	}
	.mzl-select-option{
		width: 100%;
		height: auto;
		position: absolute;
		bottom:0;
		border-radius: 4px;
		box-sizing: border-box;
		background-color: #fff;
		top:38px;
		z-index: 99;
		.mzl-select-option-find{
			width: 100%;
			max-height: 211px;
			height: 0px;
			position: relative;
			margin-top:13px;
			padding:4px 0px;
			box-sizing: border-box;
			background-color: #FFFFFF;
			border: 1px solid #dcdfe6f6;
			border-radius: 3px;
			transition: all .1s ease;
			box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
			&:before{
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -15.7px;
        right: 50.27%;
        padding:0;
        border-bottom:8px solid #FFFFFF;
        border-top:8px solid transparent;
        border-left:8px solid transparent;
        border-right:8px solid transparent;
        display: block;
        content:'';
        z-index: 12;
			}
			&:after{
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -18px;
        right:50%;
        padding:0;
        border-bottom:9px solid #dcdfe6f6;
        border-top:9px solid transparent;
        border-left:9px solid transparent;
        border-right:9px solid transparent;
        display: block;
        content:'';
        z-index:10
			}
			ul{
				width: 100%;
				height: 100%;
				overflow-y: auto;
				margin:0;
				padding:0;
				list-style: none;
				li{
					padding:0 12px;
					line-height: 40px;
					font-size:14px;
					cursor: pointer;
					color: #626262;
					user-select:none;
					font-weight: 550;
					i{
						float: right;
					}
					&:hover{
						background:rgba(96, 98, 102,.1)
					}
				}
				li.mzl-select-active{
					color:#0e80eb
				}
				li.mzl-select-disabled{
					color: #9d9d9d;
					cursor: no-drop;
					&:hover{
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
.mzl-select-small{
	width:100% ;
	height: auto;
	margin:0;
	position: relative;
	.mzl-select-input-small{
		width:100% ;
		height: auto;
		margin:0;
		box-sizing: border-box;
		position: relative;
		input{
			width: 100%;
			font-size: 14px;
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
			&:focus{
				border-color: #0e80eb;
			}
		}
		.mzl-select-input::placeholder {
		  color:    #c6c8cc;
		  font-size: 14px;
		}
		.mzl-select-input-value::placeholder{
			color:    #626262;
			font-size: 14px;
		}
		.select-icon{
			position: absolute;
			right: 10px;
			top: 10px;
			color: #94969b;
			transition: all 0.2s ease;
			cursor: pointer;
			transform-origin:50% 50%;
		}
		.select-icon-tranfromOut{
			transform: rotate(180deg);
		}
		.select-icon-tranfromIn{
			transform: rotate(0deg);
		}
	}
	.mzl-select-option{
		width: 100%;
		height: auto;
		position: absolute;
		bottom:0;
		border-radius: 4px;
		box-sizing: border-box;
		background-color: #fff;
		top:38px;
		z-index: 99;
		.mzl-select-option-find{
			width: 100%;
			max-height: 211px;
			height: 0px;
			position: relative;
			margin-top:13px;
			padding:4px 0px;
			box-sizing: border-box;
			background-color: #FFFFFF;
			border: 1px solid #dcdfe6f6;
			border-radius: 3px;
			transition: all .1s ease;
			box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
			&:before{
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -15.7px;
        right: 50.27%;
        padding:0;
        border-bottom:8px solid #FFFFFF;
        border-top:8px solid transparent;
        border-left:8px solid transparent;
        border-right:8px solid transparent;
        display: block;
        content:'';
        z-index: 12;
			}
			&:after{
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -18px;
        right:50%;
        padding:0;
        border-bottom:9px solid #dcdfe6f6;
        border-top:9px solid transparent;
        border-left:9px solid transparent;
        border-right:9px solid transparent;
        display: block;
        content:'';
        z-index:10
			}
			ul{
				width: 100%;
				height: 100%;
				overflow-y: auto;
				margin:0;
				padding:0;
				list-style: none;
				font-weight: 550;
				li{
					padding:0 12px;
					line-height: 40px;
					font-size:14px;
					cursor: pointer;
					color: #626262;
					user-select:none;
					i{
						float: right;
					}
					&:hover{
						background:rgba(96, 98, 102,.1)
					}
				}
				li.mzl-select-active{
					color:#0e80eb
				}
				li.mzl-select-disabled{
					color: #9d9d9d;
					cursor: no-drop;
					&:hover{
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
.mzl-select-mini{
	width:100% ;
	height: auto;
	margin:0;
	position: relative;
	.mzl-select-input-mini{
		width:100% ;
		height: auto;
		margin:0;
		box-sizing: border-box;
		position: relative;
		input{
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
			&:focus{
				border-color: #0e80eb;
			}
		}
		.mzl-select-input::placeholder {
		  color:    #c6c8cc;
		  font-size: 12px;
		}
		.mzl-select-input-value::placeholder{
			color:    #626262;
			font-size: 12px;
		}
		.select-icon{
			position: absolute;
			right: 10px;
			top: 8px;
			color: #94969b;
			transition: all 0.2s ease;
			cursor: pointer;
			transform-origin:50% 50%;
		}
		.select-icon-tranfromOut{
			transform: rotate(180deg);
		}
		.select-icon-tranfromIn{
			transform: rotate(0deg);
		}
	}
	.mzl-select-option{
		width: 100%;
		height: auto;
		position: absolute;
		bottom:0;
		border-radius: 4px;
		box-sizing: border-box;
		background-color: #fff;
		top:38px;
		z-index: 99;
		.mzl-select-option-find{
			width: 100%;
			max-height: 185px;
			height: 0px;
			position: relative;
			margin-top:13px;
			padding:4px 0px;
			box-sizing: border-box;
			background-color: #FFFFFF;
			border: 1px solid #dcdfe6f6;
			border-radius: 3px;
			transition: all .1s ease;
			box-shadow:0 2px 12px 0 rgba(0,0,0,.1);
			&:before{
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -15.7px;
        right: 50.27%;
        padding:0;
        border-bottom:8px solid #FFFFFF;
        border-top:8px solid transparent;
        border-left:8px solid transparent;
        border-right:8px solid transparent;
        display: block;
        content:'';
        z-index: 12;
			}
			&:after{
        box-sizing: content-box;
        width: 0px;
        height: 0px;
        position: absolute;
        top: -18px;
        right:50%;
        padding:0;
        border-bottom:9px solid #dcdfe6f6;
        border-top:9px solid transparent;
        border-left:9px solid transparent;
        border-right:9px solid transparent;
        display: block;
        content:'';
        z-index:10
			}
			ul{
				width: 100%;
				height: 100%;
				overflow-y: auto;
				margin:0;
				padding:0;
				list-style: none;
				li{
					padding:0 12px;
					line-height: 35px;
					font-size:12px;
					cursor: pointer;
					color: #626262;
					user-select:none;
					font-weight: 550;
					i{
						float: right;
					}
					&:hover{
						background:rgba(96, 98, 102,.1)
					}
				}
				li.mzl-select-active{
					color:#0e80eb
				}
				li.mzl-select-disabled{
					color: #9d9d9d;
					cursor: no-drop;
					&:hover{
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

.mzl-select-default-disabled{
	cursor: no-drop;
	.mzl-select-input-default-disabled{
		cursor: no-drop;
		input{
			cursor: no-drop;
		}
		.mzl-select-input-value::placeholder {
		  color:#c6c8cc;
		  font-size: 14px;
		}
	}
}
.mzl-select-small-disabled{
	cursor: no-drop;
	.mzl-select-input-small-disabled{
		cursor: no-drop;
		input{
			cursor: no-drop;
			color:#c6c8cc;
		}
		.mzl-select-input-value::placeholder {
		  color:#c6c8cc;
		  font-size: 14px;
		}
	}
}
.mzl-select-mini-disabled{
	cursor: no-drop;
	.mzl-select-input-mini-disabled{
		cursor: no-drop;
		input{
			cursor: no-drop;
		}
		.mzl-select-input-value::placeholder {
		  color:#c6c8cc;
		  font-size: 12px;
		}
	}
}
input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
		color:#c6c8cc;
}
input:-moz-placeholder { /* Mozilla Firefox 4 ~ 18 */
	 color:#c6c8cc;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
	 color:#c6c8cc;
}
input:-ms-input-placeholder { /* Internet Explorer 10 ~ 11 */
	 color:#c6c8cc;
}
input::-ms-input-placeholder { /* Microsoft Edge */
	 color:#c6c8cc;
}
</style>
