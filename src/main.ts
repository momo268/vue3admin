import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import "@/router/permission"
import { loadSvg } from "@/icons";
import "element-plus/dist/index.css";


import "normalize.css"
import "./styles/indx.scss";
const app = createApp(App);

loadSvg(app);
app.use(router).use(store);
app.mount("#app");
