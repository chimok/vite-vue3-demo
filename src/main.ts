import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/style/base.scss'

import ElementPlus from 'element-plus'
import 'element-plus/packages/theme-chalk/src/base.scss'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
