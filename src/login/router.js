import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'
import regist from './components/regist.vue'

Vue.use(Router)

export default new Router({
  
  routes: [
	{path: '/', redirect: '/login'},
    {path: '/login', name: 'login',component: login },
	{path: '/regist', name: 'regist',component: regist }
  ]
})
