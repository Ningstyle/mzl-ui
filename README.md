# mzl-ui 
##### 你，我生命中一个重要的过客，之所以是过客，因为你未曾为我停留！
###### version:0.7.5

description: 一套适合开发者使用的轻量级UI组件库，完美支持vite+vue3
  - "vite"
  - "vue3"
  - "ui"

官网主页: [mzl-ui使用文档](https://mzlui.codeym.com/)
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
### 按需引用
```
import { mButton, mInput } from 'mzl-ui'
```
### 愉快开始
```
<m-button>默认按钮</m-buttonn> 
<m-button type="primary">主要按钮</m-button>
```

# 贡献指南

