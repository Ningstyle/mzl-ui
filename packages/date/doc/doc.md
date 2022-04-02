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
import Format from './format.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Date 日期组件

#### 用于快捷选择日期的组件

<br/>

## 基本使用

#### Date 组件基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="date" demoName="demo1"/>

## 禁用状态

#### 通过 _disabled_ 属性开启禁用。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="date" demoName="demo2"/>

## 不同大小

#### 通过 _size_ 属性设置显示不同大小。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="date" demoName="demo3"/>

## 选择年

#### 通过设置 _type="year"_ 快捷选择年。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="date" demoName="demo4"/>

## 选择月

#### 通过设置 _type="month"_ 快捷选择月。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="date" demoName="demo5"/>

## 格式化日期显示

#### 通过设置 _format_ 格式化日期显示。

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="date" demoName="demo6"/>

## 日期选择范围限制

#### 设置可选择的日期范围限制。

<div class="componetnsBox">
  <demo7/>
</div>
<preview compName="date" demoName="demo7"/>

## 自定义活动元素颜色

#### 设置可选择的日期范围限制。

<div class="componetnsBox">
  <demo8/>
</div>
<preview compName="date" demoName="demo8"/>

## Attributes 参数

<Attributes/>
<br/>

## format 日期格式说明

<Format/>
<br/>

## Event 事件

<Event/>
<br/>
