/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/layout/layoutMenu/menu.ts
 */
import { h } from 'vue'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { RouterEnum } from '@/enums/routerEnums'
import { renderIcon } from '@/utils/utils'
import {
  TvOutline,
  TabletLandscapeOutline,
  LayersOutline,
  DiamondOutline
} from '@vicons/ionicons5'


export const menuOptions: MenuOption[] = [
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    label: '项目',
    key: 'dance-dance-dance',
    icon: renderIcon(LayersOutline),
    children: [
      {
        type: 'group',
        label: '我的',
        key: 'people',
        children: [
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: RouterEnum.BASE_HOME_ITEMS_NAME,
                  },
                },
                { default: () => '全部项目' }
              ),
            key: RouterEnum.BASE_HOME_ITEMS_NAME,
            icon: renderIcon(TvOutline),
          },
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: RouterEnum.BASE_HOME_TEMPLATE_NAME,
                  },
                },
                { default: () => '我的模板' }
              ),
            key: RouterEnum.BASE_HOME_TEMPLATE_NAME,
            icon: renderIcon(TabletLandscapeOutline),
          }
        ]
      }
    ]
  },
  {
    key: 'divider-2',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  // {
  //   label: '模板市场',
  //   key: 'market',
  //   icon: renderIcon(DiamondOutline)
  // },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: RouterEnum.BASE_HOME_TEMPLATE_MARKET_NAME,
          },
        },
        { default: () => '模板市场' }
      ),
    key: RouterEnum.BASE_HOME_TEMPLATE_MARKET_NAME,
    icon: renderIcon(DiamondOutline),
  },
]