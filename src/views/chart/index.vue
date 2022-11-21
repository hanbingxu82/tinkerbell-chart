<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-19 14:14:24
 * @LastEditTime: 2022-10-21 10:27:09
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/views/chart/index.vue
-->
<template>
  <div class="chart-view">
    <n-layout>
      <n-layout-header bordered>
        <chartHeader>
        </chartHeader>
      </n-layout-header>
    </n-layout>
    <n-layout class="chart-view-edit" has-sider sider-placement="right">
      <n-layout-content>
        <n-layout class="chart-view-edit" has-sider sider-placement="left">
          <n-layout-sider collapse-mode="transform" :native-scrollbar="false" show-trigger="arrow-circle"
            content-style="padding: 24px;" bordered>
            <chartLeft></chartLeft>
          </n-layout-sider>
          <n-layout-content>
            <chartEdit></chartEdit>
          </n-layout-content>
        </n-layout>
      </n-layout-content>
      <n-layout-sider collapse-mode="transform" :native-scrollbar="false" show-trigger="arrow-circle"
        content-style="padding: 24px;" bordered>
        <chartRight></chartRight>
      </n-layout-sider>
    </n-layout>
  </div>

</template>

<script setup lang="ts">
import chartLeft from './chartLeft/index.vue'
import chartRight from './chartRight/index.vue'
import chartHeader from './chartHeader/index.vue'
import chartEdit from './chartEdit/index.vue'
</script>

<style lang="scss" scoped>
.chart-view {
  height: 100vh;
  .chart-view-edit {
    height: calc(100vh - 60px);
  }
}
</style>
