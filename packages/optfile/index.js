import mOptfile from './index.vue';
mOptfile.install = app => {
  app.component(mOptfile.name, mOptfile)
} 
export default mOptfile