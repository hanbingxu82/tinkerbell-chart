/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-09-27 14:09:29
 * @LastEditTime: 2022-10-14 10:00:23
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  // 路径重定向
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      }
    ],
    dedupe: ['vue']
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/variables.scss";'
      }
    }
  }
})
