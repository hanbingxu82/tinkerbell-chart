/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-12 09:34:47
 * @LastEditTime: 2022-10-14 15:10:50
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/layout/layoutMenu/menu.ts
 */
import { h } from 'vue'
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'
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
            label: '全部项目',
            key: 'narrator',
            icon: renderIcon(TvOutline)
          },
          {
            label: '我的模板',
            key: 'narrator',
            icon: renderIcon(TabletLandscapeOutline)
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
  {
    label: '模板市场',
    key: 'market',
    icon: renderIcon(DiamondOutline)
  },
]