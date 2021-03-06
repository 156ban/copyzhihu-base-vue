import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios);

Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
axios.defaults.baseURL = 'https://easy-mock.com/mock/5d32d173da27b648233a1601/example';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
