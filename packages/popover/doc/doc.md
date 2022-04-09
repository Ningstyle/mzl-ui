<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import Attributes from './Attributes.vue'
import Events from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Popover 弹出框


## 基本使用
### 弹出框 在这里我们提供几种不同方向的展示方式以及触发方式，详细的展示方式见下方文档
<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="popover" demoName="demo1"/>

## 嵌套信息 
### 可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。
<br/>
<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="popover" demoName="demo2"/>

## 嵌套操作 
### 可以在 Popover 中嵌套操作
<br/>
<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="popover" demoName="demo3"/>

## Attributes 参数

<Attributes/>
<br/>

## Events 事件

<Events/>
<br/>

