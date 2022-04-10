<script setup>
  
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'

import Attributes from './Attributes.vue'
import TabPaneAttributes from './TabPaneAttributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Tab 切换

#### 用于多个视图、数据切换展示操作

<br/>

## 基本使用

#### tab 的基本使用

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="tabs" demoName="demo1"/>

## 选项卡样式

#### 选项卡样式的标签页。type指定显示的样式，默认"line"

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="tabs" demoName="demo2"/>

## 自定义标签页(插槽方式)

#### 可以通过具名 slot 来实现自定义标签页的内容

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="tabs" demoName="demo3"/>

## 自定义标签页(渲染函数方式)

#### 通过pane的label属性绑定渲染函数自定义标签

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="tabs" demoName="demo4"/>

## 动态增减标签页

#### 

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="tabs" demoName="demo5"/>

## 禁用和可关闭选项卡

#### disabled属性禁用此选项卡，closable设置此选项卡可否关闭

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="tabs" demoName="demo6"/>


## Tab Attributes 参数

<Attributes/>
<br/>

## Tab Event 事件

<Event/>
<br/>

## TabPane  Attributes 参数

<TabPaneAttributes/>
<br/>


