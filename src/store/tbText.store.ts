/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
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