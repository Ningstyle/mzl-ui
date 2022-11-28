import mTable from './index.vue';
mTable.install = app => {
  app.component(mTable.name, mTable)
} 
export default mTable