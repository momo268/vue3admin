// core
import { createApp } from "vue"
import App from "@/App.vue"
import store from "@/store"
import router from "@/router"
import "@/router/permission"
// load
import { loadSvg } from "@/icons"
import { loadDirectives } from "@/directives"
// css
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "normalize.css"
import "@/styles/index.scss"

const app = createApp(App)


/** 加载全局 SVG */
loadSvg(app)
/** 加载自定义指令 */
loadDirectives(app)

app.use(store).use(router)
router.isReady().then(() => {
  app.mount("#app")
})
