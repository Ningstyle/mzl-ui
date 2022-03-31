import { createRouter, createWebHashHistory } from "vue-router";
import pagesRouter from "./routerPage/page.js";
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: (to, from, savedPosition) => {
    document.title = to.name;
    if (to.fullPath != "/") {
      document.querySelector(".mzluirightView").scrollTop = 0;
    }
  },
  routes: [...pagesRouter],
});
export default router;
