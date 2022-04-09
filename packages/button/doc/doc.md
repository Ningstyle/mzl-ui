<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Button 按钮

#### 网页常用 button 按钮，常用于响应一个事件或处理某个逻辑

<br/>

## 基本使用

#### button 按钮的基本使用

<br/>
<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="button" demoName="demo1"/>

## 禁用状态

#### 按钮不可操作的状态——通过 _disabled_ 属性设置实现

<br/>
<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="button" demoName="demo2"/>

## 不同大小

#### 不同大小类型的按钮——通过 _size_ 属性设置实现

<br/>
<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="button" demoName="demo3"/>

## 图标按钮

#### 带图标类型的按钮——通过 _leftIcon_ 或者 _rightIcon_ 属性设置实现并确定 icon 出现的位置

<br/>
<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="button" demoName="demo4"/>

## 加载状态

#### 正在加载中的状态按钮——通过 _loading_ 和 _leftIcon_ 或者 _rightIcon_ 属性设置实现并确定 icon 出现的位置

<br/>
<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="button" demoName="demo5"/>

## 自定义颜色

#### 可以自定义颜色的按钮类型——通过设置 _type_ 为 _custom_ 和 _customColor_ 属性设置实现。 tips：需要注意的是 _type_ 为 _default_、_dashed_、_text_ 类型的按钮不支持自定义

<br/>
<div class="componetnsBox">
  <demo6/>
</div>
<preview compName="button" demoName="demo6"/>

## Attributes 参数

<Attributes/>
<br/>
