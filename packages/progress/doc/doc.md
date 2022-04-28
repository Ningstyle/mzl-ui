<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import demo8 from './demo8.vue'
import demo9 from './demo9.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Progress 进度条
#### 用于展示任务处理的速度或工作完成的进度

<br/>

## 基本使用

#### 直线进度条
##### m-progress组件设置percent属性表示进度条百分比，默认为0，取值范围需0~100之间。

<br/>
<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="progress" demoName="demo1"/>

## 进度条内展示文字

#### 进度条内展示进度百分比

<br/>
<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="progress" demoName="demo2"/>

## 自定义进度条颜色和进度条圆角

#### 设置属性bgColor来控制进度条颜色。属性接受十六进制颜色值,和函数

<br/>
<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="progress" demoName="demo3"/>

## 动画进度条

#### 设置isAnimation属性来控制进度条是否为动画进度，设置progressSpeed属性控制动画速度。

<br/>
<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="progress" demoName="demo4"/>

## 自定进度条文本内容

#### 1、可以通过setPercentText属性定义进度条文字内容
#### 2、可以通过插槽自定义内容

<br/>
<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="progress" demoName="demo5"/>

## 环形进度条

#### 可以通过progressType属性设置circle类型,circleSize属性设置环形进度条大小,circleHeight设置进度条高度,roundCorner属性也可控制圆角展示。

<br/>
<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="progress" demoName="demo6"/>

## 环形动画进度条

#### 可以通过progressType属性设置circle类型,同样设置isAnimation属性控制是否为动画进度条。

<br/>
<div class="componetnsBox">
  <demo7/>
</div>
<preview compName="progress" demoName="demo7"/>

## 添加自定义内容

#### 通过插槽添加自定义内容。

<br/>
<div class="componetnsBox">
  <demo8/>
</div>
<preview compName="progress" demoName="demo8"/>

## 其它样式

#### 进度条大小和高度由circleSize属性和circleHeight属性控制。

<br/>
<div class="componetnsBox">
  <demo9/>
</div>
<preview compName="progress" demoName="demo9"/>

## Attributes 参数

<Attributes/>
<br/>
