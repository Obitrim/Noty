import Vue from 'vue'
import store from "@/store/index.js"
import router from "@/router"
import plugins from './plugins'
import App from './views/App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(plugins);

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
