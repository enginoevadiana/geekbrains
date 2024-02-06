<template>
	<div class="movie" @click="getMovieInfo">
		<div>
			<h3>{{ movie.title }}</h3>
			<p>Режиссер: {{ movie.director }}</p>
			<p>Год выпуска: {{ movie.year }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		movie: {
			type: Object
		}
	},
	methods: {
		getMovieInfo() {
			this.$emit('data-info', this.movie)
		}
	}
}
</script>


<!-- 
Создать приложение для отображения списка фильмов. На странице должна отображаться информация (название, режиссер, год) для каждого фильма из массива. При клике на фильм, он отображается как выбранный в специальном блоке.
 -->