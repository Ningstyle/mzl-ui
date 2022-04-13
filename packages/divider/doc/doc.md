<script setup>
import Attributes from './Attributes.vue'
import demoBasic from './demoBasic.vue'
import demoText from './demoText.vue'
import demoDash from './demoDash.vue'
import demoDire from './demoDire.vue'
import preview from '@/components/preview.vue'
</script>

# Divider 分割线
#### 区隔内容的分割线。 

<br />

## 基本使用

<br />

### 对不同段落的文本进行分割。

<div class="componetnsBox">
  <demoBasic/>
</div>
<preview compName="divider" demoName="demoBasic"/>

<br />

## 设置文案

<br />

### 可以在分割线上自定义文本内容
<br />

<div class="componetnsBox">
  <demoText/>
</div>
<preview compName="divider" demoName="demoText"/>

<br />

## 自定义样式

<br />

### 通过设置lineStyle来改变样式

<br />

<div class="componetnsBox">
  <demoDash/>
</div>
<preview compName="divider" demoName="demoDash"/>

<br />

## 垂直分隔线

<br />

<div class="componetnsBox">
  <demoDire/>
</div>
<preview compName="divider" demoName="demoDire"/>

<br />

## Attributes 参数

<Attributes/>
<br/>
