import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import ViteRequireContext from "@originjs/vite-plugin-require-context";
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";
import svgLoader from "vite-svg-loader";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: "",
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
    extensions: [".mjs", ".js", ".ts", ".json", ".vue"],
  },
  plugins: [
    vue(),
    ViteRequireContext(),
    viteCommonjs(),
    svgLoader(),
    createSvgSpritePlugin({
      include: path.resolve(__dirname, "src/icons"),
      symbolId: "icon-[name]",
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {},
});
