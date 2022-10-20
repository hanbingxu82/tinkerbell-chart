<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-12 09:19:51
 * @LastEditTime: 2022-10-19 15:41:16
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/layout/layoutMenu/index.vue
-->
<template>
  <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :collapsed="collapsed" show-trigger
    @collapse="collapsed = true" @expand="collapsed = false">
    <div class="add">
      <n-button @click="clickHandle">
        <template #icon>
          <n-icon>
            <BookmarkAdd />
          </n-icon>
        </template>
        <template v-if="!collapsed" >
          新增
        </template>
      </n-button>
    </div>
    <n-menu default-expand-all :options="menuOptions" @update:value="handleUpdateValue" />
  </n-layout-sider>
  <addModal :show="modalShow" @close="closeHandle"></addModal>
</template>
<script setup lang="ts">
import addModal from './components/index.vue'
import { BookmarkAdd } from '@vicons/carbon'
import { ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { menuOptions } from './menu'

const message = useMessage()
function handleUpdateValue(key: string, item: MenuOption) {
  message.info('[onUpdate:value]: ' + JSON.stringify(key))
  message.info('[onUpdate:value]: ' + JSON.stringify(item))
}
const modalShow = ref<boolean>(false)

function clickHandle() {
  modalShow.value = true
}

function closeHandle() {
  modalShow.value = false
}
const collapsed = ref(false)
</script>
<style lang="scss" scoped>
.add {
  margin: 24px 0;
  text-align: center;
}
</style>
