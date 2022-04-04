import mTabs from './index.vue';
import mTabPane from './pane.vue';
mTabs.install = app => {
  app.component(mTabs.name, mTabs)
  app.component(mTabPane.name,mTabPane)
}
export default mTabs