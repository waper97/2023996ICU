import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './js/index'





 createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app');
