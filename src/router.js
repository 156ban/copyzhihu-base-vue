import Vue from 'vue'
import Router from 'vue-router'
import contentlist from './components/common/contentlist';
import hotlist from './components/common/hotlist';
import home from './components/home.vue';
import first_page from './components/first_page.vue';
import second_page from './components/second_page.vue';
import user_page from './components/user_page.vue';
import question_page from './components/question_page.vue';
Vue.use(Router)

export default new Router({

	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			redirect: '/home/first_page',
			children: [{
				path: 'first_page',
				component: first_page,
				redirect: 'first_page/first_page_1',
				children: [{
						path: 'first_page_1',
						component: contentlist,
						name: 'recommend'
					},
					{
						path: 'first_page_2',
						component: contentlist,
						name: 'follow'
					},
					{
						path: 'first_page_3',
						component: contentlist,
						name: 'hot'
					}

				],
			 
			},
			{
				path: 'question_page',
				component: question_page,
				name: 'question'
			},
			{
				path: 'second_page',
				component: second_page,
				name: 'recommend'
			},
			{
				path: 'user_page',
				component: user_page,
				redirect: 'user_page/first_page_1',
				children: [{
						path: 'first_page_1',
						component: contentlist,
						name: 'follow'
					},
					{
						path: 'first_page_2',
						component: contentlist,
						name: 'recommend'
					},
					{
						path: 'first_page_3',
						component: contentlist,
						name: 'question'
					}
				
				],
			},
			]
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
		}
	]
})
