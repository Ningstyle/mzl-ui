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
import Options from './options.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Select 下拉框

#### 使用下拉的形式选择需要的数据

<br/>

## 基本使用

#### select 下拉框基本使用示例,需要一个主要的 _options_ 参数

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="select" demoName="demo1"/>

## 禁用状态

#### 可以设置 _disabled_ 属性来实现禁用状态

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="select" demoName="demo2"/>

## 禁用选项

#### 可以针对 _options_ 下某个选项来添加 _disabled_ 属性实现禁用选项

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="select" demoName="demo3"/>

## 匹配不同格式的数据

#### 默认 _options_ 接收 _label_ 和 _value_ 作为显示和值绑定，你可以根据 _labelFiled_ 和 _valueFiled_ 来重新确定字段的绑定，更方便的匹配不同格式的数据。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="select" demoName="demo4"/>

## 不同大小

#### 通过设置 _size_ 属性来显示不同大小的 select

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="select" demoName="demo5"/>

## 可过滤搜索

#### 通过设置 _searchable_ 属性来开启过滤搜索

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="select" demoName="demo6"/>

## 自定义宽高

#### 通过设置 _width_ 和 _height_ 自定义宽高

<div class="componetnsBox">
  <demo7/>
</div>
<preview compName="select" demoName="demo7"/>

## 多选

#### 通过设置 _multiple_ 属性来开启多选

<div class="componetnsBox">
  <demo8/>
</div>
<preview compName="select" demoName="demo8"/>

## Attributes 参数

<Attributes/>
<br/>

## options API

<Options/>
<br/>

## Event 事件

<Event/>
<br/>
