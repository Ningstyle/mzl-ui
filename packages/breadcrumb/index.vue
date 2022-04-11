<script>
import { useSlots, h } from 'vue'
const props = {
  customClass: String,
  separator: {
    type: String,
    default: '/'
  },
  space: {
    type: Number,
    default: 5
  }
}
export default {
  name: 'mBreadcrumb',
  props,
  render(props) {
    const slots = useSlots()
    const items = slots.default()
    const wrapItems = []
    items.forEach((item, index) => {
      wrapItems.push(item)
      if (index < items.length - 1) {
        wrapItems.push(
          h(
            'span',
            {
              style: { margin: `0 ${props.space}px` }
            },
            props.separator
          )
        )
      }
    })
    return h(
      'div',
      {
        class: `m-breadcrumb ${props.customClass ?? ''}`
      },
      wrapItems
    )
  }
}
</script>

<style lang="scss">
.m-breadcrumb {
  font-size: 16px;
  .mzl-breadcrumb-item {
    display: inline;
  }
}
</style>
