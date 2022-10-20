<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-20 17:56:57
 * @LastEditTime: 2022-10-20 18:12:33
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/packages/components/tbImage/index.vue
-->
<template>
  <div style="overflow: hidden">
    <img :src="props.propValue">
  </div>
</template>

<script setup lang="ts">
import type { Props } from './interface'
const props = withDefaults(defineProps<Props>(), {
  propValue: ''
})
</script>

<style lang="sass" scoped>
</style>
