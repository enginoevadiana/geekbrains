<template>
	<div id="app">
		<header>
			<nav>
				<router-link to="/dashboard">DashBoard</router-link>
				<router-link to="/about">About Page</router-link>
				<router-link to="/hello">Hello</router-link>
			</nav>
		</header>
		<router-view />
	</div>
</template>

<script>

export default {
	name: 'App',
	// created() {
	// 	this.$router.push({ name: 'dashboard' })
	// }
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
