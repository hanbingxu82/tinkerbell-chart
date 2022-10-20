/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-09-29 17:57:30
 * @LastEditTime: 2022-10-20 18:27:24
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/store/tbText.store.ts
 */
import { defineStore } from 'pinia'
export const tbTextStore = defineStore({
  id: 'tbTextStore',
  state: () => ({
    editMode: 'edit',
  })
})