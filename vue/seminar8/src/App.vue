<template>
	<div id="app">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<NewComponent></NewComponent>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NewComponent from './components/NewComponent.vue'

export default {
	name: 'App',
	components: {
		NewComponent
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

<!-- Создайте компонент галереи изображений, который будет отображать одно большое изображение и под ним будут находиться три мини изображения. При клике на любое мини изображение оно должно отображаться вместо большого. -->