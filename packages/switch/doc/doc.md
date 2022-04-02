<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Switch 开关

#### 网页常用的开关选择组件，需要表示开关状态/两种状态之间的切换时。

<br/>

## 基本使用

#### switch 组件基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="switch" demoName="demo1"/>

## 禁用状态

#### 可通过 _disabled_ 属性开启。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="switch" demoName="demo2"/>

## 带提示信息

#### 可通过 _showTipsText_ 属性开启。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="switch" demoName="demo3"/>

## 带辅助文字

#### 可通过 _closeText_ 和 _activeText_ 属性决定开启和关闭状态时的辅助文字，通过 _textAlign_ 属性决定辅助文字的位置。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="switch" demoName="demo4"/>

## 自定义颜色

#### 可通过 _closeColor_ 和 _activeColor_ 属性自定义关闭和开启时的背景颜色。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="switch" demoName="demo5"/>

## Attributes 参数

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
