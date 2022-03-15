import mBacktop from './index.vue';
mBacktop.install = app => {
  app.component(mBacktop.name, mBacktop)
} 
export default mBacktop