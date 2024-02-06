<template>
	<div>
		<ul>
			<li v-for="user in users" :key="user.id">
				<TaskOne :user="user" />
			</li>
		</ul>
		<ul>
			<li v-for="book in books" :key="book.id">
				<TaskTwo :book="book" />
			</li>
		</ul>
		<ul>
			<li v-for="movie in movies" :key="movie.id">
				<TaskThree :movie="movie" @data-info="updateMovie" />
			</li>
		</ul>
		<div v-if="selectedMovie">
			<h3>Выбранный фильм</h3>
			<p>Название: {{ selectedMovie.title }}</p>
			<p>Режиссер: {{ selectedMovie.director }}</p>
			<p>Год выпуска: {{ selectedMovie.year }}</p>
		</div>
	</div>
</template>

<script>
import TaskOne from './components/TaskOne.vue';
import TaskTwo from './components/TaskTwo.vue';
import TaskThree from './components/TaskThree.vue';

export default {
	name: 'App',
	components: {
		TaskOne,
		TaskTwo,
		TaskThree
	},
	// props: {
	// 	movie: {
	// 		type: Object
	// 	}
	// },
	data() {
		return {
			users: [
				{ id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@example.com' },
				{ id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@example.com' },
				{ id: 3, firstName: 'Анна', lastName: 'Сидорова', email: 'anna@example.com' }
			],
			books: [
				{ id: 1, title: 'Книга 1', author: 'Автор 1', year: 2020, showDetails: true, details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
				{ id: 2, title: 'Книга 2', author: 'Автор 2', year: 2019, showDetails: false },
				{ id: 3, title: 'Книга 3', author: 'Автор 3', year: 2021, showDetails: false }
			],
			movies: [
				{ id: 1, title: 'Фильм 1', director: 'Режиссер 1', year: 2020 },
				{ id: 2, title: 'Фильм 2', director: 'Режиссер 2', year: 2019 },
				{ id: 3, title: 'Фильм 3', director: 'Режиссер 3', year: 2021 },
			],
			selectedMovie: null,
		}
	},
	methods: {
		updateMovie(movieDetails) {
			this.selectedMovie = movieDetails;
		},
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
