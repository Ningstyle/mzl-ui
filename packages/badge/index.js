import mBadge from './index.vue'
mBadge.install = app => {
  app.component(mBadge.name, mBadge)
} 
export default mBadge