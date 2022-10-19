<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-19 11:07:32
 * @LastEditTime: 2022-10-19 13:18:43
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/views/project/myTemplate/index.vue
-->
<template>
  <div class="tb-my-template">
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
@include tb('my-template') {
  margin-top: 20%;
  @extend .tb-flex-center;
}
</style>
