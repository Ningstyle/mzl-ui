import mButton from './index.vue'
mButton.install = app => {
  app.component(mButton.name, mButton)
} 
export default mButton