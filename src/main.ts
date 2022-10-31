import { createApp } from 'vue'
import App from './App.vue'
// import store from './store'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ELIcons from '@element-plus/icons-vue' // 单独安装elementIcon
const app = createApp(App)
for (const iconName in ELIcons) {
  // @ts-ignore // 单独安装elementIcon
  app.component(iconName, ELIcons[iconName])
}
import VueLazyload from 'vue-lazyload'
app.use(VueLazyload, {
  loading:
    'https://img0.baidu.com/it/u=1541354865,3947599599&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=622',
  error:
    'https://img0.baidu.com/it/u=1541354865,3947599599&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=622',
  // set observer to true
  observer: true,
  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1,
  },
})
// import directives from './untils/lazy'
// directives(app)
// app.use(ElementPlus).mount('#app')
// app.use(store)
app.use(router).use(ElementPlus).use(createPinia()).mount('#app')
