import mDate from './index.vue';
mDate.install = app => {
  app.component(mDate.name, mDate)
} 
export default mDate