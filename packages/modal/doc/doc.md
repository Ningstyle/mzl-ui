<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Modal 弹窗

#### 模态对话框

<br/>

## 基本使用

#### Modal 组件基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="modal" demoName="demo1"/>

## 居中布局

#### 设置 _align_ 为 _center_ 即可

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="modal" demoName="demo2"/>

## 使用具名插槽自定义

#### 使用具名插槽 _#header_ 、 _#content_ 、_#footer_ 可对模态框整体根据需要自定义。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="modal" demoName="demo3"/>

## Attributes 参数

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
