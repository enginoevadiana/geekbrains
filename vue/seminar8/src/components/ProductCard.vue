<template>
	<div>
		<h2>Карточка товара</h2>
		<!-- Тут необходимо вывести название товара описание цену и средний рейтинг -->
		<div>
			<p>{{ product.name }}</p>
			<p>{{ product.description }}</p>
			<p>{{ product.price }}</p>
			<p>{{ averageRating }}</p>
		</div>

		<h3>Отзывы:</h3>
		<!-- перебрать отзывы reviews -->
		<div v-for="review in reviews" :key="review.id">
			<p>{{ review.username }}</p>
			<p>{{ review.text }}</p>
			<p>{{ review.rating }} / 5</p>
		</div>

		<h3>Добавить отзыв:</h3>
		<p><input v-model="username" placeholder="Ваше имя"></p>
		<div><textarea v-model="reviewText" placeholder="Текст отзыва"></textarea></div>
		<select v-model="rating">
			<option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
		</select>
		<button @click="submitReview">Отправить</button>
	</div>
</template>
	
<script>
export default {
	data() {
		return {
			product: {
				name: 'Название товара',
				description: 'Это описание товара',
				price: 500
			},
			reviews: [
				{
					id: 1,
					username: 'Анна',
					text: 'Отличный товар! Рекомендую.',
					rating: 5
				},
				{
					id: 2,
					username: 'Игорь',
					text: 'Неплохо, но есть недочеты.',
					rating: 4
				},
				{
					id: 3,
					username: 'Светлана',
					text: 'Не оправдал ожиданий.',
					rating: 2
				}
			],
			username: '',
			reviewText: '',
			rating: 5
		};
	},
	computed: {
		averageRating() {
			if (this.reviews.length === 0) return 0;
			// необходимо найти сумму всех оценок
			// return вернуть среднюю оценку
			else {
				let countRating = 0;
				this.reviews.forEach(review => {
					countRating += review.rating;
				});
				// Можно сделать то же самое с помощью reduce (считает сумму элементов массива)
				// let countRating = this.reviews.reduce((accumulator, currentValue) => accumulator + currentValue.rating, 0);
				return Math.round(countRating /= this.reviews.length);
			}
		}
	},
	methods: {
		submitReview() {
			const newReview = {
				id: Date.now(),
				username: this.username,
				text: this.reviewText,
				rating: parseInt(this.rating)
			};
			this.reviews.push(newReview);
			this.username = '';
			this.reviewText = '';
			this.rating = 5;
		}
	}
}
</script>

	<!-- Создать компонент, отображающий карточку товара с деталями и отзывами пользователей. Пользователи могут добавлять новые отзывы. В описании продукта рассчитывается его средний рейтинг (новые отзывы также должны учитываться). -->