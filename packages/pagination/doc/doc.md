<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import ActiveColors from './activeColors.vue'
import preview from '@/components/preview.vue'
</script>

# Pagination 分页

#### 用于页面数据请求过多分批请求

<br/>

## 基本使用

#### Pagination 组件基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="pagination" demoName="demo1"/>

## 禁用状态

#### 通过 _disabled_ 属性来开启禁用。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="pagination" demoName="demo2"/>

## 小型分页

#### 通过 _size=small_ 属性来开启。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="pagination" demoName="demo3"/>

## 无边框

#### 通过 _border=false_ 属性来开启。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="pagination" demoName="demo4"/>

## 每页展示最大页数

#### 通过 _maxSize_ 控制每页展示最大页数，超出将进行滚动。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="pagination" demoName="demo5"/>

## 更多配置

#### 更多额外拓展配置项。

<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="pagination" demoName="demo6"/>

## 自定义样式

#### 可通过 _activeColors_ 对象自定义分页样式。

<div class="componetnsBox">
  <demo7/>
</div>
<preview compName="pagination" demoName="demo7"/>

## attributes 参数

<Attributes/>
<br/>

## ActiveColors 配置项

<ActiveColors/>
<br/>

## Event 事件

<Event/>
<br/>
