<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Space 间距

#### 常用于多个组件，或多个元素之间的间距设置，避免紧贴在一起

<br/>

## 基本使用

#### space 的基本使用

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="Space" demoName="demo1"/>

## 纵向间距

#### 设置 inline 为 false 即可

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="Space" demoName="demo2"/>

## 自定义间距大小

#### 通过设置 _size_ 自定义间距大小， _size_ 接收一个数组，第一个值 为垂直间距，第二个值为水平间距，当 _inline_ 为 _false_ 时，只生效第一个值

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="Space" demoName="demo3"/>

## Attributes 参数

<Attributes/>
<br/>
