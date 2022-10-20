<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-20 17:57:04
 * @LastEditTime: 2022-10-20 18:41:02
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/packages/components/tbText/index.vue
-->
<template>
  <div>
    <textarea v-if="store.editMode == 'edit'" :value="propValue" class="text textarea" @input="handleInput"
      ref="v-text"></textarea>
    <div v-else class="text disabled">
      <div v-for="(text, index) in propValue.split('\n')" :key="index">{{ text }}</div>
    </div>
  </div>

</template>

<script setup lang="ts">
import type { Props } from './interface'
import { tbTextStore } from '@/store/tbText.store'
const store = tbTextStore()
const props = withDefaults(defineProps<Props>(), {
  propValue: '',
  element: {}
})
const emit = defineEmits<{
  (e: 'input', element: Object, val: string): void
}>()

function handleInput(e: InputEvent | Event) {
  emit('input', props.element, (e.target as HTMLInputElement).value)
}
</script>

<style lang="sass" scoped>
</style>
