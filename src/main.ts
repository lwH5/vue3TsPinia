import { createApp } from 'vue'
import './style.css'
import './assets/css/normalize.css'
import {router} from './router'
import {createPinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import 'amfe-flexible'
const app=createApp(App)
const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
app.provide('global',{
    router
})
app.use(router).use(pinia).mount('#app');
