<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Message 消息提示

#### 常用于交互反馈提示场景

<br/>

## 基本使用

#### message 消息提示基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="message" demoName="demo1"/>

#### 你也可以通过获取组件实例的方式来调用。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="message" demoName="demo2"/>

## 不同状态

#### 可根据 _Message_ 参数的 _type_ 来定义显示不同的状态。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="message" demoName="demo3"/>

## 拓展自定义配置

#### 可根据不同场景自定义 _icon_ 图标及 _timeout_ 消失时间。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="message" demoName="demo4"/>

## Attributes 参数

<Attributes/>
<br/>
