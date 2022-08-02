import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
  ],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue","highlight.js","jest","pinia","sass","sass-loader","vite-plugin-md","vue-router","@babel/preset-env","@vitejs/plugin-vue","@vue/reactivity","@vue/test-utils","babel-jest","babel-preset-vite","eslint","eslint-plugin-vue","vite","vue-jest","commitizen","cz-conventional-changelog"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./packages/index.js",
      name: "mzl-ui",
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/styles/style.scss" as *;',
      },
    },
  },
});
