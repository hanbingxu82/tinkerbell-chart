<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-09-27 14:09:29
 * @LastEditTime: 2022-10-17 17:37:27
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/App.vue
-->
<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from 'naive-ui'
</script>
<style lang="scss" scoped>
</style>
