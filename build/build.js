import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { resolve } from "path";
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "../src/styles/style.scss" as *;',
      },
    },
  },
});
