<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-19 13:31:39
 * @LastEditTime: 2022-10-19 13:34:49
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/views/project/templateMarket/index.vue
-->
<template>
  <div class="tb-template-market">
    <n-space vertical>
      <n-image object-fit="contain" height="300" preview-disabled :src="requireErrorImg()"></n-image>
      <n-h3>暂时还没有东西呢</n-h3>
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { requireErrorImg } from '@/utils'
</script>

<style lang="scss" scoped>
@include tb('template-market') {
  margin-top: 16%;
  @extend .tb-flex-center;
}
</style>
