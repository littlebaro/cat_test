import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/',
  plugins: [
    vue(), 
    UnoCSS()
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
          console.log(path.replace(/^\/service^\/^\/api/, ''));
          return path.replace(/^\/service^\/^\/api/, '')
        }, 
      },
    },
  },
})
