<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
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
