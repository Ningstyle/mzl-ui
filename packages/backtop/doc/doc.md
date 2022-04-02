<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Backtop 回到顶部

#### 用于快捷返回到页面顶部的组件

<br/>

## 基本使用

#### Backtop 组件基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="backtop" demoName="demo1"/>

## 绑定指定元素

#### 绑定指定元素监测滚动来触发。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="backtop" demoName="demo2"/>

## 自定义元素展示

#### 通过插槽的方式自定义元素展示

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="backtop" demoName="demo3"/>

## Attributes 参数

<Attributes/>
<br/>
