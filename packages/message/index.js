import { createVNode, render } from 'vue'
import Message from './index.vue'

export default ({ text, type,timeout,icon,textColor,bgColor}) => {
  // 动态创建一个DOM容器
  const div = document.createElement('div')
  div.setAttribute('class', 'mzlui-meassage-container')
  document.body.appendChild(div)
  let timer = null
  // 传递给组件的选项
  const vnode = createVNode(Message, { text, type,timeout,icon,textColor,bgColor})
  render(vnode, div)
  clearTimeout(timer)
  timer = setTimeout(() => {
    render(null, div)
    document.body.removeChild(div)
    clearTimeout(timer)
  }, timeout||2500)
}