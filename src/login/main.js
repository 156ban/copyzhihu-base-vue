import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);

Vue.use(ElementUI);

Vue.config.productionTip = false
// axios.defaults.headers.common['Authorization'] = "nini";
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')