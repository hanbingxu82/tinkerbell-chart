/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-09-29 17:57:30
 * @LastEditTime: 2022-09-29 17:57:30
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/store/index.ts
 */
import { defineStore } from 'pinia'
export const defaultStore = defineStore({
  id: 'default',
  state: () => ({
    count: 0,
  })
})