import mSpace from "./index.vue";
mSpace.install = (app) => {
  app.component(mSpace.name, mSpace);
};
export default mSpace;
