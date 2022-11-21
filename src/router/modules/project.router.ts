/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/router/modules/project.router.ts
 */
import { RouteRecordRaw } from 'vue-router'
import { RouterEnum } from '@/enums/routerEnums'

// 引入路径
const importPath = {
  'RouterEnum.BASE_HOME_NAME': () => import('@/views/project/index.vue'),
  'RouterEnum.BASE_HOME_ITEMS_NAME': () => import('@/views/project/items/index.vue'),
  'RouterEnum.BASE_HOME_TEMPLATE_NAME': () => import('@/views/project/myTemplate/index.vue'),
  'RouterEnum.BASE_HOME_TEMPLATE_MARKET_NAME': () => import('@/views/project/templateMarket/index.vue')
}

const projectRoutes: RouteRecordRaw = {
  path: RouterEnum.BASE_HOME,
  name: RouterEnum.BASE_HOME_NAME,
  component: importPath['RouterEnum.BASE_HOME_NAME'],
  redirect: RouterEnum.BASE_HOME_ITEMS,
  meta: {
    title: '项目',
    isRoot: true
  },
  children: [
    {
      path: RouterEnum.BASE_HOME_ITEMS,
      name: RouterEnum.BASE_HOME_ITEMS_NAME,
      component: importPath['RouterEnum.BASE_HOME_ITEMS_NAME'],
      meta: {
        title: '项目主页'
      }
    },
    {
      path: RouterEnum.BASE_HOME_TEMPLATE,
      name: RouterEnum.BASE_HOME_TEMPLATE_NAME,
      component: importPath['RouterEnum.BASE_HOME_TEMPLATE_NAME'],
      meta: {
        title: '我的模板'
      }
    },
    {
      path: RouterEnum.BASE_HOME_TEMPLATE_MARKET,
      name: RouterEnum.BASE_HOME_TEMPLATE_MARKET_NAME,
      component: importPath['RouterEnum.BASE_HOME_TEMPLATE_MARKET_NAME'],
      meta: {
        title: '模板市场'
      }
    }
  ]
}

export default projectRoutes
