import mTree from './index.vue';
mTree.install = app => {
  app.component(mTree.name, mTree)
} 
export default mTree