import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/pages/NotFound.vue';
import HomePage from '@/pages/HomePage.vue';
import ProjectPage from '@/pages/ProjectPage.vue';
import BlogPage from '@/pages/BlogPage.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/homepage',
			name: 'homepage',
			component: HomePage
		},
		{
			path: '/project',
			name: 'project',
			component: ProjectPage
		},
		{
			path: '/blog',
			name: 'blog',
			component: BlogPage
		},
		{
			path: '*',
			component: NotFound
		},
	]
}) 