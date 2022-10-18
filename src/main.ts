/*
 * @Description: hanbingxu
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-09-27 14:09:29
 * @LastEditTime: 2022-10-14 10:00:34
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/main.ts
 */
import { createApp } from 'vue'
import { setupStore } from '@/store'
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
  // 挂载到页面
  app.mount('#app', true)
}

void appInit()
