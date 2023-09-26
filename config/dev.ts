import type { UserConfigExport } from '@tarojs/cli'

export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {
    // h5端口启动配置
    devServer: {
      port: 6001,
    },
  },
} satisfies UserConfigExport
