import mPopover from './index.vue';
mPopover.install = app => {
    app.component(mPopover.name, mPopover)
}
export default mPopover