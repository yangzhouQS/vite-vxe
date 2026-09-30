import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

const TECH_STACK = [
  { label: '构建工具', value: 'Vite 8' },
  { label: '前端框架', value: 'Vue 3.5（TSX 渲染函数）' },
  { label: '路由管理', value: 'Vue Router 5' },
  { label: 'UI 组件库', value: 'Element Plus 2.x' },
  { label: '开发语言', value: 'TypeScript 5.9' },
]

export default defineComponent({
  name: 'AboutPage',
  setup() {
    return () => (
      <el-card shadow="never" class="page-card">
        {{
          header: () => <span class="page-title">关于项目</span>,
          default: () => (
            <div class="about-page">
              <el-alert
                title="本项目基于 Vite + Vue3 + TSX + Element Plus 搭建"
                type="success"
                show-icon
                closable={false}
              />
              <el-descriptions column={1} border>
                {TECH_STACK.map(item => (
                  <el-descriptions-item key={item.label} label={item.label}>
                    {item.value}
                  </el-descriptions-item>
                ))}
              </el-descriptions>
              <RouterLink to="/" class="about-back">
                <el-button type="primary">返回首页</el-button>
              </RouterLink>
            </div>
          ),
        }}
      </el-card>
    )
  },
})
