import Vue from 'vue';
import VueRouter from 'vue-router';
import InsertView from '@/views/InsertView.vue';
import NameAgeListView from '@/views/NameAgeListView.vue';
import PageNotFoundView from '@/views/PageNotFoundView.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'insert',
		component: InsertView,
	},
	{
		path: '/name-age-list',
		name: 'name-age-list',
		component: NameAgeListView,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () =>
		// 	import(/* webpackChunkName: "about" */ '../views/NameAgeList.vue'),
	},
	{
		path: '/404',
		name: 'page-not-found',
		component: PageNotFoundView,
	},
	{
		path: '*',
		redirect: '/404',
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
