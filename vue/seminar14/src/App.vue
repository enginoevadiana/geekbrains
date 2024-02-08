<template>
	<div id="app">
		<CounterInfo />
		<CartDisplay />
	</div>
</template>

<script>
import CounterInfo from './components/CounterInfo.vue'
import CartDisplay from './components/CartDisplay.vue'

export default {
	name: 'App',
	components: {
		CounterInfo,
		CartDisplay
	},
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
