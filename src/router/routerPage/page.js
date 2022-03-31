export default [
  {
    path: "/",
    name: "主页",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/mzlui",
    name: "组件页面",
    component: () => import("@/views/home.vue"),
    children: [
      {
        path: "",
        name: "贡献指南",
        component: () => import("/packages/Participation/doc/doc.md"),
      },
      {
        path: "updatelog",
        name: "更新日志",
        component: () => import("/packages/updatelog/doc/doc.md"),
      },
      {
        path: "install",
        name: "安装使用",
        component: () => import("/packages/install/doc/doc.md"),
      },
      {
        path: "layout",
        name: "Layout 布局",
        component: () => import("/packages/layout/doc/doc.md"),
      },
      {
        path: "color",
        name: "Color 颜色",
        component: () => import("/packages/color/doc/doc.md"),
      },
      {
        path: "icon",
        name: "Icon 图标",
        component: () => import("/packages/icon/doc/doc.md"),
      },
      {
        path: "button",
        name: "Button 按钮",
        component: () => import("/packages/button/doc/doc.md"),
      },
      {
        path: "input",
        name: "Input 输入框",
        component: () => import("/packages/input/doc/doc.md"),
      },
    ],
  },
];
