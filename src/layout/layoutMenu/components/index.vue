<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/layout/layoutMenu/components/index.vue
-->
<template>
  <n-modal v-model:show="props.showModal">
    <n-card style="width: 600px" title="项目管理" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <template #header-extra>
        <n-text @click="closeHandle" class="tb-cursor-pointer">
          <n-icon size="20">
            <component :is="Close"></component>
          </n-icon>
        </n-text>
      </template>
      <n-space justify="center">
        <n-button @click="btnHandle" v-for="item in typeList" :key="item.key" :disabled="item.disabled">
          <template #icon>
            <component :is="item.icon" />
          </template>
          {{item.title}}
        </n-button>
      </n-space>
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import { reactive, markRaw } from 'vue'
import { RouterEnum, ChartEnum } from '@/enums/routerEnums'
import { PieChartSharp, Close } from '@vicons/ionicons5'
import { ObjectStorage, Store } from '@vicons/carbon'
import { fetchPathByName, routerTurnByPath, getUUID } from '@/utils'

const props = defineProps({
  showModal: Boolean
})
const emit = defineEmits(['close'])

const typeList = reactive([
  {
    title: '新项目',
    key: ChartEnum.CHART_HOME_NAME,
    icon: markRaw(PieChartSharp),
    disabled: false
  },
  {
    title: '我的模板',
    key: RouterEnum.BASE_HOME_TEMPLATE_NAME,
    icon: markRaw(ObjectStorage),
    disabled: true
  },
  {
    title: '模板市场',
    key: RouterEnum.BASE_HOME_TEMPLATE_MARKET_NAME,
    icon: markRaw(Store),
    disabled: true
  }
])
// 处理按钮点击
function btnHandle(key: string) {
  closeHandle()
  const id = getUUID()
  const path = fetchPathByName(ChartEnum.CHART_HOME_NAME, 'href')
  routerTurnByPath(path, [id], undefined, true)
}
function closeHandle() {
  emit('close', false)
}
</script>
<style lang="scss" scoped>
.add {
  margin: 24px 0;
  text-align: center;
}
</style>
