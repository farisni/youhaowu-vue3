import '@/styles/common.scss' // 公共样式
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {lazyPlugin} from "@/directives/index.js";
import {componentPlugin} from "@/components/index.js";



const app = createApp(App)

app.use(createPinia())
app.use(router)

// 图片懒加载指令
app.use(lazyPlugin)
// 全局组件插件化配置
app.use(componentPlugin)



app.mount('#app')
