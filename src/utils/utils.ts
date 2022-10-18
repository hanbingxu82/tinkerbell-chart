/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-12 09:43:39
 * @LastEditTime: 2022-10-12 09:57:38
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/utils/utils.ts
 */
import { h } from 'vue'
import { NIcon } from 'naive-ui'
/**
 * * render 图标
 *  @param icon 图标
 *  @param set 设置项
 */
export const renderIcon: (icon: any, set?: {}) => () => any = (icon: any, set = {}) => {
  return () => h(NIcon, set, { default: () => h(icon) })
}