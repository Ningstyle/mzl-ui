<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import Attributes from './Attributes.vue'
import Options from './options.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Tree 树形控件

#### 用于层级数据的展示

<br/>

## 基本使用

#### tree 组件基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="tree" demoName="demo1"/>

## 默认展开

#### 通过 _defaultOpenNodes_ 属性设置默认展开的节点。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="tree" demoName="demo2"/>

## 可选择

#### 通过 _multiple_ 属性启用可选择的树。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="tree" demoName="demo3"/>

## 默认选中

#### 通过 _defaultSelectNodes_ 属性设置默认选中的节点。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="tree" demoName="demo4"/>

## 禁用状态

#### 通过对数据项增加 _disabled:true_ 来设置禁用指定节点。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="tree" demoName="demo5"/>

## 匹配不同格式

#### 通过设置 _labelFiled_ 可替换默认 _lable_ 字段的展示，匹配不同数据格式。

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="tree" demoName="demo6"/>

## Attributes 参数

<Attributes/>
<br/>

## options 配置项

<Options/>
<br/>

## Event 事件

<Event/>
<br/>
