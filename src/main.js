import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 引入懒加载指令插件并且注册，复杂度交给directive的index.js
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from './components'

const app = createApp(App)
// 在设置state的时候会自动把数据同步给localstorage，在获取state数据的时候会优先从localStorage中取，避免刷新丢失
const pinia = createPinia()
// 注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')