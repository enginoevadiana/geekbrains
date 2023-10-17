<!-- Создайте компонент галереи изображений, который будет отображать одно большое изображения и под ним будет находиться три мини изображения, при клике на любое мини изображение оно будет отображаться вместо большого изображения. -->

<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<GalleryComponent />
		<NewComponent />
	</div>
</template>

<script>
import GalleryComponent from './components/GalleryComponent.vue';
import NewComponent from './components/NewComponent.vue'

export default {
	name: 'App',
	components: {
		NewComponent,
		GalleryComponent
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
