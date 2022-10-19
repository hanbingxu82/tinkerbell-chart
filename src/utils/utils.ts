/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-12 09:43:39
 * @LastEditTime: 2022-10-19 11:12:41
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/utils/utils.ts
 */
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import Image_404 from '../assets/images/exception/image-404.png'
/**
 * * render 图标
 *  @param icon 图标
 *  @param set 设置项
 */
export const renderIcon: (icon: any, set?: {}) => () => any = (icon: any, set = {}) => {
  return () => h(NIcon, set, { default: () => h(icon) })
}
/**
 * * 获取错误处理图片，默认 404 图
 * @returns url
 */
export const requireErrorImg = () => {
  return Image_404
}