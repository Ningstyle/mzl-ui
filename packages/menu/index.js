import mMenu from './index.vue';
mMenu.install = app => {
  app.component(mMenu.name, mMenu)
} 
export default mMenu