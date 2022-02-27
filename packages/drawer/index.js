import mDrawer from './index.vue';
mDrawer.install = app => {
  app.component(mDrawer.name, mDrawer)
} 
export default mDrawer