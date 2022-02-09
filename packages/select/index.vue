<template>
	<div :class="selectClass">
		<div :class="selectInputClass" @click="handleSelect">
			<input type="text" readonly :placeholder="placeholder" @blur="blur" v-model="updateModelVal">
			<i :class="iconClass"></i>
		</div>
		<div class="mzl-select-option" :style="optionStyles">
			<div class="mzl-select-option-find" :style="isOpenStyles">
				<ul>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
					<li>sdsdsdsdsdss</li>
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
	import { ref, computed, reactive } from 'vue'
	const props = defineProps({
		updateModelVal:String,
		placeholder:String,
		size:{
			type:String,
			default:"default"
		}
	})
	const flag = ref(false)
	const state = reactive({
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
			`mzl-select-${props.size}`
		]
	})
	// select input class
	const selectInputClass = computed(()=>{
		return [
			`mzl-select-input-${props.size}`
		]
	})
	// isopen styles

	const blur = () => {
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
	const handleSelect = () =>{
		flag.value = !flag.value
		if(flag.value){
			const n = new Promise((resolve, reject) => {
				setTimeout(()=>{
					isOpenStyles.height = '180px'
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
	
	const {isOpenStyles, optionStyles} = state
</script>

<style lang="scss" scoped>
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
		
		input::placeholder {
		  color:    #c6c8cc;
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
		.mzl-select-option-find{
			width: 100%;
			max-height: 180px;
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
}
</style>
