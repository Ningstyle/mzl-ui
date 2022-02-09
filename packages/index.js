//导入组件
import mButton from './button/index';
import mInput from './input/index';
import mTable from './table/index';
import mSelect from './select/index'
//存在所有组件
const components = [mButton,mInput,mTable,mSelect]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue, opts = {
    }) {
    // 判断是否安装
    if (install.installed) return
  	// 遍历注册全局组件
    components.map((component) => {
      Vue.component(component.name, component) //此处的使用的组件vue文件中的name属性
    })
	// 判断是否是直接引入文件
  if (typeof window != 'undefined' && window.Vue) {
    install(window.Vue)
  }
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
	// 以下是具体的组件列表
  ...components

}