<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import Attributes from './Attributes.vue'
import Options from './options.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Dropdown 下拉菜单

#### 下拉菜单数据选择组件

<br/>

## 基本使用

#### Dropdown 下拉菜单的基本使用，需要一个主要的 _options_ 参数。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="dropDown" demoName="demo1"/>

## 不同大小

#### 通过设置 _size_ 属性适应不同大小。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="dropDown" demoName="demo2"/>

## 图标类型

#### 通过设置 _options_ 数据的 _icon_ 属性展示图标

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="dropDown" demoName="demo3"/>

## 唤醒方式

#### 通过设置 _trigger_ 属性设置不同的唤醒方式

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="dropDown" demoName="demo4"/>

## 头像类型

#### 通过插槽 _#Img_ 设置头像类型的下拉菜单。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="dropDown" demoName="demo5"/>

## Attributes 参数

<Attributes/>
<br/>

## options API

<Options/>
<br/>

## Event 事件

<Event/>
<br/>
