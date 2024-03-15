import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig(() => {
  return {
    plugins: [
      uni(),
      UnoCSS(),
      AutoImport({
        imports: ['vue', 'pinia'],
      }),
    ],

    /*开发服务器选项*/
    server: {
      // 端口
      port: 3003,
      // 运行时自动打开浏览器
      open: false,
      // 代理配置
      proxy: {
        // ...
      },
    },
  }
})
