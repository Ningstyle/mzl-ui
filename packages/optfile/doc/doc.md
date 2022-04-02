<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
import Attributes from './Attributes.vue'
import Event from './Events.vue'
import preview from '@/components/preview.vue'
</script>

# OptFile 文件选择

#### 常用于选择文件进行上传前的操作

<br/>

## 基本使用

#### OptFile 组件基本使用示例。

<div class="componetnsBox">
  <demo1/>
</div>
<preview compName="optfile" demoName="demo1"/>

## 显示已选文件

#### 通过 _showFileList_ 启用。

<div class="componetnsBox">
  <demo2/>
</div>
<preview compName="optfile" demoName="demo2"/>

## 展示方式

#### 通过设置 _targetType_ 为 _box_ 切换。

<div class="componetnsBox">
  <demo3/>
</div>
<preview compName="optfile" demoName="demo3"/>

## 开启拖拽

#### 通过设置 _drop_ 启用。

<div class="componetnsBox">
  <demo4/>
</div>
<preview compName="optfile" demoName="demo4"/>

## 预览已上传图片

#### 通过设置 _imgListShow_ 启用。

<div class="componetnsBox">
  <demo5/>
</div>
<preview compName="optfile" demoName="demo5"/>

## Attributes 参数

<Attributes/>
<br/>

## Event 事件

<Event/>
<br/>
