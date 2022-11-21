import { createApp } from 'vue'
import { setupStore } from '@/store'
import { setupComponents } from '@/packages'
import { setupNaive } from '@/plugins'
import { setupRouter } from '@/router'
import './style.css'
import AppComponent from './App.vue'

async function appInit() {
  const app = createApp(AppComponent)
  // 挂载 naive ui组件
  setupNaive(app)
  // 挂载状态管理
  setupStore(app)
  // 挂载路由
  setupRouter(app)
  // 挂载 chart 左侧组件列表
  setupComponents
  // 挂载到页面
  app.mount('#app', true)
}

void appInit()
