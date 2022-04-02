<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Drawer 抽屉

#### 从屏幕四边出现的蒙版组件

<br/>

## 基本使用

#### drawer 组件基本使用。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="drawer" demoName="demo1"/>

## 不同方向

#### 通过 _direction_ 属性实现从不同方向出现。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="drawer" demoName="demo2"/>

## 使用具名插槽自定义

#### 使用具名插槽 _#header_ 、 _#content_ 、_#footer_ 可对模态框整体根据需要自定义。你也可以通过 _showHeader_ 和 _showFooter_ 属性动态控制是否显示顶部和底部。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="drawer" demoName="demo3"/>

## Attributes 参数

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
