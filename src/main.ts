import {createApp} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import App from './App.vue'
import store from './store/index'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(store)

app.mount('#app')
