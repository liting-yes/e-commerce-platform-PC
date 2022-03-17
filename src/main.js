import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
//import ui from './components/library' 暂时体现不出优化点，故暂停用
import 'normalize.css'
import './assets/styles/common.less'
import './assets/styles/mixins.less'
import './assets/styles/variables.less'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).use(router).mount('#app')
