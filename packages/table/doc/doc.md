<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import Attributes from './Attributes.vue'
import Fileds from './fileds.vue'
import preview from '@/components/preview.vue'
</script>

# Table 表格

#### 用于展示多层次结构的数据，可自定义并保持高度灵活

<br/>

## 基本使用

#### table 表格基本使用示例,需要一个主要的 _options_ 参数。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="table" demoName="demo1"/>

## 不同大小

#### 你可以传入一个 _size_ 来确定表格的不同大小，以适配不同的应用场景

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="table" demoName="demo2"/>

## 自定义插槽内容

#### 根据需要自定义表格的插槽内容，插槽接受需要定义表格列的 _field_ 并返回当前行的数据 _rowItem_ ，如果是定义表头，需要在插槽名加上 _head-_ 前缀作为识别符

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="table" demoName="demo3"/>

## 自定义表头及表格样式

#### 使用 _headStyle_ 自定义表头的样式，使用 _rowStyle_ 自定义表格内容区域的样式

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="table" demoName="demo4"/>

## Attributes 参数

<Attributes/>
<br/>

## fileds API

<Fileds/>
<br/>
