import { mount } from '@vue/test-utils'
import BadgeTest from '../packages/badge/index.vue'
describe('Badge组件初始化----', () => {
  it('徽章组件应该存在', () => {
    expect(BadgeTest).toBeTruthy()
  })
  it('徽章组件应该可以被渲染', () => {
    const wrapper = mount(BadgeTest)
    expect(wrapper.find('.mzl-badge').exists()).toBe(true)
  })
  it('测试badge插槽是否正常', () => {
    const wrapper = mount(BadgeTest, {
      slots: {
        default: 'slot Content'
      }
    })
    expect(wrapper.html()).toContain('slot Content')
  })
})
