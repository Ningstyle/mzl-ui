import mModal from './index.vue';
mModal.install = app => {
  app.component(mModal.name, mModal)
} 
export default mModal