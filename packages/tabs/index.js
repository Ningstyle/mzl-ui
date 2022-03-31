import mTabs from './index.vue';
mTabs.install = app => {
  app.component(mTabs.name, mTabs)
}
export default mTabs