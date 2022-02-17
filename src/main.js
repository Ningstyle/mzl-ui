import { createApp } from 'vue'
import App from './App.vue'
import mzlUI from '../packages/button/index'
import mzlUI1 from '../packages/input/index'
import mzlUI2 from '../packages/table/index'
import mzlUI3 from '../packages/select/index'
import mzlUI4 from '../packages/dropDown/index'
// import mzlUI from '../dist/mzl-ui.es'
// import '../dist/style.css'
const app = createApp(App)
app.use(mzlUI)
app.use(mzlUI1)
app.use(mzlUI2)
app.use(mzlUI3)
app.use(mzlUI4)
app.mount('#app')
