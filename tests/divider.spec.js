import { mount } from '@vue/test-utils'
import DividerTest from '../packages/divider/index.vue'
describe('Divider组件初始化----', () => {
  it('分割线组件应该存在', () => {
    expect(DividerTest).toBeTruthy()
  })
  it('分割线组件应该可以被渲染', () => {
    const wrapper = mount(DividerTest)
    expect(wrapper.find('.mzl-divider').exists()).toBe(true)
  })
  it('测试divider插槽是否正常', () => {
    const wrapper = mount(DividerTest, {
      slots: {
        default: 'slot Content'
      }
    })
    expect(wrapper.html()).toContain('slot Content')
  })
})
