import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
const app = createApp(App)

app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '974494605104-tslbv9lskbf2efn0v35jrci3eukc64ns.apps.googleusercontent.com'
  })
app.mount('#app')
