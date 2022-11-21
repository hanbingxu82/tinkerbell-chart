<!--
 * @Description: 全部项目页面
 * @Version: 1.0
 * @Author: hanbingxu
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
                <div class="action">
                  <div class="title">{{item.title}}</div>
                  <div class="other">
                    <span v-if="item.status==='0'">
                      <n-badge dot processing type='warning' /> <span>未发布</span>
                    </span>
                    <span v-if="item.status==='1'">
                      <n-badge dot processing type='success' /> <span>已发布</span>
                    </span>
                    <div class="other-btn">
                      <!-- 编辑 -->
                      <n-tooltip placement="bottom" trigger="hover">
                        <template #trigger>
                          <n-button size="small">
                            <template #icon>
                              <n-icon>
                                <HammerOutline />
                              </n-icon>
                            </template>
                          </n-button>
                        </template>
                        <span> 编辑 </span>
                      </n-tooltip>
                      <!-- 其他内容 -->
                      <n-dropdown :options="otherOptions" @select="otherSelect">
                        <n-button size="small">
                          <template #icon>
                            <n-icon>
                              <EllipsisHorizontal />
                            </n-icon>
                          </template>
                        </n-button>
                      </n-dropdown>
                    </div>
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
import { HammerOutline, EllipsisHorizontal, CopyOutline, BrowsersOutline, Pencil, Send, Trash } from '@vicons/ionicons5'
import { DocumentDownload } from '@vicons/carbon'
import { renderIcon } from '@/utils/utils'

const page = ref(1)

// 列表list
const projectItems = reactive([
  { id: 1, url: 'aaa/123', title: '测试demo', status: '0' },
  { id: 2, url: 'aaa/456', title: '测试demo2', status: '0' },
  { id: 3, url: 'aaa/567', title: '测试demo3', status: '0' },
  { id: 4, url: 'aaa/678', title: '测试demo4', status: '1' },
  { id: 5, url: 'aaa/789', title: '测试demo5', status: '1' }
])
// other 其他 options项
const otherOptions = [
  {
    label: '预览',
    key: 'profile',
    icon: renderIcon(BrowsersOutline)
  },
  {
    label: '克隆',
    key: 'editProfile',
    icon: renderIcon(CopyOutline)
  },
  {
    label: '重命名',
    key: 'logout',
    icon: renderIcon(Pencil)
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '发布',
    key: 'logout',
    icon: renderIcon(Send)
  },
  {
    label: '下载',
    key: 'logout',
    icon: renderIcon(DocumentDownload)
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '删除',
    key: 'logout',
    icon: renderIcon(Trash)
  }
]
const message = useMessage()

function otherSelect() {
  message.success('选中')
}
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
        cursor: pointer;
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
      .action {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          flex: 1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .other {
          margin-left: 32px;
          display: flex;
          align-items: center;
          .other-btn {
            .n-button {
              margin-left: 8px;
            }
          }
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
