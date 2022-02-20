<template>
  <div :class="[`mzl-dropdown-${size}`,customClass]" @mouseover="mouseover" @mouseleave="mouseleave" @click="handleClick">
    <div :class="[`mzl-dropdown-${size}-menu`]">
			<slot name="Img"></slot><span>{{title}}</span> <i class="m-icon-arrow-down"></i>
		</div>
		<div class="mzl-dropdown-item">
			<div class="mzl-dropdown-item-child" :style="isOpenStyles">
				<ul>
					<li v-for="(item,index) in options" :key="index" @click.stop="handleChange(item,index)">
						<i :class="item.icon"></i>
						{{item.label}}
					</li>
				</ul>
			</div>
		</div>
  </div>
</template>
<script>
export default{
  name:"m-dropdown"
}
</script>
<script setup>
import {computed,ref,reactive,useSlots} from 'vue'
const proprs = defineProps({
	title:String,
	trigger:{
		type:String,
		default:"hover"
	},
	options:{
		type:Array,
		default:()=>{
			return []
		}
	},
	size:{
		type:String,
		default:'default'
	},
	customClass:String
})
const $slot = useSlots()
const flag = ref(false)
const emit = defineEmits(['change'])
const state = reactive({
	isOpenStyles:{
		height:'0px',
		display:"none"
	}
})
const mouseover = () =>{
	if(proprs.trigger=='hover'){
		new Promise((resolve, reject) => {
			setTimeout(()=>{
				isOpenStyles.height = 'auto'
			},20)
			resolve();
		}).then(() => {
			isOpenStyles.display = 'block'
		});
	}
}
const mouseleave = () =>{
	if(proprs.trigger=='hover'){
		new Promise((resolve, reject) => {
			setTimeout(()=>{
				isOpenStyles.display = 'none'
			},20)
			resolve();
		}).then(() => {
			isOpenStyles.height = '0px'
		});
	}
}
const handleChange = (item,index)=>{
	emit('change',item,index)
	isOpenStyles.height = '0px'
	isOpenStyles.display = 'none'
}
const handleClick = () =>{
	if(proprs.trigger=='click'){
		if(isOpenStyles.height == '0px'){
			isOpenStyles.height = 'auto'
			isOpenStyles.display = 'block'
		}else{
			isOpenStyles.height = '0px'
			isOpenStyles.display = 'none'
		}
	}
}
const { isOpenStyles } = state
</script>

<style lang="scss" scoped>
.mzl-dropdown-default{
	display: inline-block;
	box-sizing: border-box;
	position: relative;
	text-align: center;
	user-select:none;
	.mzl-dropdown-default-menu{
		font-size: 14px;
		color:#0e80eb;
		cursor: pointer;
		line-height: 35px;
	}
	.mzl-dropdown-default-menu :slotted(img) {
		width: 35px;
		height: 35px;
		float: left;
		border-radius: 50%;
		margin-right: 5px;
	}
	.mzl-dropdown-item{
		position: absolute;;
		height: auto;
		overflow: hidden;
		box-sizing: border-box;
		left:0;
		z-index: 99;
		.mzl-dropdown-item-child{
			width: max-content;
			max-height: 192px;
			height: 100%;
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
			  right: 42.27%;
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
			  right:41%;
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
				padding:3px 0px;
				box-sizing: border-box;
				margin:0;
				li{
					list-style: none;
					height: 30px;
					line-height: 30px;
					width: 100%;
					text-align: center;
					font-size: 14px;
					color:#626262;
					cursor: pointer;
					padding:0px 15px;
					box-sizing: border-box;
					font-weight: initial;
					i{
						float: left;
						margin-right:4px;
					}
					&:hover{
						background:rgba(96, 98, 102,.1);
						color:#0e80eb
					}
				}
			}
			ul::-webkit-scrollbar {
				width: 1px;
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

.mzl-dropdown-small{
	display: inline-block;
	box-sizing: border-box;
	position: relative;
	text-align: center;
	user-select:none;
	.mzl-dropdown-small-menu{
		font-size: 13px;
		color:#0e80eb;
		cursor: pointer;
		line-height: 30px;
	}
	.mzl-dropdown-small-menu :slotted(img) {
		width: 30px;
		height: 30px;
		float: left;
		border-radius: 50%;
		margin-right: 4px;
	}
	.mzl-dropdown-item{
		position: absolute;;
		height: auto;
		overflow: hidden;
		box-sizing: border-box;
		left:0;
		z-index: 999;
		.mzl-dropdown-item-child{
			width: max-content;
			max-height: 182px;
			height: 100%;
			position: relative;
			margin-top:13px;
			padding:3px 0px;
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
			  right: 42.27%;
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
			  right:41%;
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
				padding:3px 0px;
				box-sizing: border-box;
				margin:0;
				li{
					list-style: none;
					height: 28px;
					line-height: 28px;
					width: 100%;
					text-align: center;
					font-size: 13px;
					color:#626262;
					cursor: pointer;
					padding:0px 10px;
					box-sizing: border-box;
					font-weight: initial;
					i{
						float: left;
						margin-right:3px;
					}
					&:hover{
						background:rgba(96, 98, 102,.1);
						color:#0e80eb
					}
				}
			}
			ul::-webkit-scrollbar {
				width: 1px;
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

.mzl-dropdown-mini{
	display: inline-block;
	box-sizing: border-box;
	position: relative;
	text-align: center;
	user-select:none;
	.mzl-dropdown-mini-menu{
		font-size: 12px;
		color:#0e80eb;
		cursor: pointer;
		line-height: 25px;
	}
	.mzl-dropdown-mini-menu :slotted(img) {
		width: 25px;
		height: 25px;
		float: left;
		border-radius: 50%;
		margin-right: 3px;
	}
	.mzl-dropdown-item{
		position: absolute;;
		height: auto;
		overflow: hidden;
		box-sizing: border-box;
		left:0;
		z-index: 99;
		.mzl-dropdown-item-child{
			width: max-content;
			max-height: 172px;
			height: 100%;
			position: relative;
			margin-top:13px;
			padding:2px 0px;
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
			  right: 42.27%;
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
			  right:41%;
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
				padding:3px 0px;
				box-sizing: border-box;
				margin:0;
				li{
					list-style: none;
					height: 25px;
					line-height: 25px;
					width: 100%;
					text-align: center;
					font-size: 12px;
					color:#626262;
					cursor: pointer;
					padding:0px 7px;
					box-sizing: border-box;
					font-weight: initial;
					i{
						float: left;
						margin-right:3px;
					}
					&:hover{
						background:rgba(96, 98, 102,.1);
						color:#0e80eb
					}
				}
			}
			ul::-webkit-scrollbar {
				width: 1px;
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
</style>