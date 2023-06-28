import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    Pages(), 
    Layouts(),
    UnoCSS(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: `${path.resolve(process.cwd())}/src` },
    ],
  },
  server: { 
    proxy: {
      "/service/api/": {
        target: "http://taitungttgo.cbsdinfo.com.tw/",
        changeOrigin: true, //是否跨域
        rewrite: (path) => {
          return path.replace(/^\/service^\/^\/api/, '')
        }, 
      },
    },
  },
})
