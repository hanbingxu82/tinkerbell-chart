/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-11 10:06:09
 * @LastEditTime: 2022-10-11 18:36:35
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import modules from '@/router/modules'
import { createRouterGuards } from './router-guards'
import { RouterEnum } from '@/enums/routerEnums'
import App from '@/App.vue'

const RootRoute: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    redirect: RouterEnum.BASE_HOME,
    component: App,
    meta: {
      title: 'Root',
    },
    children: [
      modules.projectRoutes
    ]
  }
]

export const constantRouter: any[] = [...RootRoute,]
const router = createRouter({
  history: createWebHashHistory(''),
  routes: constantRouter,
  strict: true,
})

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router)
}