import App from './App'
// main.js
import uView from '@/uni_modules/uview-ui'
import Vue from 'vue'
import api from 'utils/api.js'

// api
Vue.prototype.$api = api
Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView);

const app = new Vue({
	...App
})
app.$mount()

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif
