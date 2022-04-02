<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Textarea 文本域

#### 用于段落文本的填写或输入

<br/>

## 基本使用

#### Textarea 文本域基本使用。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="textarea" demoName="demo1"/>

## 禁用状态

#### 通过 _disabled_ 启用。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="textarea" demoName="demo2"/>

## 限制长度

#### 通过 _maxlength_ 启用。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="textarea" demoName="demo3"/>

## 自定义 Focus 颜色

#### 通过 _focusColor_ 属性自定义 input 在获取焦点后的颜色。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="textarea" demoName="demo4"/>

## Attributes 参数

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
