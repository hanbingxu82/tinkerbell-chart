/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-09-29 18:13:02
 * @LastEditTime: 2022-09-29 18:15:25
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/store/index.ts
 */
import type { App } from 'vue'
import { createPinia } from 'pinia'

const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
