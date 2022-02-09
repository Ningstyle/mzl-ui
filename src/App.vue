<template>
  <h4>基本类型</h4>
  <span><m-button>默认按钮</m-button></span>  
  <span><m-button type="primary">主要按钮</m-button></span> 
  <span><m-button type="success">成功按钮</m-button></span> 
  <span><m-button type="danger">危险按钮</m-button></span> 
  <span><m-button type="warning">警告按钮</m-button></span> 
  <span><m-button type="dashed">虚线按钮</m-button></span> 
  <span><m-button type="text">文本按钮</m-button></span>
  <h4>圆角类型</h4>
  <span><m-button round>默认按钮</m-button></span>  
  <span><m-button type="primary" round>主要按钮</m-button></span>
  <span><m-button type="success" round>成功按钮</m-button></span> 
  <span><m-button type="danger" round>危险按钮</m-button></span> 
  <span><m-button type="warning" round>警告按钮</m-button></span> 
  <span><m-button type="dashed" round>虚线按钮</m-button></span>
  <h4>禁用状态</h4>
  <span><m-button disabled>默认按钮</m-button></span>  
  <span><m-button type="primary" disabled>主要按钮</m-button></span>
  <span><m-button type="success" disabled>成功按钮</m-button></span> 
  <span><m-button type="danger" round disabled>危险按钮</m-button></span> 
  <span><m-button type="warning" round disabled>警告按钮</m-button></span> 
  <span><m-button type="dashed" round disabled>虚线按钮</m-button></span>
  <h4>不同大小</h4>
  <div>
    <span><m-button>默认大小</m-button></span>  
    <span><m-button type="primary">默认大小</m-button></span>
    <span><m-button type="success" size="medium">中等大小</m-button></span> 
    <span><m-button type="danger" size="medium">中等大小</m-button></span> 
    <span><m-button type="warning" size="small">小型按钮</m-button></span> 
    <span><m-button type="dashed" size="mini">超小按钮</m-button></span>
  </div>
  <div>
    <span><m-button round>默认大小</m-button></span>  
    <span><m-button type="primary" round>默认大小</m-button></span>
    <span><m-button type="success" size="medium" round>中等大小</m-button></span> 
    <span><m-button type="danger" size="medium" round>中等大小</m-button></span> 
    <span><m-button type="warning" size="small" round>小型按钮</m-button></span> 
    <span><m-button type="dashed" size="mini" round>超小按钮</m-button></span>
  </div>
  <h4>自定义颜色</h4>
  <span><m-button>默认按钮不支持</m-button></span>  
  <span><m-button type="custom" customColor="#9935f5">自定义颜色</m-button></span>
  <span><m-button type="custom" customColor="#1ba7dd">自定义颜色</m-button></span> 
  <span><m-button type="custom" size="medium" round customColor="#d33cc7">自定义颜色</m-button></span> 
  <span><m-button type="custom" size="small" round disabled customColor="#e7411c">自定义颜色</m-button></span>
  <h4>图标按钮</h4>
  <div>
    <span><m-button leftIcon="m-icon-complete">按钮</m-button></span>  
    <span><m-button type="primary" size="medium" leftIcon="m-icon-add-circle">添加</m-button></span>
    <span><m-button type="success" size="small" disabled leftIcon="m-icon-home">主页</m-button></span> 
    <span><m-button type="danger"  size="mini" disabled rightIcon="m-icon-calendar">日历</m-button></span> 
    <span><m-button type="warning" round leftIcon="m-icon-upload">上传</m-button></span> 
    <span><m-button type="dashed" round rightIcon="m-icon-search">搜索</m-button></span>
    <span><m-button type="text" round leftIcon="m-icon-ashbin" style="color:#ec3437">删除</m-button></span>
  </div>
  <div>
    <span><m-button leftIcon="m-icon-electronics"></m-button></span>  
    <span><m-button type="primary" size="small" leftIcon="m-icon-edit"></m-button></span>
    <span><m-button type="success" size="mini" disabled icon="m-icon-add-circle"></m-button></span> 
    <span><m-button type="danger" round disabled leftIcon="m-icon-home"></m-button></span> 
    <span><m-button type="warning" round leftIcon="m-icon-calendar"></m-button></span> 
    <span><m-button type="dashed" round leftIcon="m-icon-upload"></m-button></span>
    <span><m-button type="text" round leftIcon="m-icon-ashbin" style="color:#ec3437"></m-button></span>
  </div>
  <h4>加载状态</h4>
  <span><m-button localing leftIcon="m-icon-loading1">加载中</m-button></span>  
  <span><m-button type="primary" leftIcon="m-icon-loading2" localing>加载中</m-button></span>
  <span><m-button type="success" disabled leftIcon="m-icon-loading3" localing>加载中</m-button></span> 
  <span><m-button type="danger" round rightIcon="m-icon-loading4" localing>加载中</m-button></span> 
  <span><m-button type="warning" round rightIcon="m-icon-loading5" localing>加载中</m-button></span> 
  <span><m-button type="dashed" round disabled rightIcon="m-icon-loading6" localing>加载中</m-button></span>

  <h4>基本使用</h4>
  <span>
    <!-- autofocus -->
    <m-input v-model="value1" @focus="focus" @blur="blur" placeholder="基本使用"></m-input>
  </span>
  <h4>禁用状态</h4>
  <span>
    <m-input v-model="value1" disabled  rightIcon="m-icon-calendar" placeholder="禁用状态"></m-input>
  </span>
  <h4>可清空</h4>
  <span>
    <m-input v-model="value1" clearable @clear="clear" @input="input" @change="change"></m-input>
  </span>
  <h4>带图标-左</h4>
  <span>
    <m-input v-model="value1"  leftIcon="m-icon-search"></m-input>
  </span>
  <h4>带图标-右</h4>
  <span>
    <m-input v-model="value1" rightIcon="m-icon-calendar"></m-input>
  </span>
  <h4>不同大小</h4>
  <span>
    <m-input v-model="value1" leftIcon="m-icon-search"></m-input>
  </span>
  <span>
    <m-input v-model="value1"  leftIcon="m-icon-search" size="small"></m-input>
  </span>
  <span>
    <m-input v-model="value1" leftIcon="m-icon-calendar" size="mini"  placeholder="小按钮"></m-input>
  </span>
  <h4>不同大小</h4>
  <span>
    <m-input v-model="value1" rightIcon="m-icon-search"></m-input>
  </span>
  <span>
    <m-input v-model="value1" rightIcon="m-icon-search" size="small"></m-input>
  </span>
  <span>
    <m-input v-model="value1" rightIcon="m-icon-calendar" size="mini"></m-input>
  </span>
  <h4>组合输入</h4>
  <span>
    <m-input v-model="value1" clearable>
      <template #btn>
        <m-button type="primary" leftIcon="m-icon-search">搜索</m-button>
      </template>
    </m-input>
  </span>
  <h4>密码类型</h4>
  <span>
    <m-input v-model="password" type="password" placeholder="请输入密码" showPassword></m-input>
  </span>
  <h4>自定义Focus颜色</h4>
  <span>
    <m-input v-model="value1" type="text" placeholder="自定义你喜欢的focus颜色" focusColor="red"></m-input>
  </span>
  

  <h4>基本使用</h4>
  <span style="width:100%;margin-right:0;">
    <m-table :options="options">
      <template #id="item">
        <div>{{item.scope.row.id}}</div>
      </template>
      <template #action>
        <m-button type="text" leftIcon="m-icon-edit" size="small">编辑</m-button>
        <m-button type="text" leftIcon="m-icon-ashbin" style="color:#ec3437"  size="small">删除</m-button>
      </template>
    </m-table>
  </span>
	
	<h4>基本使用</h4>
	<span style="width:300px;margin-right:0;">
		<m-select v-model="selVal" placeholder="请选择"></m-select>
	</span>
	<span style="width:300px;margin-right:0;">
		<m-select v-model="selVal" placeholder="请选择" size="small"></m-select>
	</span>
	<span style="width:300px;margin-right:0;">
		<m-select v-model="selVal" placeholder="请选择" size="mini"></m-select>
	</span>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
  <p>1</p>
