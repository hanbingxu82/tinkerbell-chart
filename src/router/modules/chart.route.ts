/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-19 14:00:54
 * @LastEditTime: 2022-10-19 14:00:55
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/router/modules/chart.route.ts
 */
import { RouteRecordRaw } from 'vue-router'
import { ChartEnum } from '@/enums/routerEnums'

// 引入路径
const importPath = {
  'ChartEnum.CHART_HOME_NAME': () => import('@/views/chart/index.vue')
}

const chartRoutes: RouteRecordRaw = {
  path: ChartEnum.CHART_HOME,
  name: ChartEnum.CHART_HOME_NAME,
  component: importPath['ChartEnum.CHART_HOME_NAME'],
  meta: {
    title: '工作空间',
    isRoot: true
  }
}


export default chartRoutes