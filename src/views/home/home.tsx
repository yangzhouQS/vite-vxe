import { Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { computed, defineComponent, ref } from 'vue'

interface UserRow {
  id: number
  userName: string
  userEmail: string
  userRole: string
  isActive: boolean
  createTime: string
}

const USER_LIST: UserRow[] = [
  { id: 1, userName: '张三', userEmail: 'zhangsan@example.com', userRole: '管理员', isActive: true, createTime: '2026-01-12 09:30' },
  { id: 2, userName: '李四', userEmail: 'lisi@example.com', userRole: '开发', isActive: true, createTime: '2026-02-03 14:20' },
  { id: 3, userName: '王五', userEmail: 'wangwu@example.com', userRole: '测试', isActive: false, createTime: '2026-03-21 11:05' },
  { id: 4, userName: '赵六', userEmail: 'zhaoliu@example.com', userRole: '开发', isActive: true, createTime: '2026-05-08 16:45' },
  { id: 5, userName: '孙七', userEmail: 'sunqi@example.com', userRole: '运维', isActive: false, createTime: '2026-07-19 10:15' },
]

const ROLE_TAG_TYPE: Record<string, 'primary' | 'success' | 'warning' | 'danger' | 'info'> = {
  管理员: 'danger',
  开发: 'primary',
  测试: 'warning',
  运维: 'success',
}

export default defineComponent({
  name: 'HomePage',
  setup() {
    const keyword = ref('')
    const count = ref(0)

    const filteredUserList = computed(() => {
      const word = keyword.value.trim().toLowerCase()
      if (!word) {
        return USER_LIST
      }
      return USER_LIST.filter(
        row =>
          row.userName.toLowerCase().includes(word)
          || row.userEmail.toLowerCase().includes(word)
          || row.userRole.toLowerCase().includes(word),
      )
    })

    const handleIncrement = () => {
      count.value += 1
      ElMessage.success(`当前计数：${count.value}`)
    }

    const handleReset = () => {
      count.value = 0
      ElMessage.info('计数已重置')
    }

    return () => (
      <div class="page-home">
        <el-card shadow="never" class="page-card">
          {{
            header: () => (
              <div class="page-toolbar">
                <span class="page-title">用户列表</span>
                <el-input
                  v-model={keyword.value}
                  placeholder="搜索姓名 / 邮箱 / 角色"
                  clearable
                  prefix-icon={Search}
                  class="search-input"
                />
              </div>
            ),
            default: () => (
              <el-table data={filteredUserList.value} border stripe>
                <el-table-column prop="id" label="ID" width="70" align="center" />
                <el-table-column prop="userName" label="姓名" width="120" />
                <el-table-column prop="userEmail" label="邮箱" min-width="220" />
                <el-table-column prop="userRole" label="角色" width="110" align="center">
                  {{
                    default: (scope: { row: UserRow }) => (
                      <el-tag type={ROLE_TAG_TYPE[scope.row.userRole] ?? 'info'}>{scope.row.userRole}</el-tag>
                    ),
                  }}
                </el-table-column>
                <el-table-column prop="isActive" label="状态" width="100" align="center">
                  {{
                    default: (scope: { row: UserRow }) =>
                      scope.row.isActive ? <el-tag type="success">启用</el-tag> : <el-tag type="info">禁用</el-tag>,
                  }}
                </el-table-column>
                <el-table-column prop="createTime" label="创建时间" width="170" />
              </el-table>
            ),
          }}
        </el-card>

        <el-card shadow="never" class="page-card">
          {{
            header: () => <span class="page-title">计数器示例</span>,
            default: () => (
              <div class="counter-demo">
                <el-tag size="large" type="primary">
                  当前计数：
                  {count.value}
                </el-tag>
                <el-button type="primary" onClick={handleIncrement}>
                  加一
                </el-button>
                <el-button onClick={handleReset}>重置</el-button>
              </div>
            ),
          }}
        </el-card>
      </div>
    )
  },
})
