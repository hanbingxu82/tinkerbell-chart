<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-20 17:56:45
 * @LastEditTime: 2022-10-21 09:30:42
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/packages/components/tbButton/index.vue
-->
<template>
  <button class="v-button">{{ props.propValue }}</button>
</template>

<script setup lang="ts">
import type { Props } from './interface'
const props = withDefaults(defineProps<Props>(), {
  propValue: ''
})
</script>

<style lang="sass" scoped>
</style>
