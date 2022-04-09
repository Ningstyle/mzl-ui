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

# Radio 单选

#### 常用从一组数据中选择单个数据

<br/>

## 基本使用

#### radio 组件的基本使用，需要一个主要的 _options_ 参数。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="radio" demoName="demo1"/>

## 禁用选项

#### 可以针对 _options_ 下某个选项来添加 _disabled_ 属性实现禁用选项。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="radio" demoName="demo2"/>

## 垂直排列

#### 可以通过设置 _inline_ 属性为 _false_ 实现垂直排列。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="radio" demoName="demo3"/>

## 匹配不同格式的数据

#### 默认 _options_ 接收 _label_ 和 _value_ 作为显示和值绑定，你可以根据 _labelFiled_ 和 _valueFiled_ 来重新确定字段的绑定，更方便的匹配不同格式的数据。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="radio" demoName="demo4"/>

## 不同大小

#### 可以通过设置 _size_ 属性来显示不同大小。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="radio" demoName="demo5"/>

## 自定义颜色

#### 可以通过设置 _customColor_ 属性为选中的选项自定义你喜欢的颜色。

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="radio" demoName="demo6"/>

## Attributes 参数

<Attributes/>
<br/>

## options API

<Options/>
<br/>

## Event 事件

<Event/>
<br/>
