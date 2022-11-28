import mTextarea from './index.vue';
mTextarea.install = app => {
  app.component(mTextarea.name, mTextarea)
} 
export default mTextarea