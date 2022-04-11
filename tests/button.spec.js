import { mount } from '@vue/test-utils'
import ButtonTest from '../packages/button/index.vue'
describe('Button组件初始化----', () => {
  it('按钮组件应该存在', () => {
    expect(ButtonTest).toBeTruthy()
  })
  it('按钮组件应该可以被渲染', () => {
    const wrapper = mount(ButtonTest)
    expect(wrapper.find('.mzl-button').exists()).toBe(true)
  })
  it('测试button插槽是否正常', () => {
    const wrapper = mount(ButtonTest, {
      slots: {
        default: 'slot Content'
      }
    })
    expect(wrapper.html()).toContain('slot Content')
  })
})
