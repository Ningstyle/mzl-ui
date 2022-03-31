<template>
	<p class="titlep">所有图标</p>
	<div class="">
		<m-input v-model="keywords" leftIcon="m-icon-search" placeholder="输入图标关键词进行搜索" @input="search"></m-input>
	</div>
	<div class="iconListBox">
		<ul>
			<li v-for="(item,index) in IconListData" :key="index" @click="copyIconNane(item.className)">
				<i class="iconfont" :class="item.className"></i>
				<span>{{item.className}}</span>
			</li>
		</ul>
	</div>
  <input type="text" id="inputCopy" style="opacity: 0;">
</template>

<script setup>
  import Message from '../../message/index'
	import {ref,reactive} from 'vue'
	import iconList from '@/const/iconList.js'
	const keywords = ref('')
	const IconListData = ref(iconList)
	const search = (e)=>{
		IconListData.value = []
		iconList.filter(item=>{
			if(item.className.indexOf(e)!=-1){
				IconListData.value.push(item)
			}
		})
	}
  const copyIconNane = (name) =>{
    const input = document.getElementById('inputCopy')
    input.value = name
    input.select()
    if(document.execCommand('copy')){
      document.execCommand('copy')
      Message({
        type: 'success',
        text: '复制成功'
      })
    }else{
      Message({
        type: 'error',
        text: '复制失败'
      })
    }
    
  }
</script>

<style lang="scss" scope>
	.iconListBox{
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-top:2vh;
		ul{
			margin:0;
			padding: 0;
			width: 100%;
			height: auto;
			overflow: hidden;
			li{
				list-style: none;
				width: 10.5vw;
				height: 140px;
				float: left;
				padding:1vw;
				box-sizing: border-box;
				text-align: center;
				transition: all .15s ease;
				cursor: pointer;
				border-radius: 4px;
				i{
					font-size:40px;
					color:#555;
					display: block;
					margin-top:1vh;
				}
				span{
					margin-top: 1vh;
					display: inline-block;
					font-size:.9vw;
					color:#555;
					margin-bottom:1vh;
				}
				&:hover{
					background-color:#0e80eb ;
					i{
						color:#fff
					}
					span{
						color:#fff
					}
				}
			}
		}
	}
</style>
