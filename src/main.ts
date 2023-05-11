import { createApp } from 'vue'
import './styles/indx.scss'
import App from './App.vue'
import router from './router'
import store from '@/store'

const app = createApp(App)
app.use(router).use(store)
app.mount('#app')
