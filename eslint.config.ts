import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Vue SFC 支持（.vue 文件），TSX 由 typescript 选项统一处理
    vue: true,
    typescript: true,
    // 关闭与本项目无关的模块
    astro: false,
    react: false,
    svelte: false,
    unocss: false,
    // 仅校验代码风格，不接管 CSS/HTML/Markdown 格式化
    formatters: false,
  },
  {
    rules: {
      // TSX 组件中大段 JSX 返回值保留多行书写
      'antfu/if-newline': 'off',
    },
  },
)
