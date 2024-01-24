<template>
	<div id="app">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<NewComponent></NewComponent>
		<ProductCard></ProductCard>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue'
import ProductCard from './components/ProductCard.vue'

export default {
	name: 'App',
	components: {
		NewComponent,
		ProductCard
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
</style>

