import { createApp } from 'vue'
import App from './App.vue'
import mzlUI from '../packages/button/index'
import mzlUI1 from '../packages/input/index'
import mzlUI2 from '../packages/table/index'
import mzlUI3 from '../packages/select/index'
import mzlUI4 from '../packages/dropDown/index'
import mzlUI5 from '../packages/radio/index'
import mzlUI6 from '../packages/checkbox/index'
import mzlUI7 from '../packages/modal/index'
import mzlUI8 from '../packages/drawer/index'
import mzlUI9 from '../packages/switch/index'
import mzlUI10 from '../packages/tree/index'
import mzlUI11 from '../packages/optfile/index'
import mzlUI12 from '../packages/textarea/index'
import mzlUI13 from '../packages/mrow/index'
import mzlUI14 from '../packages/mcol/index'
import mzlUI15 from '../packages/pagination/index'
import mzlUI16 from '../packages/date/index'
import mzlUI17 from '../packages/backtop/index'
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
app.use(mzlUI7)
app.use(mzlUI8)
app.use(mzlUI9)
app.use(mzlUI10)
app.use(mzlUI11)
app.use(mzlUI12)
app.use(mzlUI13)
app.use(mzlUI14)
app.use(mzlUI15)
app.use(mzlUI16)
app.use(mzlUI17)
app.mount('#app')
