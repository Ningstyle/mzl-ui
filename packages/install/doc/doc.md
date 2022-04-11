# 安装使用

## 安装

#### 推荐使用 _npm_ 的方式安装,也可选用 _cpm_ 或 _yarn_ 进行安装。

```
npm install  mzl-ui
cnpm install  mzl-ui --save
yarn add mzl-ui
```

<br/>

## 使用 mzl-ui

#### 需要注意的是 css 样式文件需要您单独引入。

```javascript
/*js*/
import { createApp } from "vue";
import App from "@/App.vue";
import mzlUi from "mzl-ui";
import "../node_modules/mzl-ui/dist/style.css";

const app = createApp(App);
app.use(mzlUi);
app.mount("#app");
```

<br/>

## 愉快开始

#### 至此 mzl-ui 就引入完成并且可以使用了。

```html
<!-- html -->
<m-button>默认按钮</m-buttonn>
<m-button type="primary">主要按钮</m-button>
```

<br/>

## 按需引用

#### 您可以根据个人需要按需引用组件来使用，按需引用时不需要使用 <font color=#0e80eb>**app.use()**</font> 方法注册。

```javascript
/*js*/
import { mButton, mInput } from "mzl-ui";
```

<br/>

```html
<m-button>点击</m-button>
<m-input v-model="value" placeholder="基本使用"></m-input>
```

<br/>
