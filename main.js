import App from './App'
// main.js
import uView from '@/uni_modules/uview-ui'
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView);

const app = new Vue({
	...App
})
// 引入请求封装，将app参数传递到配置中
require('utils/request.js')(app)
app.$mount()
