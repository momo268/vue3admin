// core
import { createApp } from "vue"
import App from "@/App.vue"
import store from "@/store"
import router from "@/router"
import "@/router/permission"
// load
import { loadSvg } from "@/icons"
// css
import "element-plus/dist/index.css"
import "@/styles/index.scss"

const app = createApp(App)


/** 加载全局 SVG */
loadSvg(app)


app.use(store).use(router)
router.isReady().then(() => {
  app.mount("#app")
})
