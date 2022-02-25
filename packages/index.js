//导入组件
import mButton from './button/index';
import mInput from './input/index';
import mTable from './table/index';
import mSelect from './select/index'
import mDropdown from './dropDown/index'
import mRadio from './radio/index'
import mCheckbox from './checkbox/index'
import Message  from './message/index'
//存在所有组件
const components = [mButton,mInput,mTable,mSelect,mDropdown,mRadio,mCheckbox]
const install = app => {
  components.forEach(i => {
    app.use(i)
  })
  app.config.globalProperties.$message = Message 
}
const mzlUi = {
  version: "0.3.8",
  install
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
	// 以下是具体的组件列表
  mButton,
  mInput,
  mTable,
  mSelect,
  mDropdown,
  mRadio,
  mCheckbox,
  Message
}
export default mzlUi