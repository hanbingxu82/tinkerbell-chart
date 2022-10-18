<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-12 09:19:47
 * @LastEditTime: 2022-10-17 13:46:23
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/layout/layoutMain/index.vue
-->
<template>
  <div class="layoutMain">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.layoutMain {
  height: calc(100vh - 60px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
