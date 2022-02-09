import mButton from './index.vue'
mButton.install = function (Vue) {
  Vue.component(mButton.name, mButton)
}
export default mButton