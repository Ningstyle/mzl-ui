import { createApp } from 'vue'
import App from './App.vue'
import mzlUI from '../packages/button/index'
import mzlUI1 from '../packages/input/index'
import mzlUI2 from '../packages/table/index'
import mzlUI3 from '../packages/select/index'
import mzlUI4 from '../packages/dropDown/index'
import mzlUI5 from '../packages/radio/index'
import mzlUI6 from '../packages/checkbox/index'

// import mzlUI from '../dist/mzl-ui.es'
// import '../dist/style.css'
const app = createApp(App)

// Message({
//   type: 'custom',
//   text: '登录失败登录失败登录',
//   icon:"m-icon-file-common",
//   timeout:'4000',
//   textColor:"#000",
//   bgColor:"red"
// })
app.use(mzlUI)
app.use(mzlUI1)
app.use(mzlUI2)
app.use(mzlUI3)
app.use(mzlUI4)
app.use(mzlUI5)
app.use(mzlUI6)
app.mount('#app')
