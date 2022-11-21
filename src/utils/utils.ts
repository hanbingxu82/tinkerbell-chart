/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
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

/**
 * * 生成一个不重复的ID
 * @param { Number } randomLength
 */
export const getUUID = (randomLength = 10) => {
  return Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}