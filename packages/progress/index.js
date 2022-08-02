import mProgress from './index.vue';
mProgress.install = app => {
  app.component(mProgress.name, mProgress)
} 
export default mProgress