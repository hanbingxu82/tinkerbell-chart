/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-09-27 14:09:29
 * @LastEditTime: 2022-10-21 09:32:21
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/vite-env.d.ts
 */
/// <reference types="vite/client" />
interface Window {
  $loading: any
  $message: any
  $dialog: any
  // 语言
  $t: any
  $vue: any
  // 键盘按键记录
  $KeyboardActive?: Set<string>
}


declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}