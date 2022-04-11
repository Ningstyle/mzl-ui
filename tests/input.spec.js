import { mount } from '@vue/test-utils'
import InputTest from '../packages/input/index.vue'
describe('input组件初始化----', () => {
  it('input组件应该存在', () => {
    expect(InputTest).toBeTruthy()
  })
  it('input组件应该可以被渲染', () => {
    const wrapper = mount(InputTest)
    expect(wrapper.find('.mzl-group-input-default').exists()).toBe(true)
  })
})
