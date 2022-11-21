<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-19 17:19:50
 * @LastEditTime: 2022-10-26 14:37:10
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/views/chart/chartEdit/index.vue
-->
<template>
  <div class="content" @drop="handleDrop" @dragover="handleDragOver" @click="deselectCurComponent">
    <component v-for="item in componentData" :key="item.id" :is="item.component" :style="item.style"
      :propValue="item.propValue" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const componentData = reactive([])
function handleDrop(e) {}
function handleDragOver(e) {
  e.preventDefault()
}
function handleMouseDown(e) {
  e.target.appendChild(document.getElementById(data))
}
function deselectCurComponent(e) {}
</script>

<style lang="sass" scoped>
</style>
