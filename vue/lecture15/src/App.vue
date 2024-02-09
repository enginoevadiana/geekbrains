<template>
	<div id="app">
		<header>
			<nav @click="clickMenu">
				<a href="#dashboard" class="menu__link">Dashboard</a>
				<a href="#about" class="menu__link">About</a>
				<a href="#notfound" class="menu__link">NotFound</a>
			</nav>
		</header>
		<DashBoard v-if="page === 'dashboard'" />
		<AboutContent v-if="page === 'about'" />
		<NotFound v-if="page === 'notfound'" />
	</div>
</template>

<script>
import AboutContent from './pages/AboutContent.vue';
import DashBoard from './pages/DashBoard.vue';
import NotFound from './pages/NotFound.vue';

export default {
	name: 'App',
	components: {
		AboutContent,
		DashBoard,
		NotFound
	},
	data() {
		return {
			page: 'dashboard',
		};
	},
	methods: {
		setPage() {
			this.page = location.hash.slice(1)
		},
		clickMenu() {
			this.setPage();
			window.addEventListener('hashchange', function () {
				this.setPage();
			});
		},
	},
	mounted() {
		const links = document.querySelectorAll('.menu__link');
		links.forEach(element => {
			element.addEventListener('click', function (e) {
				e.preventDefault();
				console.log('click');
				history.pushState({}, '', element.href);
			});
		});
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

nav {
	display: flex;
	justify-content: center;
	gap: 10px;
}
</style>
