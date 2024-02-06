<template>
	<div class="book">
		<h3 @click="flag = !flag">{{ book.title }}</h3>
		<div v-if="flag">
			<p>Автор: {{ book.author }}</p>
			<p>Год издания: {{ book.year }}</p>
			<p v-if="book.showDetails"> {{ book.details }} </p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		book: {
			type: Object
		}
	},
	data() {
		return {
			flag: false
		}
	}
}
</script>

<!-- 
Разработка приложения для отображения информации о книгах
Требуется создать компонент "Книга" (Book), который будет
отображать информацию о книге (название, автор и год
издания). Компонент "Книга" должен иметь возможность отображать
дополнительные детали о книге, если они существуют. 
(+ все данные о книги скрыты, пока не кликнешь на необходимую книгу (аккордеон))
 -->

