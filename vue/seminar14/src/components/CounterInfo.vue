<template>
	<div>
		<button @click="SUBSTRACT_COUNTER">-</button>
		<span> {{ counter }} </span>
		<button @click="ADD_COUNTER">+</button>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'CounterInfo',
	computed: {
		...mapState(['counter'])
	},
	methods: {
		...mapMutations(['ADD_COUNTER', 'SUBSTRACT_COUNTER'])
	},
};
</script>

<!-- Создайте новое Vuex-хранилище, определите в нем состояние (state) и несколько базовых мутаций (mutations). Подключите хранилище к вашему приложению Vue.js и используйте его для управления состоянием приложения.
Создайте счетчик который хранит состояние count
Создайте две мутации, которые увеличивают и уменьшают значение счетчика
Создайте компонент счетчик -->