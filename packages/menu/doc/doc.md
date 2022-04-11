<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import demo8 from './demo8.vue'
import Attributes from './Attributes.vue'
import Theme from './theme.vue'
import Options from './options.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Menu 菜单

#### 用于网站导航分级菜单

<br/>

## 基本使用

#### menu 的基本使用

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="menu" demoName="demo1"/>

## 黑色主题

#### 设置 _theme_ 为 _black_ 即可

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="menu" demoName="demo2"/>

## 自定义颜色

#### 也可以通过设置 _theme_ 接收一个 _Object_ 来自定义你喜欢的颜色

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="menu" demoName="demo3"/>

## 插槽

#### 可通过设置插槽实现右侧下拉菜单或其他功能

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="menu" demoName="demo4"/>

<!-- ## 侧边菜单

#### 通过设置 type 为 horizontal 即可为侧边菜单

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="menu" demoName="demo5"/> -->


<!-- ## Attributes 参数

<Attributes/>
<br/>

## options API

<Options/>
<br/>

## theme API

<Theme/>
<br/>

## Event 事件

<Event/>
<br/> -->
