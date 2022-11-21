<!--
 * @Description: 我的模板页面
 * @Version: 1.0
 * @Author: hanbingxu
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
  margin-top: 16%;
  @extend .tb-flex-center;
}
</style>
