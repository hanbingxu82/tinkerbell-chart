<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-12 09:19:41
 * @LastEditTime: 2022-10-14 11:23:52
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/layout/layoutHeader/index.vue
-->
<template>
  <n-layout>
    <n-layout-header style="height: 60px" bordered>
      <div class="header-select">
        <!-- 中英文互译 -->
        <n-dropdown trigger="hover" :options="translateOptions" @select="handleSelect">
          <n-button quaternary>
            <template #icon>
              <n-icon size="24">
                <Language></Language>
              </n-icon>
            </template>
          </n-button>
        </n-dropdown>
        <!-- 主题 -->
        <n-button quaternary>
          <template #icon>
            <n-icon size="24">
              <InteractiveSegmentationCursor></InteractiveSegmentationCursor>
            </n-icon>
          </template>
        </n-button>
        <!-- 灯光 -->
        <n-button quaternary>
          <template #icon>
            <n-icon v-if="isLight" size="24">
              <Light></Light>
            </n-icon>
            <n-icon v-else size="24">
              <LightFilled></LightFilled>
            </n-icon>
          </template>
        </n-button>
        <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      </div>

    </n-layout-header>
  </n-layout>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useMessage } from 'naive-ui'
import { Language, InteractiveSegmentationCursor, Light, LightFilled } from '@vicons/carbon'
const message = useMessage()
// 是否开灯
const isLight = ref(false)
// 中英文互译Options
const translateOptions = reactive([
  {
    label: '中文',
    key: 'chinese'
  },
  {
    label: 'english',
    key: 'english'
  }
])
function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>
<style lang="scss" scoped>
.header-select {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: end;
  padding: 0 48px;
  > .n-button {
    margin-right: 24px;
  }
}
</style>
