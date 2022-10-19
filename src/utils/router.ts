/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-19 09:52:49
 * @LastEditTime: 2022-10-19 09:53:57
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/utils/router.ts
 */
import router from '@/router'
/**
 * * 根据名字跳转路由
 * @param pageName
 * @param isReplace
 * @param windowOpen
 */
export const routerTurnByName = (
  pageName: string,
  isReplace?: boolean,
  windowOpen?: boolean
) => {
  if (windowOpen) {
    const path = fetchPathByName(pageName, 'href')
    openNewWindow(path)
    return
  }
  if (isReplace) {
    router.replace({
      name: pageName,
    })
    return
  }
  router.push({
    name: pageName,
  })
}

/**
 * * 根据名称获取路由信息
 * @param pageName
 * @param pageName
 */
export const fetchPathByName = (pageName: string, p?: string) => {
  try {
    const pathData = router.resolve({
      name: pageName,
    })
    return p ? (pathData as any)[p] : pathData
  } catch (error) {
    window['$message'].warning('查询路由信息失败，请联系管理员！')
  }
}

/**
 * * 新开页面
 * @param url
 */
export const openNewWindow = (url: string) => {
  return window.open(url, '_blank')
}