</template>
<script setup>
import { reactive, ref } from "vue";

const value1 = ref('')
const password = ref('')
const selVal = ref('')
const state = reactive({
  options:{
    fileds:[
      {
        field:'id',
        title:'ID',
        align:'center'
      },
      {
        field:'name',
        title:'姓名',
        align:'center'
      },
      {
        field:'job',
        title:'职业'
      },
      {
        field:'address',
        title:'地址'
      },
      {
        field:'from',
        title:'籍贯'
      },
      {
        field:'action',
        title:'操作',
        width:'200px',
        align:'center'
      }
    ],
    datas:[
      {id:10,name:'王小二',job:'放羊娃',address:'在那遥远的小山村',from:"民间流传故事"},
      {id:13,name:'猪八戒',job:'徒弟',address:'高老庄',from:"西游记神话故事"},
      {id:2,name:'刘老四',job:'农民',address:'可能在中国',from:"想象出来的"},
      {id:11,name:'白骨精',job:'妖精',address:'西游记',from:"西游记神话故事"},
    ]
  }
})
const {options } = state
const focus = (e) =>{
  // console.log(e);
}
const blur = (e) =>{
  // console.log(e)
}
const input = (e) =>{
  console.log(e);
}
const change = (e) =>{
  console.log(e);
}
const clear = () =>{
  console.log("清空")
}
</script>
<style scoped>
span{
  margin:0 10px 10px 0;
  display:inline-block
}
div{
  margin-bottom:10px;
}
</style>
