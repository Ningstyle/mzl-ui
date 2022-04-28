import { mount } from '@vue/test-utils'
import ProgressTest from '../packages/progress/index.vue'
describe('Progress组件初始化----', () => {
  it('进度条组件应该存在', () => {
    expect(ProgressTest).toBeTruthy()
  })
  it('进度条组件应该可以被渲染', () => {
    const wrapper = mount(ProgressTest)
    expect(wrapper.find('.mzl-progress').exists()).toBe(true)
  })
  it('测试进度条插槽是否正常', () => {
    const wrapper = mount(ProgressTest, {
      slots: {
        default: 'slot Content'
      }
    })
    expect(wrapper.html()).toContain('slot Content')
  })
})
