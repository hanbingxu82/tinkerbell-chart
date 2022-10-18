<!--
 * @Description: 
 * @Version: 1.0
 * @Author: hanbingxu
 * @Date: 2022-10-17 13:53:22
 * @LastEditTime: 2022-10-17 17:58:13
 * @LastEditors: hanbingxu
 * @FilePath: /vite-chart/src/views/project/items/index.vue
-->
<template>
  <div class="project-items">
    <div class="items">
      <n-grid cols="1 s:2 m:3 l:4 xl:4 " x-gap="16" y-gap="16" responsive="screen">
        <n-grid-item v-for="item in projectItems" :key="item.url">
          <div class="item">
            <n-card title="卡片插槽示例" closable @close="handleClose">
              <div class="bg">
                <img class='img' src="@/assets/vue.svg" />
              </div>
              <template #action>
                <div>
                  <span class="title"></span>
                  <div>
                    <span v-if="item.status==='0'">
                      <n-badge dot processing type='warning' /> <span>未发布</span>
                    </span>
                    <span v-if="item.status==='1'">
                      <n-badge dot processing type='success' /> <span>已发布</span>
                    </span>
                    
                  </div>
                </div>
              </template>
            </n-card>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
    <div class="pagination">
      <n-pagination v-model:page="page" :page-count="100" size="small" show-quick-jumper show-size-picker />
    </div>

  </div>

</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useMessage } from 'naive-ui'

const page = ref(1)

const projectItems = reactive([
  { id: 1, url: 'aaa/123', title: '测试demo', status: '0' },
  { id: 2, url: 'aaa/456', title: '测试demo2', status: '0' },
  { id: 3, url: 'aaa/567', title: '测试demo3', status: '0' },
  { id: 4, url: 'aaa/678', title: '测试demo4', status: '1' },
  { id: 5, url: 'aaa/789', title: '测试demo5', status: '1' }
])
const message = useMessage()
function handleClose() {
  message.info('Card Close')
}
</script>
<style lang="scss" scoped>
.project-items {
  .items {
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    .item {
      .bg {
        width: 100%;
        height: 180px;
        background-image: linear-gradient(#18181c 14px, transparent 0),
          linear-gradient(90deg, transparent 14px, #86909c 0);
        background-color: #18181c;
        background-size: 15px 15px, 15px 15px;
        text-align: center;
        .img {
          width: 80%;
          height: 90%;
        }
      }
    }
  }
  .pagination {
    float: right;
    margin-right: 16px;
  }
}
</style>
