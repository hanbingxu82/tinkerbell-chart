<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-11 18:38:21
 * @LastEditTime: 2022-10-17 13:43:29
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/views/project/index.vue
-->
<template>
  <n-space vertical>
    <n-layout has-sider>
      <layoutMenu />
      <n-layout>
        <layoutHeader></layoutHeader>
        <layoutMain></layoutMain>
      </n-layout>
    </n-layout>
  </n-space>
</template>
<script setup lang="ts">
import layoutHeader from '@/layout/layoutHeader/index.vue'
import layoutMain from '@/layout/layoutMain/index.vue'
import layoutMenu from '@/layout/layoutMenu/index.vue'
</script>
<style scoped>
</style>
