import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/css/bootstrap.min.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/animate.css'
import './assets/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
