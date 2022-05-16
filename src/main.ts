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

// app.use(ElementPlus).mount('#app')
// app.use(store)
app.use(router).use(ElementPlus).use(createPinia()).mount('#app')
