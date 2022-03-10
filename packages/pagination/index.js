import mPagination from './index.vue';
mPagination.install = app => {
  app.component(mPagination.name, mPagination)
} 
export default mPagination