import mTable from './index.vue';
mTable.install = function (Vue) {
  Vue.component(mTable.name, mTable)
}
export default mTable