import Vue from 'vue';
import VueRouter from 'vue-router';
import InsertView from '@/views/InsertView.vue';
import NameAgeListView from '@/views/NameAgeListView.vue';

Vue.use(VueRouter);

const routes = [
	{
		mode: 'history',
		path: '/',
		name: 'insert',
		component: InsertView,
	},
	{
		mode: 'history',
		path: '/name-age-list',
		name: 'name-age-list',
		component: NameAgeListView,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () =>
		// 	import(/* webpackChunkName: "about" */ '../views/NameAgeList.vue'),
	},
	// {
	// 	mode: 'history',
	// 	routes: [
	// 		{ path: '/', name: 'insert', component: InsertView },
	// 		{
	// 			path: '/name-age-list',
	// 			name: 'name-age-list',
	// 			component: NameAgeListView,
	// 		},
	// 		{ path: '*', redirect: '/' },
	// 	],
	// },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
