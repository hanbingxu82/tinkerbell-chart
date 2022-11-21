/*
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/packages/index.ts
 */
import type { App } from 'vue'


const components = [
  'tbButton',
  'tbText',
  'tbImage'
]

export function setupComponents(app: App<Element>) {
  components.forEach(key => {
    app.component(key, () => import(`@packages/components/${key}/index`))
  })

}
