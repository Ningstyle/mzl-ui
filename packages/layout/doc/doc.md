<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Layout 布局

#### 简单的自适应页面布局

## 基本使用

#### Layout 基本使用，将每一行平均分为 24 列。

<br/>

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="layout" demoName="demo1"/>

## 位置偏移

#### 通过 _offset_ 设置偏移占用指定的列数。

<br/>
<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="layout" demoName="demo2"/>

## Attributes 参数

<Attributes/>
<br/>
