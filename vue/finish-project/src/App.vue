<template>
	<div id="app">
		<!-- <img src="./assets/Logo.png" alt="logo picture"> -->
		<HeaderItem />
		<router-view />
		<FooterItem />
	</div>
</template>

<script>
import HeaderItem from './components/HeaderItem.vue';
import FooterItem from './components/FooterItem.vue';

export default {
	name: 'App',
	components: {
		HeaderItem,
		FooterItem
	}
}
</script>

<style>
#app {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap');

#app {
	font-family: 'Roboto', sans-serif;
}
</style>
