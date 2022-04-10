import mBreadcrumb from './index.vue'
import mBreadcrumbItem from './breadcrumbItem.vue'
mBreadcrumb.install = (app) => {
  app.component(mBreadcrumb.name, mBreadcrumb)
  app.component(mBreadcrumbItem.name, mBreadcrumbItem)
}

export default mBreadcrumb
