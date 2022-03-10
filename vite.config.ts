import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
import AutoImport from 'unplugin-auto-import/vite' //注意后面有个/vite
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const { resolve } = require('path')
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//    // 在文件中添加以下内容
//    server: {
//     host: '0.0.0.0',
//     port: 9533,
//     open: true,
//     https: false,
//   },
//   resolve: {
//     alias: {
//       // '@': path.resolve(__dirname, 'src'),
//       '@': resolve(__dirname, 'src')
//     },
//   },
// })

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    AutoImport({
      //引入element plus自动api支持
      resolvers: [
        ElementPlusResolver(),
      ],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core'
      ],
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      dts: 'src/autoImports/auto-imports.d.ts',
    }),
    Components({
      //自动加载的组件目录，默认值为 ['src/components']
      dirs: ['src/components'],
      //组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: true,
      //指定类型声明文件，为true时在项目根目录创建
      dts: 'src/autoImports/components.d.ts',
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 9533,
    open: true,
    https: false
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      '@': resolve(__dirname, 'src')
    }
  }
})
