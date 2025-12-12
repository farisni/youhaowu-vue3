import '@/styles/common.scss' // 公共样式
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {lazyPlugin} from "@/directives/index.js";


const app = createApp(App)

app.use(createPinia())
app.use(router)

// 图片懒加载指令
app.use(lazyPlugin)



app.mount('#app')
