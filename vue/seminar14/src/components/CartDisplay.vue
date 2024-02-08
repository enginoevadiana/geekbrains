<template>
	<div>
		<h3>Корзина</h3>
		<div v-for="item in cartItems" :key="item.id">
			<p>{{ item.name }} - {{ item.price }}</p>
		</div>
		<p>Кол-во товаров в корзине: {{ totalItems }}</p>
		<p>Общая стоимость: {{ totalPrice }}</p>
		<button @click="addItemToCart({ id: 1, name: 'Товар', price: 10 })">Добавить в корзину</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
	name: 'CartDisplay',
	computed: {
		...mapState(['counter']),
		...mapGetters(['cartItems', 'totalItems', 'totalPrice']),
	},
	methods: {
		...mapMutations(['ADD_COUNTER', 'SUBSTRACT_COUNTER']),
		...mapActions(['addItemToCart']),
	},
};
</script>

<!-- 
Необходимо реализовать функциональность управления корзиной покупок с использованием Vuex и геттеров.
Создайте хранилище Vuex с именем "store".
В состоянии (state) хранилища создайте массив "cartItems", в котором будут храниться объекты товаров в корзине. Каждый объект товара должен иметь следующие свойства: id, name, price.
Создайте мутацию (mutation) с именем "ADD_ITEM_TO_CART", которая принимает товар в качестве параметра и добавляет его в массив "cartItems".
Создайте геттер (getter) с именем "cartItems", который возвращает массив товаров в корзине.
<button @click="addItemToCart({ id: 1, name: 'Товар', price: 10})">
Добавить в корзину</button>
Создайте геттер с именем "totalItems", который возвращает общее количество товаров в корзине.
Создайте геттер с именем "totalPrice", который возвращает общую стоимость всех товаров в корзине.
Создайте действие (action) с именем "addToCart", которое принимает товар в качестве параметра и вызывает мутацию "ADD_ITEM_TO_CART".
 -->