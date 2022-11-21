/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/router/router-guards.ts
 */
import { Router } from 'vue-router';
import { RouterEnum } from '@/enums/routerEnums'
// import { loginCheck } from '@/utils'

export function createRouterGuards(router: Router) {
  // 前置
  router.beforeEach(async (to, from, next) => {
    // const Loading = window['$loading'];
    // Loading && Loading.start();
    const isErrorPage = router.getRoutes().findIndex((item) => item.name === to.name);
    if (isErrorPage === -1) {
      next({ name: RouterEnum.ERROR_PAGE_NAME_404 })
    }

    // if (!loginCheck()) {
    //   if (to.name === RouterEnum.BASE_LOGIN_NAME) {
    //     next()
    //   }
    //   next({ name: RouterEnum.BASE_LOGIN_NAME })
    // }
    next()
  })

  router.afterEach((to, _, failure) => {
    // const Loading = window['$loading'];
    document.title = (to?.meta?.title as string) || document.title;
    // Loading && Loading.finish();
  })

  // 错误
  router.onError((error) => {
    console.log(error, '路由错误');
  });
}