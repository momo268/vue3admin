import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      "@": resolve(__dirname, './src')
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  server: {
    host: true,
    port: 3699, // 端口号
    strictPort: false, // 为false表示端口占用自动尝试下一个
    open: true, // 服务启动时自动打开浏览器
    cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源,允许其他资源访问到
    proxy: {    // 跨域代理
      '/api': {  // 匹配/api的url地址
        target: "http://localhost:6572/api", // 目标地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
