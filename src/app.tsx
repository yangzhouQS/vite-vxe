import { HomeFilled, InfoFilled } from '@element-plus/icons-vue'
import { computed, defineComponent } from 'vue'
import { RouterView, useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute()
    const activeMenu = computed(() => route.path)

    return () => (
      <el-container class="app-layout">
        <el-header class="app-header">
          <div class="app-brand">
            <span class="app-brand-badge">VXE</span>
            <span>Vite + Vue3 + TSX + Element Plus</span>
          </div>
          <el-menu mode="horizontal" router default-active={activeMenu.value} class="app-menu">
            <el-menu-item index="/">
              <el-icon>
                <HomeFilled />
              </el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <el-icon>
                <InfoFilled />
              </el-icon>
              <span>关于</span>
            </el-menu-item>
          </el-menu>
        </el-header>
        <el-main class="app-main">
          <RouterView />
        </el-main>
      </el-container>
    )
  },
})
