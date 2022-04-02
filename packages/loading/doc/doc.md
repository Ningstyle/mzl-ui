<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Loading 加载中

#### 用于页面和区块的加载中状态

<br/>

## 基本使用

#### loading 组件基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="loading" demoName="demo1"/>

#### 你也可以通过获取组件实例的方式来调用。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="loading" demoName="demo2"/>

## 区域加载

#### 可通过设置 _target_（元素类名或 ID）来为指定区域添加。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="loading" demoName="demo3"/>

## 自定义加载图片

#### 可通过设置 _img_ 来自定义加载图片，自定义后 _icon_ 将失效。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="loading" demoName="demo4"/>

## 更多自定义配置项

#### 更多配置项示例。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="loading" demoName="demo5"/>

## Attributes 参数

<Attributes/>
<br/>
