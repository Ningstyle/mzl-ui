
import mTabPane from '../tabs/pane.vue';
mTabPane.install = app => {
  app.component(mTabPane.name,mTabPane)
}
export default mTabPane