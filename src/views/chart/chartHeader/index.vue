<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/views/chart/chartHeader/index.vue
-->
<template>
  <layoutHeader>
    <template #header>
      <n-space align="center">
        <n-button quaternary circle>
          <template #icon>
            <n-icon>
              <HomeSharp></HomeSharp>
            </n-icon>
          </template>
        </n-button>
        <!-- list -->
        <div>
          <n-space align="center">
            <!-- 图表组件 -->
            <n-button size="small">
              <template #icon>
                <n-icon>
                  <BarChartSharp />
                </n-icon>
              </template>
            </n-button>
            <!-- 图层控制 -->
            <n-button size="small">
              <template #icon>
                <n-icon>
                  <AlbumsSharp />
                </n-icon>
              </template>
            </n-button>
            <!-- 详细设置 -->
            <n-button size="small">
              <template #icon>
                <n-icon>
                  <PrismSharp />
                </n-icon>
              </template>
            </n-button>
            <!-- 后退 -->
            <n-divider vertical />
            <n-button size="small">
              <template #icon>
                <n-icon>
                  <CaretBackOutline />
                </n-icon>
              </template>
            </n-button>
            <!-- 前进 -->
            <n-button size="small">
              <template #icon>
                <n-icon>
                  <CaretForward />
                </n-icon>
              </template>
            </n-button>
            <n-divider vertical />
            <!-- 保存 -->
            <n-button size="small">
              <template #icon>
                <n-icon>
                  <SaveOutline />
                </n-icon>
              </template>
            </n-button>
          </n-space>
        </div>
      </n-space>
      <n-space align="center">
        <n-icon>
          <LogoDropbox></LogoDropbox>
        </n-icon>
        <n-gradient-text type="info">
          工作空间
        </n-gradient-text>
        <span>-</span>
        <n-button tertiary round size="tiny" type="primary">
          小仙男测试数据Primary
        </n-button>
      </n-space>

    </template>

  </layoutHeader>
</template>

<script setup lang="ts">
import layoutHeader from '@/layout/layoutHeader/index.vue'
import {
  HomeSharp,
  BarChartSharp,
  AlbumsSharp,
  PrismSharp,
  CaretBackOutline,
  CaretForward,
  SaveOutline,
  LogoDropbox
} from '@vicons/ionicons5'
</script>

<style lang="sass" scoped>
</style>
