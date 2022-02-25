# mzl-ui 
##### 你，我生命中一个重要的过客，之所以是过客，因为你未曾为我停留！
###### version:0.3.0

description: 一套适合开发者使用的轻量级UI组件库，完美支持vite+vue3

  - "vite"
  - "vue3"
  - "ui"
home: [mzl-ui使用文档](https://mzlui.codeym.com/)
***
### 快速使用
```
npm install  mzl-ui --save
cnpm install  mzl-ui --save
```
### 引入
```
import { createApp } from 'vue'
import App from '@/App.vue'
import mzlUi from 'mzl-ui'
import '../node_modules/mzl-ui/dist/style.css'

const app = createApp(App)
app.use(mzlUi)
app.mount('#app')
```
### 愉快开始
```
<m-button>默认按钮</m-buttonn> 
<m-button type="primary">主要按钮</m-button>
```

#### 更小的体积 
###### 整个库的大小不足1M,涵盖109个常用组件
<br/>

#### 更快的响应
###### 配合vue3的composition API
<br/>

#### 更强的拓展性
###### 给开发者几乎所有的机会来自定义组件，满足一切项目使用场景
<br/>

#### 更完美的支持
###### 专为vue3版本开发
<br/>

#### 更友好的渲染
###### 极少的代码量，极简配置项
<br/>
