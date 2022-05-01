<script setup>
import demoBasic from './demoBasic.vue'
import demoMax from './demoMax.vue'
import demoCustom from './demoCustom.vue'
import Attributes from './Attributes.vue'
import preview from '@/components/preview.vue'
</script>

# Badge 徽章
#### 按钮和图标上的数字或状态标记。 

<br />

## 基本使用

<br />

### 可以用来展示新消息的数量。
#### 通过设置 value 来调整标记所展示的内容，支持 Number or String 作为参数

<div class="componetnsBox">
  <demoBasic/>
</div>
<preview compName="badge" demoName="demoBasic"/>

<br />

## 最大值

<br />

### 你还可以自定义最大值。
#### 由max属性定义，它接受一个Number， 要注意的是，该值当且仅当在 value 的值也是 Number 时生效。

<div class="componetnsBox">
  <demoMax/>
</div>
<preview compName="badge" demoName="demoMax"/>

<br />

## 自定义内容

<br />

<div class="componetnsBox">
  <demoCustom/>
</div>
<preview compName="badge" demoName="demoCustom"/>

<br />

## Attributes 参数

<Attributes/>
<br/>
