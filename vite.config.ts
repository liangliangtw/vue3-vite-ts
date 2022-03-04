import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
const {resolve} = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
   // 在文件中添加以下内容
   server: {
    host: '0.0.0.0',
    port: 9533,
    open: true,
    https: false,
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      '@': resolve(__dirname, 'src')
    },
  },
})
