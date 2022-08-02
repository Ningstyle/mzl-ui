import mCol from './index.vue';
mCol.install = app => {
  app.component(mCol.name, mCol)
} 
export default mCol