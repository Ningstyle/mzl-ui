<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import demo6 from './demo6.vue'
import demo7 from './demo7.vue'
import demo8 from './demo8.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# Input 输入框

#### 数据输入框类型，通过键盘输入字符

<br/>

## 基本使用

#### input 的基本使用

<demo1/>
<preview compName="input" demoName="demo1"/>

## 禁用状态

#### input 的禁用状态，通过 _disabled_ 属性限制输入及操作

<demo2/>
<preview compName="input" demoName="demo2"/>

## 可清空数据

#### input 的 value 可快捷清空，通过 _clearable_ 属性启用

<demo3/>
<preview compName="input" demoName="demo3"/>

## 带图标

#### 可使用 _leftIcon_ 或者 _rightIcon_ 来定义显示图标并确定显示的位置。需要注意的是如果定义了右侧显示图标，那 _clearable_ 将不再起作用

<demo4/>
<preview compName="input" demoName="demo4"/>

## 不同大小

#### 通过设置 _size_ 属性来适应不同大小

<demo5/>
<preview compName="input" demoName="demo5"/>

## 组合输入

#### 可通过插槽完成组合输入，插槽名默认为 _btn_

<demo6/>
<preview compName="input" demoName="demo6"/>

## 密码类型

#### 密码类型的输入框，可通过 _showPassword_ 来启用是否开启显示密码

<demo7/>
<preview compName="input" demoName="demo7"/>

## 自定义 Focus 颜色

#### 通过 _focusColor_ 属性自定义 input 在获取焦点后的颜色

<demo8/>
<preview compName="input" demoName="demo8"/>

## Attributes 参数

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
